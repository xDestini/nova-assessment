import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, ctaText, ctaLink }) => {
  return (
    <div style={{ backgroundImage: `url(${imageUrl})`, padding: '50px', color: 'white' }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <a href={ctaLink}>{ctaText}</a>
    </div>
  );
};

export default Hero;

