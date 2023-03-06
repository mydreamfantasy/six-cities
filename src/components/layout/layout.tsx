import React from 'react';
import Header from '../header/header';
import cn from 'classnames';

type LayoutProps = {
  className: string;
  children: string | JSX.Element | JSX.Element[];
};

const Layout: React.FC<LayoutProps> = ({ className, children }) => (
  <div className={cn('page', className)}>
    <Header className={className} />

    {children}
  </div>
);

export default Layout;
