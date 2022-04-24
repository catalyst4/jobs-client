import React from 'react';

const Container = ({ className, children }: any) => {
  return (
    <div className={`w-11/12 md:w-3/4 mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
