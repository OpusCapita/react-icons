/* eslint-disable react/no-multi-comp */
/* eslint-disable no-unused-vars */

import React from 'react';
import { withRouter, routerShape } from 'react-router';

import PerfProfiler from './utils/perf-profiler/perf-profiler.component';
import Menu from '../src/menu/menu.component';
import ITEMS from './layout/menu.constants';
import { applicationLayout, Icon } from '../src/index';

import './app.component.scss';

const headerStyle = { height: 40, width: '100%', backgroundColor: 'green' };
const Header = () => {
  const content = (
    <div style={headerStyle}>HERE BE HEADER</div>
  );

  return content;
};

const getPrefix = (item) => {
  const content = null;
  return content;
};

const sideMenuContainerStyle = { width: '20rem' };
const SideMenu = (props) => {
  const isNavigation = true;
  return (
    <Menu
      style={sideMenuContainerStyle}
      items={ITEMS}
      getContent={getPrefix}
      isNavigation={isNavigation}
      onSelect={(item) => {
        if ('to' in item) {
          props.router.push(item.to);
        }
      }}
    />
  );
};

SideMenu.propTypes = {
  router: routerShape.isRequired,
};

const menuStyle = { width: 200, height: '100%', backgroundColor: 'blue' };
const TestMenu = () => {
  const content = <div style={menuStyle}>HERE BE MENU</div>;
  return content;
};

const appStyle = { height: '100%', backgroundColor: 'yellow' };
const TestApp = () => {
  const content = <div style={appStyle}>HERE BE CONTENT</div>;
  return content;
};

const footerStyle = { height: 40, backgroundColor: 'red' };
const Footer = () => {
  const content = <div style={footerStyle}>HERE BE FOOTER</div>;
  return content;
};

const layoutOptions = {
  closeMenuOutside: true,
  showHeader: true,
  breakPoint: 1279,
  burgerClasses: ['oc-burger-orange'],
};

const Content = ({ children }) => {
  const content = (
    <div className="oc-content-container">
      { children }
    </div>
  );

  return content;
};

export default applicationLayout(
  Content, null, withRouter(SideMenu), null, layoutOptions,
);
