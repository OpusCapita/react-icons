import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs';
import { Icon } from '../src/index';

import './react-icons-story.scss';

// Keep these updated with Icon.component components.product object
const productsOpts = [
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
// Keep these updated with Icon.component components.indicator object
const indicatorsOpts = [
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
// Keep these updated with Icon.component components.logo object
const logoOpts = [
  'OCShort',
  'OCLong',
];
// Keep these updated with Icon.component components.invoices object
const invoiceOpts = [
  'generic',
  'pdf',
  'png',
  'ppt',
  'word',
  'xls',
];

const commonInfo = require('../README.md');

const layout = {
  sgComponentContainer: 'oc-ui-content-container',
  sgComponentIcons: 'oc-ui-content',
  sgComponentContainerOverflow: 'oc-sg-content',
  sgComponentHeaderContainer: '',
  sgComponentHeaderContent: '',
  sgComponentIconsContainer: 'oc-sg-icons-container',
  sgComponentIconContainer: 'oc-sg-icon-container',
  sgComponentIconHeaderContainer: 'oc-sg-icon-header-container',
  sgComponentIconContentContainer: 'oc-sg-icon-content-container',
  sgComponentIconContentContainerLogos: 'oc-sg-icon-content-container logos',
};
const customWidth = (name) => {
  if (name.indexOf('Long') !== -1) {
    return { width: 120 };
  }
  return {};
};

const stories = storiesOf('@opuscapita/react-icons', module);

stories.add('Basic info', () => (
  <div id="styleguide-component-container" className={layout.sgComponentContainer}>
    <div id="styleguide-component-container" className={layout.sgComponentContainerOverflow}>

      <div id="styleguide-component-products-icons" className={layout.sgComponentIcons}>
        <div id="styleguide-component-header-container" className={layout.sgComponentHeaderContainer}>
          <div id="styleguide-component-header-content" className={layout.sgComponentHeaderContent}>
            <h2>Products</h2>
          </div>
        </div>
        <div id="styleguide-component-icons-container" className={layout.sgComponentIconsContainer}>
          { productsOpts.map(product => (
            <div key={`product_${product}`} id={`styleguide-component-icon-${product}-container`} className={layout.sgComponentIconContainer}>
              <div id={`styleguide-component-icon-${product}-header-container`} className={layout.sgComponentIconHeaderContainer}>
                <h4>{product}</h4>
              </div>
              <div id={`styleguide-component-icon-${product}-content-container`} className={layout.sgComponentIconContentContainer}>
                <Icon type="product" name={product} />
              </div>
            </div>
          ))
          }
        </div>
      </div>

      <div id="styleguide-component-indicator-icons" className={layout.sgComponentIcons}>
        <div id="styleguide-component-header-container" className={layout.sgComponentHeaderContainer}>
          <div id="styleguide-component-header-content" className={layout.sgComponentHeaderContent}>
            <h2>Indicators</h2>
          </div>
        </div>
        <div id="styleguide-component-icons-container" className={layout.sgComponentIconsContainer}>
          { indicatorsOpts.map(indicator => (
            <div key={`indicator_${indicator}`} id={`styleguide-component-icon-${indicator}-container`} className={layout.sgComponentIconContainer}>
              <div id={`styleguide-component-icon-${indicator}-header-container`} className={layout.sgComponentIconHeaderContainer}>
                <h4>{indicator}</h4>
              </div>
              <div id={`styleguide-component-icon-${indicator}-content-container`} className={layout.sgComponentIconContentContainer}>
                <Icon type="indicator" name={indicator} />
              </div>
            </div>
          ))
          }
        </div>
      </div>

      <div id="styleguide-component-invoices-icons" className={layout.sgComponentIcons}>
        <div id="styleguide-component-header-container" className={layout.sgComponentHeaderContainer}>
          <div id="styleguide-component-header-content" className={layout.sgComponentHeaderContent}>
            <h2>Invoice</h2>
          </div>
        </div>
        <div id="styleguide-component-icons-container" className={layout.sgComponentIconsContainer}>
          { invoiceOpts.map(invoice => (
            <div key={`invoice_${invoice}`} id={`styleguide-component-icon-${invoice}-container`} className={layout.sgComponentIconContainer}>
              <div id={`styleguide-component-icon-${invoice}-header-container`} className={layout.sgComponentIconHeaderContainer}>
                <h4>{invoice}</h4>
              </div>
              <div id={`styleguide-component-icon-${invoice}-content-container`} className={layout.sgComponentIconContentContainer}>
                <Icon type="invoices" name={invoice} />
              </div>
            </div>
          ))
          }
        </div>
      </div>

      <div id="styleguide-component-logos-icons" className={layout.sgComponentIcons}>
        <div id="styleguide-component-header-container" className={layout.sgComponentHeaderContainer}>
          <div id="styleguide-component-header-content" className={layout.sgComponentHeaderContent}>
            <h2>Logos</h2>
          </div>
        </div>
        <div id="styleguide-component-icons-container" className={layout.sgComponentIconsContainer}>
          { logoOpts.map(logo => (
            <div key={`logo_${logo}`} id={`styleguide-component-icon-${logo}-container`} className={layout.sgComponentIconContainer}>
              <div id={`styleguide-component-icon-${logo}-header-container`} className={layout.sgComponentIconHeaderContainer}>
                <h4>{logo}</h4>
              </div>
              <div id={`styleguide-component-icon-${logo}-content-container`} className={layout.sgComponentIconContentContainerLogos}>
                <Icon type="logo" name={logo} {...customWidth(logo)} />
              </div>
            </div>
          ))
          }
        </div>
      </div>

    </div>
  </div>
));

stories.add('Products', () => (
  <div id="styleguide-component-container" className="oc-ui-content">
    <Icon
      type="product"
      name={select('Icon name', productsOpts, 'Tools', 'Products')}
      width={number('Icon width', 30)}
      height={number('Icon height', 30)}
    />
  </div>
));

stories.add('Indicators', () => (
  <div id="styleguide-component-container" className="oc-ui-content">
    <Icon
      type="indicator"
      name={select('Icon name', indicatorsOpts, 'help', 'Indicators')}
      width={number('Icon width', 30)}
      height={number('Icon height', 30)}
    />
  </div>
));

stories.add('Logos', () => (
  <Icon
    type="logo"
    name={select('Icon name', logoOpts, 'OCLong', 'Logos')}
    width={number('Icon width', 30)}
    height={number('Icon height', 30)}
  />
));

stories.add('Invoices', () => (
  <div id="styleguide-component-container" className="oc-ui-content">
    <Icon
      type="invoices"
      name={select('Icon name', invoiceOpts, 'generic', 'Invoices')}
      width={number('Icon width', 30)}
      height={number('Icon height', 30)}
    />
  </div>
));
