import React from 'react';
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
      name: 'Buy',
      href: '/buy',
    },
    {
      name: 'Sell',
      href: '/sell',
    },
  ];
  return (
    <nav>
      <h1>
        Boxeasy
      </h1>
      <style jsx>{`
        h1 {
          color: red;
          font-family: "Josefin Sans", sans-serif;
          text-transform: uppercase;
        }
      `}</style>
      {headerItems.map(props => (
        <HeaderItem {...props} key={props.name} />
      ))}
    </nav>
  );
};

export default Header;
