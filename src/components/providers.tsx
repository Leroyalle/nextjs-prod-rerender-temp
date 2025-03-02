import React from 'react';
interface Props {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  console.log('PROVIDERS RERENDER');
  return children;
};
