import React from 'react';
import MenuItem from '../03/MenuItem';
const Menu = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <MenuItem key={item.url} text={item.text} url={item.url} />
      ))}
    </ul>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    ProTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Menu;
