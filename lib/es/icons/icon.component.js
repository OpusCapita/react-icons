var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable import/no-duplicates */
import React from 'react';
import PropTypes from 'prop-types';

import IndicatorAlert from './images/indicators/Alert.svg';
import IndicatorArrowLeft from './images/indicators/ArrowLeft.svg';
import IndicatorAttachment from './images/indicators/Attachment.svg';

import IndicatorBurger from './images/indicators/Burger.svg';
import IndicatorBurgerClose from './images/indicators/Burger-close.svg';

import IndicatorCalendar from './images/indicators/Calendar.svg';
import IndicatorCaretLeft from './images/indicators/CaretLeft.svg';
import IndicatorCaretRight from './images/indicators/CaretRight.svg';
import IndicatorClock from './images/indicators/Clock.svg';
import IndicatorClose from './images/indicators/Close.svg';
import IndicatorComment from './images/indicators/Comment.svg';
import IndicatorCommented from './images/indicators/Commented.svg';
import IndicatorCritical from './images/indicators/Critical.svg';

import IndicatorDelete from './images/indicators/Delete.svg';
import IndicatorDraggingArrows from './images/indicators/DraggingArrows.svg';

import IndicatorEdit from './images/indicators/Edit.svg';
import IndicatorEmail from './images/indicators/Email.svg';
import IndicatorError from './images/indicators/Error.svg';
import IndicatorExclamation from './images/indicators/Exclamation.svg';
import IndicatorExport from './images/indicators/Export.svg';

import IndicatorFiltering from './images/indicators/Filtering.svg';
import IndicatorFlagged from './images/indicators/Flagged.svg';
import IndicatorFolder from './images/indicators/Folder.svg';

import IndicatorHelp from './images/indicators/Help.svg';

import IndicatorInspected from './images/indicators/Inspected.svg';
import IndicatorInspectedAndApproved from './images/indicators/InspectedAndApproved.svg';

import IndicatorLogout from './images/indicators/Logout.svg';

import IndicatorMinus from './images/indicators/Minus.svg';
import IndicatorMore from './images/indicators/More.svg';

import IndicatorOk from './images/indicators/Ok.svg';

import IndicatorPinned from './images/indicators/Pinned.svg';
import IndicatorPlus from './images/indicators/Plus.svg';
import IndicatorPresentation from './images/indicators/Presentation.svg';
import IndicatorPrint from './images/indicators/Print.svg';

import IndicatorRejected from './images/indicators/Rejected.svg';
import IndicatorRemove from './images/indicators/Remove.svg';
import RemoveFilter from './images/indicators/RemoveFilter.svg';

import IndicatorSave from './images/indicators/Save.svg';
import IndicatorSearch from './images/indicators/Search.svg';
import IndicatorSearchWithCircle from './images/indicators/SearchWithCircle.svg';
import IndicatorSettings from './images/indicators/Settings.svg';
import IndicatorSortAsc from './images/indicators/SortAsc.svg';
import IndicatorSortDesc from './images/indicators/SortDesc.svg';
import IndicatorInClarification from './images/indicators/StatusInclarification.svg';
import IndicatorLocked from './images/indicators/StatusLocked.svg';
import IndicatorStatusUser from './images/indicators/StatusUser.svg';

import IndicatorWarning from './images/indicators/Warning.svg';
import IndicatorExceedsLimit from './images/indicators/ExceedsLimit.svg';

import ProductInvoices from './images/products/Invoices.svg';
import ProductUser from './images/products/User.svg';
import ProductAccounts from './images/products/Accounts.svg';
import ProductArchive from './images/products/Archive.svg';
import ProductDashboard from './images/products/Dashboard.svg';
import ProductInfo from './images/products/Info.svg';
import ProductLiquidity from './images/products/Liquidity.svg';
import ProductNetting from './images/products/Netting.svg';
import ProductPayments from './images/products/Payments.svg';
import ProductSettings from './images/products/Settings.svg';
import ProductTools from './images/products/Tools.svg';
import ProductUsers from './images/products/Users.svg';
import ProductMatching from './images/products/Matching.svg';
import ProductInspector from './images/products/Inspector.svg';

import InvoicesGeneric from './images/invoices/document/generic.svg';
import InvoicesPdf from './images/invoices/document/pdf.svg';
import InvoicesPng from './images/invoices/document/png.svg';
import InvoicesPpt from './images/invoices/document/ppt.svg';
import InvoicesWord from './images/invoices/document/word.svg';
import InvoicesXls from './images/invoices/document/xls.svg';

import OCLong from './images/logo/oc-logo.svg';
import OCShort from './images/logo/oc-logo-short.svg';

var components = {
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

    inspected: React.createFactory(IndicatorInspected),
    inspectedAndApproved: React.createFactory(IndicatorInspectedAndApproved),

    logout: React.createFactory(IndicatorLogout),

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

    user: React.createFactory(IndicatorStatusUser),

    warning: React.createFactory(IndicatorWarning),

    exceedsLimit: React.createFactory(IndicatorExceedsLimit)

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
    Inspector: React.createFactory(ProductInspector)
  },
  invoices: {
    generic: React.createFactory(InvoicesGeneric),
    pdf: React.createFactory(InvoicesPdf),
    png: React.createFactory(InvoicesPng),
    ppt: React.createFactory(InvoicesPpt),
    word: React.createFactory(InvoicesWord),
    xls: React.createFactory(InvoicesXls)
  },
  logo: {
    OCShort: React.createFactory(OCShort),
    OCLong: React.createFactory(OCLong)
  }
};

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon(props) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    switch (props.type) {
      case 'product':
        _this.defaultWidth = 40;
        _this.defaultHeight = 40;
        break;
      case 'indicator':
        _this.defaultWidth = 25;
        _this.defaultHeight = 25;
        break;
      default:
        _this.defaultWidth = 40;
        _this.defaultHeight = 40;
    }
    return _this;
  }

  Icon.prototype.render = function render() {
    var _props = this.props,
        type = _props.type,
        name = _props.name,
        width = _props.width,
        height = _props.height,
        otherProps = _objectWithoutProperties(_props, ['type', 'name', 'width', 'height']);

    var component = components[type] && components[type][name];
    var properties = _extends({
      width: width || this.defaultWidth,
      height: height || this.defaultHeight,
      focusable: 'false'
    }, otherProps);
    if (typeof IndicatorLogout === 'function') {
      return component(properties);
    }
    return React.createElement('span', _extends({ className: 'icon' }, this.props));
  };

  return Icon;
}(React.Component);

export { Icon as default };


Icon.defaultProps = {
  width: null,
  height: null
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9pY29uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJJbmRpY2F0b3JBbGVydCIsIkluZGljYXRvckFycm93TGVmdCIsIkluZGljYXRvckF0dGFjaG1lbnQiLCJJbmRpY2F0b3JCdXJnZXIiLCJJbmRpY2F0b3JCdXJnZXJDbG9zZSIsIkluZGljYXRvckNhbGVuZGFyIiwiSW5kaWNhdG9yQ2FyZXRMZWZ0IiwiSW5kaWNhdG9yQ2FyZXRSaWdodCIsIkluZGljYXRvckNsb2NrIiwiSW5kaWNhdG9yQ2xvc2UiLCJJbmRpY2F0b3JDb21tZW50IiwiSW5kaWNhdG9yQ29tbWVudGVkIiwiSW5kaWNhdG9yQ3JpdGljYWwiLCJJbmRpY2F0b3JEZWxldGUiLCJJbmRpY2F0b3JEcmFnZ2luZ0Fycm93cyIsIkluZGljYXRvckVkaXQiLCJJbmRpY2F0b3JFbWFpbCIsIkluZGljYXRvckVycm9yIiwiSW5kaWNhdG9yRXhjbGFtYXRpb24iLCJJbmRpY2F0b3JFeHBvcnQiLCJJbmRpY2F0b3JGaWx0ZXJpbmciLCJJbmRpY2F0b3JGbGFnZ2VkIiwiSW5kaWNhdG9yRm9sZGVyIiwiSW5kaWNhdG9ySGVscCIsIkluZGljYXRvckluc3BlY3RlZCIsIkluZGljYXRvckluc3BlY3RlZEFuZEFwcHJvdmVkIiwiSW5kaWNhdG9yTG9nb3V0IiwiSW5kaWNhdG9yTWludXMiLCJJbmRpY2F0b3JNb3JlIiwiSW5kaWNhdG9yT2siLCJJbmRpY2F0b3JQaW5uZWQiLCJJbmRpY2F0b3JQbHVzIiwiSW5kaWNhdG9yUHJlc2VudGF0aW9uIiwiSW5kaWNhdG9yUHJpbnQiLCJJbmRpY2F0b3JSZWplY3RlZCIsIkluZGljYXRvclJlbW92ZSIsIlJlbW92ZUZpbHRlciIsIkluZGljYXRvclNhdmUiLCJJbmRpY2F0b3JTZWFyY2giLCJJbmRpY2F0b3JTZWFyY2hXaXRoQ2lyY2xlIiwiSW5kaWNhdG9yU2V0dGluZ3MiLCJJbmRpY2F0b3JTb3J0QXNjIiwiSW5kaWNhdG9yU29ydERlc2MiLCJJbmRpY2F0b3JJbkNsYXJpZmljYXRpb24iLCJJbmRpY2F0b3JMb2NrZWQiLCJJbmRpY2F0b3JTdGF0dXNVc2VyIiwiSW5kaWNhdG9yV2FybmluZyIsIkluZGljYXRvckV4Y2VlZHNMaW1pdCIsIlByb2R1Y3RJbnZvaWNlcyIsIlByb2R1Y3RVc2VyIiwiUHJvZHVjdEFjY291bnRzIiwiUHJvZHVjdEFyY2hpdmUiLCJQcm9kdWN0RGFzaGJvYXJkIiwiUHJvZHVjdEluZm8iLCJQcm9kdWN0TGlxdWlkaXR5IiwiUHJvZHVjdE5ldHRpbmciLCJQcm9kdWN0UGF5bWVudHMiLCJQcm9kdWN0U2V0dGluZ3MiLCJQcm9kdWN0VG9vbHMiLCJQcm9kdWN0VXNlcnMiLCJQcm9kdWN0TWF0Y2hpbmciLCJQcm9kdWN0SW5zcGVjdG9yIiwiSW52b2ljZXNHZW5lcmljIiwiSW52b2ljZXNQZGYiLCJJbnZvaWNlc1BuZyIsIkludm9pY2VzUHB0IiwiSW52b2ljZXNXb3JkIiwiSW52b2ljZXNYbHMiLCJPQ0xvbmciLCJPQ1Nob3J0IiwiY29tcG9uZW50cyIsImluZGljYXRvciIsImFsZXJ0IiwiY3JlYXRlRmFjdG9yeSIsImFycm93TGVmdCIsImF0dGFjaG1lbnQiLCJidXJnZXIiLCJidXJnZXJDbG9zZSIsImNhbGVuZGFyIiwiQ2FyZXRSaWdodCIsIkNhcmV0TGVmdCIsImNsb2NrIiwiY2xvc2UiLCJjb21tZW50IiwiY29tbWVudGVkIiwiY3JpdGljYWwiLCJkZWxldGUiLCJkcmFnZ2luZ0Fycm93cyIsImVkaXQiLCJlbWFpbCIsImVycm9yIiwiZXhjbGFtYXRpb24iLCJleHBvcnQiLCJmaWx0ZXJpbmciLCJmbGFnZ2VkIiwiZm9sZGVyIiwiaGVscCIsImluc3BlY3RlZCIsImluc3BlY3RlZEFuZEFwcHJvdmVkIiwibG9nb3V0IiwibWludXMiLCJtb3JlIiwib2siLCJwaW5uZWQiLCJwbHVzIiwicHJlc2VudGF0aW9uIiwicHJpbnQiLCJyZWplY3RlZCIsInJlbW92ZSIsInJlbW92ZUZpbHRlciIsInNhdmUiLCJzZWFyY2giLCJzZWFyY2hXaXRoQ2lyY2xlIiwic2V0dGluZ3MiLCJzb3J0QXNjIiwic29ydERlc2MiLCJpbkNsYXJpZmljYXRpb24iLCJsb2NrZWQiLCJ1c2VyIiwid2FybmluZyIsImV4Y2VlZHNMaW1pdCIsInByb2R1Y3QiLCJJbnZvaWNlcyIsIkFjY291bnRzIiwiQXJjaGl2ZSIsIkRhc2hib2FyZCIsIkluZm8iLCJMaXF1aWRpdHkiLCJOZXR0aW5nIiwiUGF5bWVudHMiLCJTZXR0aW5ncyIsIlRvb2xzIiwiVXNlcnMiLCJFeGFtcGxlcyIsIk1hdGNoaW5nIiwiSW5zcGVjdG9yIiwiaW52b2ljZXMiLCJnZW5lcmljIiwicGRmIiwicG5nIiwicHB0Iiwid29yZCIsInhscyIsImxvZ28iLCJJY29uIiwicHJvcHMiLCJ0eXBlIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEhlaWdodCIsInJlbmRlciIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsIm90aGVyUHJvcHMiLCJjb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZm9jdXNhYmxlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0Qjs7QUFFQSxPQUFPQyxjQUFQLE1BQ0UsK0JBREY7QUFFQSxPQUFPQyxrQkFBUCxNQUNFLG1DQURGO0FBRUEsT0FBT0MsbUJBQVAsTUFDRSxvQ0FERjs7QUFHQSxPQUFPQyxlQUFQLE1BQ0UsZ0NBREY7QUFFQSxPQUFPQyxvQkFBUCxNQUNFLHNDQURGOztBQUdBLE9BQU9DLGlCQUFQLE1BQ0Usa0NBREY7QUFFQSxPQUFPQyxrQkFBUCxNQUNFLG1DQURGO0FBRUEsT0FBT0MsbUJBQVAsTUFDRSxvQ0FERjtBQUVBLE9BQU9DLGNBQVAsTUFDRSwrQkFERjtBQUVBLE9BQU9DLGNBQVAsTUFDRSwrQkFERjtBQUVBLE9BQU9DLGdCQUFQLE1B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SCxLQUFLSixLQVBGO0FBQUEsUUFFTEMsSUFGSyxVQUVMQSxJQUZLO0FBQUEsUUFHTEksSUFISyxVQUdMQSxJQUhLO0FBQUEsUUFJTEMsS0FKSyxVQUlMQSxLQUpLO0FBQUEsUUFLTEMsTUFMSyxVQUtMQSxNQUxLO0FBQUEsUUFNRkMsVUFORTs7QUFRUCxRQUFNQyxZQUFZcEYsV0FBVzRFLElBQVgsS0FBb0I1RSxXQUFXNEUsSUFBWCxFQUFpQkksSUFBakIsQ0FBdEM7QUFDQSxRQUFNSztBQUNKSixhQUFPQSxTQUFTLEtBQUtKLFlBRGpCO0FBRUpLLGNBQVFBLFVBQVUsS0FBS0osYUFGbkI7QUFHSlEsaUJBQVc7QUFIUCxPQUlESCxVQUpDLENBQU47QUFNQSxRQUFJLE9BQU8vSCxlQUFQLEtBQTJCLFVBQS9CLEVBQTJDO0FBQ3pDLGFBQU9nSSxVQUFVQyxVQUFWLENBQVA7QUFDRDtBQUNELFdBQU8sdUNBQU0sV0FBVSxNQUFoQixJQUEyQixLQUFLVixLQUFoQyxFQUFQO0FBQ0QsRzs7O0VBckMrQm5KLE1BQU0rSixTOztTQUFuQmIsSTs7O0FBd0NyQkEsS0FBS2MsWUFBTCxHQUFvQjtBQUNsQlAsU0FBTyxJQURXO0FBRWxCQyxVQUFRO0FBRlUsQ0FBcEIiLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHVwbGljYXRlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBJbmRpY2F0b3JBbGVydCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0FsZXJ0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQXJyb3dMZWZ0IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQXJyb3dMZWZ0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQXR0YWNobWVudCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0F0dGFjaG1lbnQuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckJ1cmdlciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0J1cmdlci5zdmcnO1xuaW1wb3J0IEluZGljYXRvckJ1cmdlckNsb3NlIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQnVyZ2VyLWNsb3NlLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JDYWxlbmRhciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0NhbGVuZGFyLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ2FyZXRMZWZ0IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ2FyZXRMZWZ0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ2FyZXRSaWdodCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0NhcmV0UmlnaHQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JDbG9jayBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0Nsb2NrLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ2xvc2UgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9DbG9zZS5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNvbW1lbnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9Db21tZW50LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ29tbWVudGVkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ29tbWVudGVkLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ3JpdGljYWwgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9Dcml0aWNhbC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yRGVsZXRlIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRGVsZXRlLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRHJhZ2dpbmdBcnJvd3MgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9EcmFnZ2luZ0Fycm93cy5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yRWRpdCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0VkaXQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JFbWFpbCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0VtYWlsLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRXJyb3IgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FcnJvci5zdmcnO1xuaW1wb3J0IEluZGljYXRvckV4Y2xhbWF0aW9uIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRXhjbGFtYXRpb24uc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JFeHBvcnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FeHBvcnQuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckZpbHRlcmluZyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0ZpbHRlcmluZy5zdmcnO1xuaW1wb3J0IEluZGljYXRvckZsYWdnZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9GbGFnZ2VkLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRm9sZGVyIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRm9sZGVyLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JIZWxwIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvSGVscC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9ySW5zcGVjdGVkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvSW5zcGVjdGVkLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9ySW5zcGVjdGVkQW5kQXBwcm92ZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9JbnNwZWN0ZWRBbmRBcHByb3ZlZC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yTG9nb3V0IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvTG9nb3V0LnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JNaW51cyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL01pbnVzLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yTW9yZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL01vcmUuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvck9rIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvT2suc3ZnJztcblxuaW1wb3J0IEluZGljYXRvclBpbm5lZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1Bpbm5lZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvclBsdXMgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9QbHVzLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yUHJlc2VudGF0aW9uIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvUHJlc2VudGF0aW9uLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yUHJpbnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9QcmludC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yUmVqZWN0ZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9SZWplY3RlZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvclJlbW92ZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1JlbW92ZS5zdmcnO1xuaW1wb3J0IFJlbW92ZUZpbHRlciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1JlbW92ZUZpbHRlci5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yU2F2ZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1NhdmUuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTZWFyY2ggZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TZWFyY2guc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTZWFyY2hXaXRoQ2lyY2xlIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU2VhcmNoV2l0aENpcmNsZS5zdmcnO1xuaW1wb3J0IEluZGljYXRvclNldHRpbmdzIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU2V0dGluZ3Muc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTb3J0QXNjIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU29ydEFzYy5zdmcnO1xuaW1wb3J0IEluZGljYXRvclNvcnREZXNjIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU29ydERlc2Muc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JJbkNsYXJpZmljYXRpb24gZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TdGF0dXNJbmNsYXJpZmljYXRpb24uc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JMb2NrZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TdGF0dXNMb2NrZWQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTdGF0dXNVc2VyIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU3RhdHVzVXNlci5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yV2FybmluZyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1dhcm5pbmcuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JFeGNlZWRzTGltaXQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FeGNlZWRzTGltaXQuc3ZnJztcblxuaW1wb3J0IFByb2R1Y3RJbnZvaWNlcyBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9JbnZvaWNlcy5zdmcnO1xuaW1wb3J0IFByb2R1Y3RVc2VyIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1VzZXIuc3ZnJztcbmltcG9ydCBQcm9kdWN0QWNjb3VudHMgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvQWNjb3VudHMuc3ZnJztcbmltcG9ydCBQcm9kdWN0QXJjaGl2ZSBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9BcmNoaXZlLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdERhc2hib2FyZCBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9EYXNoYm9hcmQuc3ZnJztcbmltcG9ydCBQcm9kdWN0SW5mbyBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9JbmZvLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdExpcXVpZGl0eSBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9MaXF1aWRpdHkuc3ZnJztcbmltcG9ydCBQcm9kdWN0TmV0dGluZyBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9OZXR0aW5nLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFBheW1lbnRzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1BheW1lbnRzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFNldHRpbmdzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1NldHRpbmdzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFRvb2xzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1Rvb2xzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFVzZXJzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1VzZXJzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdE1hdGNoaW5nIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL01hdGNoaW5nLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdEluc3BlY3RvciBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9JbnNwZWN0b3Iuc3ZnJztcblxuaW1wb3J0IEludm9pY2VzR2VuZXJpYyBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC9nZW5lcmljLnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNQZGYgZnJvbVxuICAnLi9pbWFnZXMvaW52b2ljZXMvZG9jdW1lbnQvcGRmLnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNQbmcgZnJvbVxuICAnLi9pbWFnZXMvaW52b2ljZXMvZG9jdW1lbnQvcG5nLnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNQcHQgZnJvbVxuICAnLi9pbWFnZXMvaW52b2ljZXMvZG9jdW1lbnQvcHB0LnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNXb3JkIGZyb21cbiAgJy4vaW1hZ2VzL2ludm9pY2VzL2RvY3VtZW50L3dvcmQuc3ZnJztcbmltcG9ydCBJbnZvaWNlc1hscyBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC94bHMuc3ZnJztcblxuaW1wb3J0IE9DTG9uZyBmcm9tXG4gICcuL2ltYWdlcy9sb2dvL29jLWxvZ28uc3ZnJztcbmltcG9ydCBPQ1Nob3J0IGZyb21cbiAgJy4vaW1hZ2VzL2xvZ28vb2MtbG9nby1zaG9ydC5zdmcnO1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBpbmRpY2F0b3I6IHtcbiAgICBhbGVydDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JBbGVydCksXG4gICAgYXJyb3dMZWZ0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckFycm93TGVmdCksXG4gICAgYXR0YWNobWVudDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JBdHRhY2htZW50KSxcblxuICAgIGJ1cmdlcjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JCdXJnZXIpLFxuICAgIGJ1cmdlckNsb3NlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckJ1cmdlckNsb3NlKSxcblxuICAgIGNhbGVuZGFyOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNhbGVuZGFyKSxcbiAgICBDYXJldFJpZ2h0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNhcmV0UmlnaHQpLFxuICAgIENhcmV0TGVmdDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDYXJldExlZnQpLFxuICAgIGNsb2NrOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNsb2NrKSxcbiAgICBjbG9zZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDbG9zZSksXG4gICAgY29tbWVudDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDb21tZW50KSxcbiAgICBjb21tZW50ZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ29tbWVudGVkKSxcbiAgICBjcml0aWNhbDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDcml0aWNhbCksXG5cbiAgICBkZWxldGU6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRGVsZXRlKSxcbiAgICBkcmFnZ2luZ0Fycm93czogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JEcmFnZ2luZ0Fycm93cyksXG5cbiAgICBlZGl0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckVkaXQpLFxuICAgIGVtYWlsOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckVtYWlsKSxcbiAgICBlcnJvcjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JFcnJvciksXG4gICAgZXhjbGFtYXRpb246IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRXhjbGFtYXRpb24pLFxuICAgIGV4cG9ydDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JFeHBvcnQpLFxuXG4gICAgZmlsdGVyaW5nOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckZpbHRlcmluZyksXG4gICAgZmxhZ2dlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JGbGFnZ2VkKSxcbiAgICBmb2xkZXI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRm9sZGVyKSxcblxuICAgIGhlbHA6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9ySGVscCksXG5cbiAgICBpbnNwZWN0ZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9ySW5zcGVjdGVkKSxcbiAgICBpbnNwZWN0ZWRBbmRBcHByb3ZlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JJbnNwZWN0ZWRBbmRBcHByb3ZlZCksXG5cbiAgICBsb2dvdXQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yTG9nb3V0KSxcblxuICAgIG1pbnVzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvck1pbnVzKSxcbiAgICBtb3JlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvck1vcmUpLFxuXG4gICAgb2s6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yT2spLFxuXG4gICAgcGlubmVkOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclBpbm5lZCksXG4gICAgcGx1czogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JQbHVzKSxcbiAgICBwcmVzZW50YXRpb246IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUHJlc2VudGF0aW9uKSxcbiAgICBwcmludDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JQcmludCksXG5cbiAgICByZWplY3RlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JSZWplY3RlZCksXG4gICAgcmVtb3ZlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclJlbW92ZSksXG4gICAgcmVtb3ZlRmlsdGVyOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFJlbW92ZUZpbHRlciksXG5cbiAgICBzYXZlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNhdmUpLFxuICAgIHNlYXJjaDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JTZWFyY2gpLFxuICAgIHNlYXJjaFdpdGhDaXJjbGU6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU2VhcmNoV2l0aENpcmNsZSksXG4gICAgc2V0dGluZ3M6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU2V0dGluZ3MpLFxuICAgIHNvcnRBc2M6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU29ydEFzYyksXG4gICAgc29ydERlc2M6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU29ydERlc2MpLFxuICAgIGluQ2xhcmlmaWNhdGlvbjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JJbkNsYXJpZmljYXRpb24pLFxuICAgIGxvY2tlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JMb2NrZWQpLFxuXG4gICAgdXNlcjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JTdGF0dXNVc2VyKSxcblxuICAgIHdhcm5pbmc6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yV2FybmluZyksXG5cbiAgICBleGNlZWRzTGltaXQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRXhjZWVkc0xpbWl0KSxcblxuICB9LFxuICBwcm9kdWN0OiB7XG4gICAgSW52b2ljZXM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdEludm9pY2VzKSxcbiAgICB1c2VyOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RVc2VyKSxcbiAgICBBY2NvdW50czogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0QWNjb3VudHMpLFxuICAgIEFyY2hpdmU6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdEFyY2hpdmUpLFxuICAgIERhc2hib2FyZDogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0RGFzaGJvYXJkKSxcbiAgICBJbmZvOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RJbmZvKSxcbiAgICBMaXF1aWRpdHk6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdExpcXVpZGl0eSksXG4gICAgTmV0dGluZzogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0TmV0dGluZyksXG4gICAgUGF5bWVudHM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdFBheW1lbnRzKSxcbiAgICBTZXR0aW5nczogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0U2V0dGluZ3MpLFxuICAgIFRvb2xzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RUb29scyksXG4gICAgVXNlcnM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdFVzZXJzKSxcbiAgICBFeGFtcGxlczogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0SW5mbyksXG4gICAgTWF0Y2hpbmc6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdE1hdGNoaW5nKSxcbiAgICBJbnNwZWN0b3I6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdEluc3BlY3RvciksXG4gIH0sXG4gIGludm9pY2VzOiB7XG4gICAgZ2VuZXJpYzogUmVhY3QuY3JlYXRlRmFjdG9yeShJbnZvaWNlc0dlbmVyaWMpLFxuICAgIHBkZjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbnZvaWNlc1BkZiksXG4gICAgcG5nOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEludm9pY2VzUG5nKSxcbiAgICBwcHQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW52b2ljZXNQcHQpLFxuICAgIHdvcmQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW52b2ljZXNXb3JkKSxcbiAgICB4bHM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW52b2ljZXNYbHMpLFxuICB9LFxuICBsb2dvOiB7XG4gICAgT0NTaG9ydDogUmVhY3QuY3JlYXRlRmFjdG9yeShPQ1Nob3J0KSxcbiAgICBPQ0xvbmc6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoT0NMb25nKSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBzd2l0Y2ggKHByb3BzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDQwO1xuICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSA0MDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbmRpY2F0b3InOlxuICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDI1O1xuICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSAyNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDQwO1xuICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSA0MDtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIG5hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzW3R5cGVdICYmIGNvbXBvbmVudHNbdHlwZV1bbmFtZV07XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHtcbiAgICAgIHdpZHRoOiB3aWR0aCB8fCB0aGlzLmRlZmF1bHRXaWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0IHx8IHRoaXMuZGVmYXVsdEhlaWdodCxcbiAgICAgIGZvY3VzYWJsZTogJ2ZhbHNlJyxcbiAgICAgIC4uLm90aGVyUHJvcHMsXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIEluZGljYXRvckxvZ291dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNvbXBvbmVudChwcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIiB7Li4udGhpcy5wcm9wc30gLz47XG4gIH1cbn1cblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiBudWxsLFxuICBoZWlnaHQ6IG51bGwsXG59O1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuIl19