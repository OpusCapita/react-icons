import React from 'react';
import PropTypes from 'prop-types';
import MenuItems from './menu-items.component';

import './menu.component.scss';

const Menu = ({ items, activeItems, isNavigation, onSelect, getContent, uppercase, ...other }) => {
  const content = (
      /* By using recursive component clicking a group item does not re-render the whole menu */
    <MenuItems
      onSelect={onSelect}
      items={items}
      activeItems={activeItems}
      subMenu={false}
      isNavigation={isNavigation}
      getContent={getContent}
      uppercase={uppercase}
      depth={0}
    />);

  return (
    isNavigation
    ? (
      <nav className="oc-menu" role="navigation" {...other}>
        { content }
      </nav>
    )
    :
      <div className="oc-menu" {...other}>
        { content }
      </div>
  );
};

Menu.defaultProps = {
  items: [],
  onSelect: null,
  isNavigation: false,
  getContent: null,
  activeItems: {},
  uppercase: false,
};

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    to: PropTypes.string,
    text: PropTypes.string,
  })),
  activeItems: PropTypes.objectOf(PropTypes.number),
  isNavigation: PropTypes.bool,
  onSelect: PropTypes.func,
  getContent: PropTypes.func,
  uppercase: PropTypes.bool,
};

export default Menu;
