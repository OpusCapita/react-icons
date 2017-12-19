/* eslint-disable import/no-duplicates */
import React from 'react';
import PropTypes from 'prop-types';

import IndicatorRemove from
  '../../images/indicators/Remove.svg';
import IndicatorBurgerClose from
  '../../images/indicators/Burger-close.svg';
import IndicatorBurger from
  '../../images/indicators/Burger.svg';
import IndicatorLogout from
  '../../images/indicators/Logout.svg';
import IndicatorCaretRight from
  '../../images/indicators/CaretRight.svg';
import IndicatorCaretLeft from
  '../../images/indicators/CaretLeft.svg';
import IndicatorFlagged from
  '../../images/indicators/Flagged.svg';
import IndicatorComment from
  '../../images/indicators/Comment.svg';
import IndicatorCommented from
  '../../images/indicators/Commented.svg';
import IndicatorEmail from
  '../../images/indicators/Email.svg';
import IndicatorAttachment from
  '../../images/indicators/Attachment.svg';
import IndicatorInClarification from
  '../../images/indicators/StatusInclarification.svg';
import IndicatorRejected from
  '../../images/indicators/Rejected.svg';
import IndicatorLocked from
  '../../images/indicators/StatusLocked.svg';
import IndicatorOk from
  '../../images/indicators/Ok.svg';
import IndicatorInspected from
  '../../images/indicators/Inspected.svg';
import IndicatorInspectedAndApproved from
  '../../images/indicators/InspectedAndApproved.svg';
import IndicatorClose from
  '../../images/indicators/Close.svg';
import IndicatorDelete from
  '../../images/indicators/Delete.svg';
import IndicatorAlert from
  '../../images/indicators/Alert.svg';
import IndicatorWarning from
  '../../images/indicators/Warning.svg';
import IndicatorError from
  '../../images/indicators/Error.svg';
import IndicatorCritical from
  '../../images/indicators/Critical.svg';
import IndicatorExclamation from
  '../../images/indicators/Exclamation.svg';
import IndicatorPlus from
  '../../images/indicators/Plus.svg';
import IndicatorMinus from
  '../../images/indicators/Minus.svg';
import IndicatorArrowLeft from
  '../../images/indicators/ArrowLeft.svg';
import IndicatorHelp from
  '../../images/indicators/Help.svg';
import IndicatorMore from
  '../../images/indicators/More.svg';
import IndicatorSettings from
  '../../images/indicators/Settings.svg';
import IndicatorSearch from
  '../../images/indicators/Search.svg';
import IndicatorSearchWithCircle from
  '../../images/indicators/SearchWithCircle.svg';
import IndicatorPinned from
  '../../images/indicators/Pinned.svg';
import IndicatorDraggingArrows from
  '../../images/indicators/DraggingArrows.svg';

import ProductInvoices from
  '../../images/products/Invoices.svg';
import ProductUser from
  '../../images/products/User.svg';
import ProductAccounts from
  '../../images/products/Accounts.svg';
import ProductArchive from
  '../../images/products/Archive.svg';
import ProductDashboard from
  '../../images/products/Dashboard.svg';
import ProductInfo from
  '../../images/products/Info.svg';
import ProductLiquidity from
  '../../images/products/Liquidity.svg';
import ProductNetting from
  '../../images/products/Netting.svg';
import ProductPayments from
  '../../images/products/Payments.svg';
import ProductSettings from
  '../../images/products/Settings.svg';
import ProductTools from
  '../../images/products/Tools.svg';
import ProductUsers from
  '../../images/products/Users.svg';
import ProductMatching from
  '../../images/products/Matching.svg';
import ProductInspector from
  '../../images/products/Inspector.svg';

import InvoicesGeneric from
  '../../images/invoices/document/generic.svg';
import InvoicesPdf from
  '../../images/invoices/document/pdf.svg';
import InvoicesPng from
  '../../images/invoices/document/png.svg';
import InvoicesPpt from
  '../../images/invoices/document/ppt.svg';
import InvoicesWord from
  '../../images/invoices/document/word.svg';
import InvoicesXls from
  '../../images/invoices/document/xls.svg';

import OCLong from
  '../../images/logo/oc-logo.svg';
import OCShort from
  '../../images/logo/oc-logo-short.svg';

const components = {
  indicator: {
    burgerClose: React.createFactory(IndicatorBurgerClose),
    remove: React.createFactory(IndicatorRemove),
    burger: React.createFactory(IndicatorBurger),
    logout: React.createFactory(IndicatorLogout),
    CaretRight: React.createFactory(IndicatorCaretRight),
    CaretLeft: React.createFactory(IndicatorCaretLeft),
    flagged: React.createFactory(IndicatorFlagged),
    comment: React.createFactory(IndicatorComment),
    commented: React.createFactory(IndicatorCommented),
    email: React.createFactory(IndicatorEmail),
    attachment: React.createFactory(IndicatorAttachment),
    inClarification: React.createFactory(IndicatorInClarification),
    rejected: React.createFactory(IndicatorRejected),
    locked: React.createFactory(IndicatorLocked),
    ok: React.createFactory(IndicatorOk),
    inspected: React.createFactory(IndicatorInspected),
    inspectedAndApproved: React.createFactory(IndicatorInspectedAndApproved),
    close: React.createFactory(IndicatorClose),
    delete: React.createFactory(IndicatorDelete),
    alert: React.createFactory(IndicatorAlert),
    warning: React.createFactory(IndicatorWarning),
    error: React.createFactory(IndicatorError),
    critical: React.createFactory(IndicatorCritical),
    exclamation: React.createFactory(IndicatorExclamation),
    plus: React.createFactory(IndicatorPlus),
    minus: React.createFactory(IndicatorMinus),
    arrowLeft: React.createFactory(IndicatorArrowLeft),
    help: React.createFactory(IndicatorHelp),
    more: React.createFactory(IndicatorMore),
    settings: React.createFactory(IndicatorSettings),
    search: React.createFactory(IndicatorSearch),
    searchWithCircle: React.createFactory(IndicatorSearchWithCircle),
    pinned: React.createFactory(IndicatorPinned),
    draggingArrows: React.createFactory(IndicatorDraggingArrows),  
  },
  product: {
    Invoices: React.createFactory(ProductInvoices),
    user: React.createFactory(ProductUser),
    Accounts: React.createFactory(ProductAccounts),
    Archive: React.createFactory(ProductArchive),
    Dashboard: React.createFactory(ProductDashboard),
    Info: React.createFactory(ProductInfo),
    Liquidity: React.createFactory(ProductLiquidity),
    Netting: React.createFactory(ProductNetting),
    Payments: React.createFactory(ProductPayments),
    Settings: React.createFactory(ProductSettings),
    Tools: React.createFactory(ProductTools),
    Users: React.createFactory(ProductUsers),
    Examples: React.createFactory(ProductInfo),
    Matching: React.createFactory(ProductMatching),
    Inspector: React.createFactory(ProductInspector),
  },
  invoices: {
    generic: React.createFactory(InvoicesGeneric),
    pdf: React.createFactory(InvoicesPdf),
    png: React.createFactory(InvoicesPng),
    ppt: React.createFactory(InvoicesPpt),
    word: React.createFactory(InvoicesWord),
    xls: React.createFactory(InvoicesXls),
  },
  logo: {
    OCShort: React.createFactory(OCShort),
    OCLong: React.createFactory(OCLong),
  },
};

export default class Icon extends React.Component {
  constructor(props) {
    super(props);
    switch (props.type) {
      case 'product':
        this.defaultWidth = 40;
        this.defaultHeight = 40;
        break;
      case 'indicator':
        this.defaultWidth = 30;
        this.defaultHeight = 30;
        break;
      default:
        this.defaultWidth = 40;
        this.defaultHeight = 40;
    }
  }

  render() {
    const { type, name, width, height, ...otherProps } = this.props;
    const component = components[type] && components[type][name];
    const properties = {
      width: width || this.defaultWidth,
      height: height || this.defaultHeight,
      focusable: false,
      ...otherProps,
    };
    if (typeof IndicatorLogout === 'function') {
      return component(properties);
    }
    return <span className="icon" {...this.props} />;
  }
}

Icon.defaultProps = {
  width: 40,
  height: 40,
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};
