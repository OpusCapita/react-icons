import React from 'react';

import { Icon } from '../../../src/index';

import './icons-view.component.scss';


function IconsView() {
  const indicators = [
    'burgerClose',
    'remove',
    'burger',
    'logout',
    'CaretRight',
    'CaretLeft',
    'flagged',
    'comment',
    'commented',
    'email',
    'attachment',
    'inClarification',
    'rejected',
    'locked',
    'ok',
    'inspected',
    'inspectedAndApproved',
    'close',
    'delete',
    'alert',
    'warning',
    'error',
    'critical',
    'exclamation',
    'plus',
    'minus',
    'arrowLeft',
    'help',
    'settings',
    'search',
    'searchWithCircle',
    'pinned',
    'draggingArrows',
  ];
  const products = [
    'Invoices',
    'user',
    'Accounts',
    'Archive',
    'Dashboard',
    'Info',
    'Liquidity',
    'Netting',
    'Payments',
    'Settings',
    'Tools',
    'Users',
    'Examples',
    'Matching',
    'Inspector',
  ];
  const invoices = [
    'generic',
    'pdf',
    'png',
    'ppt',
    'word',
    'xls',
  ];
  const logos = [
    'OCShort',
    'OCLong',
  ];
  return (
    <div className="oc-content">
      <div id="icons-container">
        {indicators.map(indicator => (
          <div key={indicator} className="icon-container">
            <Icon type="indicator" name={indicator} />
            <span>indicator: {indicator}</span>
          </div>),
        )}
        {products.map(product => (
          <div key={product} className="icon-container">
            <Icon type="product" name={product} />
            <span>product: {product}</span>
          </div>),
        )}
        {invoices.map(invoice => (
          <div key={invoice} className="icon-container">
            <Icon type="invoices" name={invoice} />
            <span>invoice: {invoice}</span>
          </div>),
        )}
        {logos.map(logo => (
          <div key={logo} className="icon-container">
            <Icon type="logo" name={logo} />
            <span>logo: {logo}</span>
          </div>),
        )}
      </div>
    </div>
  );
}

export default IconsView;
