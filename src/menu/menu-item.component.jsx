/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import KEY_CODES from '../constants/key-codes.constant';

import './menu-item.component.scss';

const caretIcon = (
  <svg viewBox="0 0 30 30" height="20" width="20">
    <path
      className="oc-menu-caret"
      d="M18.9,15a1.39,1.39,0,0,0-.41-1l-5-5a1.4,1.4,0,0,0-2,2l4,4-4,4a1.4,1.4,0,0,0,2,2l5-5A1.39,1.39,0,0,0,18.9,15Z"
    />
  </svg>
);

export default class MenuItem extends React.PureComponent {
  onClick = () => {
    if (this.props.onSelect && typeof this.props.onSelect === 'function') {
      this.props.onSelect(this.props.item, this.props.isGroup);
    }
  }

  onKeyDown = (event) => {
    if (event.keyCode && event.keyCode === KEY_CODES.ENTER) {
      this.onClick();
    }
  }

  getMenuItem = () => {
    const classNameMenuItem = classNames({
      'oc-menu-item': true,
      'oc-menu-item-uppercase': this.props.uppercase,
      'oc-menu-item-active': this.props.isActive,
      'oc-menu-sub-item': this.props.isSub,
    });

    const classNameContent = 'oc-menu-sub-item-content';

    const indentationStyle = {};
    if (this.props.depth) {
      const padding = (this.props.depth) * 1;
      indentationStyle.paddingLeft = `${padding}rem`;
    }

    const classNameExtra = classNames({
      'oc-menu-sub-item-extra': true,
      'rotate90-back': this.props.isOpen,
      rotate90: !this.props.isOpen,
    });

    return (
      <a
        tabIndex="0"
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        className={classNameMenuItem}
      >
        <span style={indentationStyle} />
        { this.props.prefix }
        <span className={classNameContent}>{this.props.item.text}</span>

        {
          this.props.isGroup
          ? <div className={classNameExtra}>{ caretIcon }</div>
          : null
        }
      </a>
    );
  }

  render() {
    return (
      this.getMenuItem()
    );
  }
}

MenuItem.defaultProps = {
  onSelect: null,
  isActive: false,
  isSub: false,
  isOpen: false,
  isGroup: false,
  prefix: null,
  depth: 0,
  uppercase: false,
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    to: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func,
  isActive: PropTypes.bool,
  isSub: PropTypes.bool,
  isOpen: PropTypes.bool,
  isGroup: PropTypes.bool,
  prefix: PropTypes.element,
  depth: PropTypes.number,
  uppercase: PropTypes.bool,
};
