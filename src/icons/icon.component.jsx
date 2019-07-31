/* eslint-disable import/no-duplicates */
import React from 'react';
import PropTypes from 'prop-types';

import IndicatorAlert from
  './images/indicators/Alert.svg';
import IndicatorArrowLeft from
  './images/indicators/ArrowLeft.svg';
import IndicatorAttachment from
  './images/indicators/Attachment.svg';

import IndicatorBurger from
  './images/indicators/Burger.svg';
import IndicatorBurgerClose from
  './images/indicators/Burger-close.svg';

import IndicatorCalendar from
  './images/indicators/Calendar.svg';
import IndicatorCaretLeft from
  './images/indicators/CaretLeft.svg';
import IndicatorCaretRight from
  './images/indicators/CaretRight.svg';
import IndicatorClock from
  './images/indicators/Clock.svg';
import IndicatorClose from
  './images/indicators/Close.svg';
import IndicatorComment from
  './images/indicators/Comment.svg';
import IndicatorCommented from
  './images/indicators/Commented.svg';
import IndicatorCritical from
  './images/indicators/Critical.svg';

import IndicatorDelete from
  './images/indicators/Delete.svg';
import IndicatorDraggingArrows from
  './images/indicators/DraggingArrows.svg';

import IndicatorEdit from
  './images/indicators/Edit.svg';
import IndicatorEmail from
  './images/indicators/Email.svg';
import IndicatorError from
  './images/indicators/Error.svg';
import IndicatorExclamation from
  './images/indicators/Exclamation.svg';
import IndicatorExport from
  './images/indicators/Export.svg';

import IndicatorFiltering from
  './images/indicators/Filtering.svg';
import IndicatorFlagged from
  './images/indicators/Flagged.svg';
import IndicatorFolder from
  './images/indicators/Folder.svg';

import IndicatorHelp from
  './images/indicators/Help.svg';


import IndicatorInfo from
  './images/indicators/Info.svg'; 

import IndicatorInspected from
  './images/indicators/Inspected.svg';
import IndicatorInspectedAndApproved from
  './images/indicators/InspectedAndApproved.svg';

import IndicatorLogout from
  './images/indicators/Logout.svg';

import IndicatorMatched from
  './images/indicators/Matched.svg';
import IndicatorMinus from
  './images/indicators/Minus.svg';
import IndicatorMore from
  './images/indicators/More.svg';

import IndicatorOk from
  './images/indicators/Ok.svg';

import IndicatorPinned from
  './images/indicators/Pinned.svg';
import IndicatorPlus from
  './images/indicators/Plus.svg';
import IndicatorPresentation from
  './images/indicators/Presentation.svg';
import IndicatorPrint from
  './images/indicators/Print.svg';

import IndicatorRejected from
  './images/indicators/Rejected.svg';
import IndicatorRemove from
  './images/indicators/Remove.svg';
import RemoveFilter from
  './images/indicators/RemoveFilter.svg';

import IndicatorSave from
  './images/indicators/Save.svg';
import IndicatorSearch from
  './images/indicators/Search.svg';
import IndicatorSearchWithCircle from
  './images/indicators/SearchWithCircle.svg';
import IndicatorSettings from
  './images/indicators/Settings.svg';
import IndicatorSortAsc from
  './images/indicators/SortAsc.svg';
import IndicatorSortDesc from
  './images/indicators/SortDesc.svg';
import IndicatorInClarification from
  './images/indicators/StatusInclarification.svg';
import IndicatorLocked from
  './images/indicators/StatusLocked.svg';
import IndicatorStatusUser from
  './images/indicators/StatusUser.svg';

import IndicatorUnmatched from
  './images/indicators/Unmatched.svg';

import IndicatorConfirmedSub from
  './images/indicators/ConfirmedSub.svg';
import IndicatorPartiallySub from
  './images/indicators/PartiallySub.svg';
import IndicatorErrorSub from
  './images/indicators/ErrorSub.svg';

import IndicatorWarning from
  './images/indicators/Warning.svg';
import IndicatorExceedsLimit from
  './images/indicators/ExceedsLimit.svg';

import ProductInvoices from
  './images/products/Invoices.svg';
import ProductUser from
  './images/products/User.svg';
import ProductAccounts from
  './images/products/Accounts.svg';
import ProductArchive from
  './images/products/Archive.svg';
import ProductDashboard from
  './images/products/Dashboard.svg';
import ProductInfo from
  './images/products/Info.svg';
import ProductLiquidity from
  './images/products/Liquidity.svg';
import ProductNetting from
  './images/products/Netting.svg';
import ProductPayments from
  './images/products/Payments.svg';
import ProductSettings from
  './images/products/Settings.svg';
import ProductTools from
  './images/products/Tools.svg';
import ProductUsers from
  './images/products/Users.svg';
import ProductMatching from
  './images/products/Matching.svg';
import ProductInspector from
  './images/products/Inspector.svg';

import InvoicesGeneric from
  './images/invoices/document/generic.svg';
import InvoicesPdf from
  './images/invoices/document/pdf.svg';
import InvoicesPng from
  './images/invoices/document/png.svg';
import InvoicesPpt from
  './images/invoices/document/ppt.svg';
import InvoicesWord from
  './images/invoices/document/word.svg';
import InvoicesXls from
  './images/invoices/document/xls.svg';

import OCLong from
  './images/logo/oc-logo.svg';
import OCShort from
  './images/logo/oc-logo-short.svg';

const components = {
  indicator: {
    alert: React.createFactory(IndicatorAlert),
    arrowLeft: React.createFactory(IndicatorArrowLeft),
    attachment: React.createFactory(IndicatorAttachment),

    burger: React.createFactory(IndicatorBurger),
    burgerClose: React.createFactory(IndicatorBurgerClose),

    calendar: React.createFactory(IndicatorCalendar),
    CaretRight: React.createFactory(IndicatorCaretRight),
    CaretLeft: React.createFactory(IndicatorCaretLeft),
    clock: React.createFactory(IndicatorClock),
    close: React.createFactory(IndicatorClose),
    comment: React.createFactory(IndicatorComment),
    commented: React.createFactory(IndicatorCommented),
    critical: React.createFactory(IndicatorCritical),

    delete: React.createFactory(IndicatorDelete),
    draggingArrows: React.createFactory(IndicatorDraggingArrows),

    edit: React.createFactory(IndicatorEdit),
    email: React.createFactory(IndicatorEmail),
    error: React.createFactory(IndicatorError),
    exclamation: React.createFactory(IndicatorExclamation),
    export: React.createFactory(IndicatorExport),

    filtering: React.createFactory(IndicatorFiltering),
    flagged: React.createFactory(IndicatorFlagged),
    folder: React.createFactory(IndicatorFolder),

    help: React.createFactory(IndicatorHelp),

    info: React.createFactory(IndicatorInfo),


    inspected: React.createFactory(IndicatorInspected),
    inspectedAndApproved: React.createFactory(IndicatorInspectedAndApproved),

    logout: React.createFactory(IndicatorLogout),

    matched: React.createFactory(IndicatorMatched),
    minus: React.createFactory(IndicatorMinus),
    more: React.createFactory(IndicatorMore),

    ok: React.createFactory(IndicatorOk),

    pinned: React.createFactory(IndicatorPinned),
    plus: React.createFactory(IndicatorPlus),
    presentation: React.createFactory(IndicatorPresentation),
    print: React.createFactory(IndicatorPrint),

    rejected: React.createFactory(IndicatorRejected),
    remove: React.createFactory(IndicatorRemove),
    removeFilter: React.createFactory(RemoveFilter),

    save: React.createFactory(IndicatorSave),
    search: React.createFactory(IndicatorSearch),
    searchWithCircle: React.createFactory(IndicatorSearchWithCircle),
    settings: React.createFactory(IndicatorSettings),
    sortAsc: React.createFactory(IndicatorSortAsc),
    sortDesc: React.createFactory(IndicatorSortDesc),
    inClarification: React.createFactory(IndicatorInClarification),
    locked: React.createFactory(IndicatorLocked),

    unmatched: React.createFactory(IndicatorUnmatched),
    user: React.createFactory(IndicatorStatusUser),

    warning: React.createFactory(IndicatorWarning),

    exceedsLimit: React.createFactory(IndicatorExceedsLimit),

    confirmedSub: React.createFactory(IndicatorConfirmedSub),
    partiallySub: React.createFactory(IndicatorPartiallySub),
    errorSub: React.createFactory(IndicatorErrorSub),
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
      case 'product': {
        this.defaultWidth = 40;
        this.defaultHeight = 40;
        break;
      }
      case 'indicator': {
        this.defaultWidth = 25;
        this.defaultHeight = 25;
        break;
      }
      case 'logo': {
        if (props.name === 'OCLong') {
          this.defaultWidth = 150;
          this.defaultHeight = 30;
        } else {
          this.defaultWidth = 50;
          this.defaultHeight = 30;
        }
        break;
      }
      default:
        this.defaultWidth = 40;
        this.defaultHeight = 40;
    }
  }

  render() {
    const {
      type,
      name,
      width,
      height,
      ...otherProps
    } = this.props;
    const component = components[type] && components[type][name];
    const properties = {
      width: width || this.defaultWidth,
      height: height || this.defaultHeight,
      focusable: 'false',
      ...otherProps,
    };
    if (typeof IndicatorLogout === 'function') {
      return component(properties);
    }
    return <span className="icon" {...this.props} />;
  }
}

Icon.defaultProps = {
  width: null,
  height: null,
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};
