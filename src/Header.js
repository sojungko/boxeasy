import React, { Component } from 'react';
import HeaderItem from './HeaderItem.js';

class Header extends Component {
  render() {
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
        name: 'Schedule Pickup',
        href: '/pickup',
      }
    ]
    return (
      <nav>
        {headerItems.map((props, i) => <HeaderItem {...props} key={i} />)}
      </nav>
    )
  }
}

export default Header;