import React from 'react';

interface PageBuilderProps {
  data: any[];
}

import dynamic from 'next/dynamic';

const components: { [key: string]: React.ComponentType<any> } = {
  hero: dynamic(() => import('./Hero')),
  pricing: dynamic(() => import('./Pricing')),
};

const PageBuilder: React.FC<PageBuilderProps> = ({ data }) => {
  return (
    <div>
      {data.map((block, index) => {
        const Component = components[block.type];

        if (!Component) {
          console.warn(`Unknown component type: ${block.type}`);
          return null;
        }

        return <Component key={index} {...block.props} />;
      })}
    </div>
  );
};

export default PageBuilder;
