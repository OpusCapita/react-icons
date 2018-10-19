import React from 'react';

import { Icon } from '../../../src/index';

import './icons-view.component.scss';


function IconsView() {
  const indicators = [
    'alert',
    'arrowLeft',
    'attachment',

    'burger',
    'burgerClose',

    'calendar',
    'CaretRight',
    'CaretLeft',
    'clock',
    'close',
    'comment',
    'commented',
    'critical',

    'delete',
    'draggingArrows',

    'edit',
    'email',
    'error',
    'exclamation',
    'export',

    'filtering',
    'flagged',
    'folder',

    'help',

    'inspected',
    'inspectedAndApproved',

    'logout',

    'minus',
    'more',

    'ok',

    'pinned',
    'plus',
    'presentation',
    'print',

    'rejected',
    'remove',
    'removeFilter',

    'save',
    'search',
    'searchWithCircle',
    'settings',
    'sortAsc',
    'sortDesc',
    'inClarification',
    'locked',

    'user',

    'warning',
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
