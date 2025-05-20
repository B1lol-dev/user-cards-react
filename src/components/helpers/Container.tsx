import React from "react";

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
  return (
    <div
      className={`container mx-auto px-4 max-w-[1800px] w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default React.memo(Container);
