import React from 'react';
import Link from 'next/link';

const HeaderItem = ({ name, href }) => <Link href={href}><a>{name}</a></Link>;

export default HeaderItem;
