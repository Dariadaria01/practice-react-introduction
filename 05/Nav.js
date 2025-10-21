import React from 'react';
import Menu from './Menu';

const Nav = () => {
  const menuItems = [
    { text: 'home', url: '/' },
    { text: 'kontakt', url: '/contact' },
  ];

  return (
    <nav>
      <Menu items={menuItems} />
    </nav>
  );
};

export default Nav;
