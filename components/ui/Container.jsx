"use client";

import { cn } from "@/lib/utils";

export default function Container({ 
  children, 
  className, 
  as: Component = "div", 
  ...props 
}) {
  return (
    <Component
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
}