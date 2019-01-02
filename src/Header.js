import React, { Component } from 'react';
import HeaderItem from './HeaderItem';

const Header = () => {
  const headerItems = [
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Terms of Use',
      href: '/terms',
    },
    {
      name: 'Donate Boxes',
      href: '/schedule',
    },
  ];
  return (
    <nav>
      {headerItems.map(props => (
        <HeaderItem {...props} key={props.name} />
      ))}
    </nav>
  );
};

export default Header;
