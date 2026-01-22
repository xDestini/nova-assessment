import { render } from '@testing-library/react';

// Mock next/dynamic to return mock components directly
jest.mock('next/dynamic', () => (importFn: any) => {
  const modulePath = importFn.toString();
  if (modulePath.includes('Hero')) {
    const MockHero = (props: any) => <div data-testid="hero-component">Hero: {props.title}</div>;
    MockHero.displayName = 'Hero';
    return MockHero;
  }
  if (modulePath.includes('Pricing')) {
    const MockPricing = (props: any) => <div data-testid="pricing-component">Pricing: {props.plans.length} plans</div>;
    MockPricing.displayName = 'Pricing';
    return MockPricing;
  }
  return () => null;
});

import PageBuilder from './PageBuilder';

describe('PageBuilder', () => {
  it('renders known components correctly', () => {
    const data = [
      { type: 'hero', props: { title: 'Test Hero' } },
      { type: 'pricing', props: { plans: [{ name: 'Basic' }] } },
    ];
    const { getByTestId } = render(<PageBuilder data={data} />);

    expect(getByTestId('hero-component')).toBeInTheDocument();
    expect(getByTestId('pricing-component')).toBeInTheDocument();
  });

  it('does not crash when encountering an unknown component type', () => {
    const data = [
      { type: 'unknown', props: {} },
      { type: 'hero', props: { title: 'Test Hero' } },
    ];
    // We expect a console warning, but the app should not crash
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    const { queryByTestId } = render(<PageBuilder data={data} />);

    expect(consoleSpy).toHaveBeenCalledWith('Unknown component type: unknown');
    expect(queryByTestId('hero-component')).toBeInTheDocument();
    consoleSpy.mockRestore();
  });

  it('renders nothing if data is empty', () => {
    const { container } = render(<PageBuilder data={[]} />);
    const firstChild = container.firstChild as HTMLElement;
    expect(firstChild).toBeInTheDocument();
    expect(firstChild.children.length).toBe(0);
  });

  it('passes correct props to components', () => {
    const heroProps = { title: 'Dynamic Hero', subtitle: 'Sub', imageUrl: '/img.jpg', ctaText: 'Click', ctaLink: '/link' };
    const pricingProps = { plans: [{ name: 'Premium', price: '$50', features: ['A', 'B'] }] };
    const data = [
      { type: 'hero', props: heroProps },
      { type: 'pricing', props: pricingProps },
    ];

    const { getByTestId } = render(<PageBuilder data={data} />);

    const heroComponent = getByTestId('hero-component');
    expect(heroComponent).toHaveTextContent('Hero: Dynamic Hero');

    const pricingComponent = getByTestId('pricing-component');
    expect(pricingComponent).toHaveTextContent('Pricing: 1 plans');
  });
});

