import React from 'react';
import '../styles/Menu.css';

const Menu = ({ className, children }) => {
  return <menu className={className}>{children}</menu>;
};

export default Menu;
