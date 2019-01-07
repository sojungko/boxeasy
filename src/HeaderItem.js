import React, { Fragment } from 'react';
import Link from 'next/link';

const HeaderItem = ({ name, href }) => (
  <Fragment>
    <li>
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </li>
    <style jsx>
      {`
        li {
          font-family: "Open Sans", sans-serif;
          text-transform: uppercase;
          list-style-type: none;
          margin: 0 10px;
        }
        a {
          text-decoration: none;
          color: black;
        }
      `}
    </style>
  </Fragment>
);

export default HeaderItem;
