import React from 'react';
import Header from '../header/header';
import cn from 'classnames';

type LayoutProps = {
  className?: string;
  hasNav?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ className, hasNav, children }) => (
  <div className={cn('page', className)}>
    <Header hasNav={hasNav} />

    {children}
  </div>
);

export default Layout;
