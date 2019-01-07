import React, { Fragment } from 'react';
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
    <Fragment>
      <nav>
        <h1>Boxeasy</h1>
        <ul>
          {headerItems.map(props => (
            <HeaderItem {...props} key={props.name} />
          ))}
        </ul>
      </nav>
      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: space-between;
          }
          h1 {
            color: red;
            font-family: "Josefin Sans", sans-serif;
            text-transform: uppercase;
          }
          ul {
            display: flex;
          }
        `}
      </style>
    </Fragment>
  );
};

export default Header;
