import React from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fluid?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = 'div',
  fluid = false,
}) => {
  return (
    <Component
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        fluid ? 'w-full' : 'max-w-[1280px]', // Reduced from 1408px to standard max-w-7xl
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;