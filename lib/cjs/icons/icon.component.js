'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Alert = require('./images/indicators/Alert.svg');

var _Alert2 = _interopRequireDefault(_Alert);

var _ArrowLeft = require('./images/indicators/ArrowLeft.svg');

var _ArrowLeft2 = _interopRequireDefault(_ArrowLeft);

var _Attachment = require('./images/indicators/Attachment.svg');

var _Attachment2 = _interopRequireDefault(_Attachment);

var _Burger = require('./images/indicators/Burger.svg');

var _Burger2 = _interopRequireDefault(_Burger);

var _BurgerClose = require('./images/indicators/Burger-close.svg');

var _BurgerClose2 = _interopRequireDefault(_BurgerClose);

var _Calendar = require('./images/indicators/Calendar.svg');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _CaretLeft = require('./images/indicators/CaretLeft.svg');

var _CaretLeft2 = _interopRequireDefault(_CaretLeft);

var _CaretRight = require('./images/indicators/CaretRight.svg');

var _CaretRight2 = _interopRequireDefault(_CaretRight);

var _Clock = require('./images/indicators/Clock.svg');

var _Clock2 = _interopRequireDefault(_Clock);

var _Close = require('./images/indicators/Close.svg');

var _Close2 = _interopRequireDefault(_Close);

var _Comment = require('./images/indicators/Comment.svg');

var _Comment2 = _interopRequireDefault(_Comment);

var _Commented = require('./images/indicators/Commented.svg');

var _Commented2 = _interopRequireDefault(_Commented);

var _Critical = require('./images/indicators/Critical.svg');

var _Critical2 = _interopRequireDefault(_Critical);

var _Delete = require('./images/indicators/Delete.svg');

var _Delete2 = _interopRequireDefault(_Delete);

var _DraggingArrows = require('./images/indicators/DraggingArrows.svg');

var _DraggingArrows2 = _interopRequireDefault(_DraggingArrows);

var _Edit = require('./images/indicators/Edit.svg');

var _Edit2 = _interopRequireDefault(_Edit);

var _Email = require('./images/indicators/Email.svg');

var _Email2 = _interopRequireDefault(_Email);

var _Error = require('./images/indicators/Error.svg');

var _Error2 = _interopRequireDefault(_Error);

var _Exclamation = require('./images/indicators/Exclamation.svg');

var _Exclamation2 = _interopRequireDefault(_Exclamation);

var _Export = require('./images/indicators/Export.svg');

var _Export2 = _interopRequireDefault(_Export);

var _Filtering = require('./images/indicators/Filtering.svg');

var _Filtering2 = _interopRequireDefault(_Filtering);

var _Flagged = require('./images/indicators/Flagged.svg');

var _Flagged2 = _interopRequireDefault(_Flagged);

var _Folder = require('./images/indicators/Folder.svg');

var _Folder2 = _interopRequireDefault(_Folder);

var _Help = require('./images/indicators/Help.svg');

var _Help2 = _interopRequireDefault(_Help);

var _Inspected = require('./images/indicators/Inspected.svg');

var _Inspected2 = _interopRequireDefault(_Inspected);

var _InspectedAndApproved = require('./images/indicators/InspectedAndApproved.svg');

var _InspectedAndApproved2 = _interopRequireDefault(_InspectedAndApproved);

var _Logout = require('./images/indicators/Logout.svg');

var _Logout2 = _interopRequireDefault(_Logout);

var _Minus = require('./images/indicators/Minus.svg');

var _Minus2 = _interopRequireDefault(_Minus);

var _More = require('./images/indicators/More.svg');

var _More2 = _interopRequireDefault(_More);

var _Ok = require('./images/indicators/Ok.svg');

var _Ok2 = _interopRequireDefault(_Ok);

var _Pinned = require('./images/indicators/Pinned.svg');

var _Pinned2 = _interopRequireDefault(_Pinned);

var _Plus = require('./images/indicators/Plus.svg');

var _Plus2 = _interopRequireDefault(_Plus);

var _Presentation = require('./images/indicators/Presentation.svg');

var _Presentation2 = _interopRequireDefault(_Presentation);

var _Print = require('./images/indicators/Print.svg');

var _Print2 = _interopRequireDefault(_Print);

var _Rejected = require('./images/indicators/Rejected.svg');

var _Rejected2 = _interopRequireDefault(_Rejected);

var _Remove = require('./images/indicators/Remove.svg');

var _Remove2 = _interopRequireDefault(_Remove);

var _RemoveFilter = require('./images/indicators/RemoveFilter.svg');

var _RemoveFilter2 = _interopRequireDefault(_RemoveFilter);

var _Save = require('./images/indicators/Save.svg');

var _Save2 = _interopRequireDefault(_Save);

var _Search = require('./images/indicators/Search.svg');

var _Search2 = _interopRequireDefault(_Search);

var _SearchWithCircle = require('./images/indicators/SearchWithCircle.svg');

var _SearchWithCircle2 = _interopRequireDefault(_SearchWithCircle);

var _Settings = require('./images/indicators/Settings.svg');

var _Settings2 = _interopRequireDefault(_Settings);

var _SortAsc = require('./images/indicators/SortAsc.svg');

var _SortAsc2 = _interopRequireDefault(_SortAsc);

var _SortDesc = require('./images/indicators/SortDesc.svg');

var _SortDesc2 = _interopRequireDefault(_SortDesc);

var _StatusInclarification = require('./images/indicators/StatusInclarification.svg');

var _StatusInclarification2 = _interopRequireDefault(_StatusInclarification);

var _StatusLocked = require('./images/indicators/StatusLocked.svg');

var _StatusLocked2 = _interopRequireDefault(_StatusLocked);

var _StatusUser = require('./images/indicators/StatusUser.svg');

var _StatusUser2 = _interopRequireDefault(_StatusUser);

var _Warning = require('./images/indicators/Warning.svg');

var _Warning2 = _interopRequireDefault(_Warning);

var _ExceedsLimit = require('./images/indicators/ExceedsLimit.svg');

var _ExceedsLimit2 = _interopRequireDefault(_ExceedsLimit);

var _Invoices = require('./images/products/Invoices.svg');

var _Invoices2 = _interopRequireDefault(_Invoices);

var _User = require('./images/products/User.svg');

var _User2 = _interopRequireDefault(_User);

var _Accounts = require('./images/products/Accounts.svg');

var _Accounts2 = _interopRequireDefault(_Accounts);

var _Archive = require('./images/products/Archive.svg');

var _Archive2 = _interopRequireDefault(_Archive);

var _Dashboard = require('./images/products/Dashboard.svg');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Info = require('./images/products/Info.svg');

var _Info2 = _interopRequireDefault(_Info);

var _Liquidity = require('./images/products/Liquidity.svg');

var _Liquidity2 = _interopRequireDefault(_Liquidity);

var _Netting = require('./images/products/Netting.svg');

var _Netting2 = _interopRequireDefault(_Netting);

var _Payments = require('./images/products/Payments.svg');

var _Payments2 = _interopRequireDefault(_Payments);

var _Settings3 = require('./images/products/Settings.svg');

var _Settings4 = _interopRequireDefault(_Settings3);

var _Tools = require('./images/products/Tools.svg');

var _Tools2 = _interopRequireDefault(_Tools);

var _Users = require('./images/products/Users.svg');

var _Users2 = _interopRequireDefault(_Users);

var _Matching = require('./images/products/Matching.svg');

var _Matching2 = _interopRequireDefault(_Matching);

var _Inspector = require('./images/products/Inspector.svg');

var _Inspector2 = _interopRequireDefault(_Inspector);

var _generic = require('./images/invoices/document/generic.svg');

var _generic2 = _interopRequireDefault(_generic);

var _pdf = require('./images/invoices/document/pdf.svg');

var _pdf2 = _interopRequireDefault(_pdf);

var _png = require('./images/invoices/document/png.svg');

var _png2 = _interopRequireDefault(_png);

var _ppt = require('./images/invoices/document/ppt.svg');

var _ppt2 = _interopRequireDefault(_ppt);

var _word = require('./images/invoices/document/word.svg');

var _word2 = _interopRequireDefault(_word);

var _xls = require('./images/invoices/document/xls.svg');

var _xls2 = _interopRequireDefault(_xls);

var _ocLogo = require('./images/logo/oc-logo.svg');

var _ocLogo2 = _interopRequireDefault(_ocLogo);

var _ocLogoShort = require('./images/logo/oc-logo-short.svg');

var _ocLogoShort2 = _interopRequireDefault(_ocLogoShort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-duplicates */


var components = {
  indicator: {
    alert: _react2.default.createFactory(_Alert2.default),
    arrowLeft: _react2.default.createFactory(_ArrowLeft2.default),
    attachment: _react2.default.createFactory(_Attachment2.default),

    burger: _react2.default.createFactory(_Burger2.default),
    burgerClose: _react2.default.createFactory(_BurgerClose2.default),

    calendar: _react2.default.createFactory(_Calendar2.default),
    CaretRight: _react2.default.createFactory(_CaretRight2.default),
    CaretLeft: _react2.default.createFactory(_CaretLeft2.default),
    clock: _react2.default.createFactory(_Clock2.default),
    close: _react2.default.createFactory(_Close2.default),
    comment: _react2.default.createFactory(_Comment2.default),
    commented: _react2.default.createFactory(_Commented2.default),
    critical: _react2.default.createFactory(_Critical2.default),

    delete: _react2.default.createFactory(_Delete2.default),
    draggingArrows: _react2.default.createFactory(_DraggingArrows2.default),

    edit: _react2.default.createFactory(_Edit2.default),
    email: _react2.default.createFactory(_Email2.default),
    error: _react2.default.createFactory(_Error2.default),
    exclamation: _react2.default.createFactory(_Exclamation2.default),
    export: _react2.default.createFactory(_Export2.default),

    filtering: _react2.default.createFactory(_Filtering2.default),
    flagged: _react2.default.createFactory(_Flagged2.default),
    folder: _react2.default.createFactory(_Folder2.default),

    help: _react2.default.createFactory(_Help2.default),

    inspected: _react2.default.createFactory(_Inspected2.default),
    inspectedAndApproved: _react2.default.createFactory(_InspectedAndApproved2.default),

    logout: _react2.default.createFactory(_Logout2.default),

    minus: _react2.default.createFactory(_Minus2.default),
    more: _react2.default.createFactory(_More2.default),

    ok: _react2.default.createFactory(_Ok2.default),

    pinned: _react2.default.createFactory(_Pinned2.default),
    plus: _react2.default.createFactory(_Plus2.default),
    presentation: _react2.default.createFactory(_Presentation2.default),
    print: _react2.default.createFactory(_Print2.default),

    rejected: _react2.default.createFactory(_Rejected2.default),
    remove: _react2.default.createFactory(_Remove2.default),
    removeFilter: _react2.default.createFactory(_RemoveFilter2.default),

    save: _react2.default.createFactory(_Save2.default),
    search: _react2.default.createFactory(_Search2.default),
    searchWithCircle: _react2.default.createFactory(_SearchWithCircle2.default),
    settings: _react2.default.createFactory(_Settings2.default),
    sortAsc: _react2.default.createFactory(_SortAsc2.default),
    sortDesc: _react2.default.createFactory(_SortDesc2.default),
    inClarification: _react2.default.createFactory(_StatusInclarification2.default),
    locked: _react2.default.createFactory(_StatusLocked2.default),

    user: _react2.default.createFactory(_StatusUser2.default),

    warning: _react2.default.createFactory(_Warning2.default),

    exceedsLimit: _react2.default.createFactory(_ExceedsLimit2.default)

  },
  product: {
    Invoices: _react2.default.createFactory(_Invoices2.default),
    user: _react2.default.createFactory(_User2.default),
    Accounts: _react2.default.createFactory(_Accounts2.default),
    Archive: _react2.default.createFactory(_Archive2.default),
    Dashboard: _react2.default.createFactory(_Dashboard2.default),
    Info: _react2.default.createFactory(_Info2.default),
    Liquidity: _react2.default.createFactory(_Liquidity2.default),
    Netting: _react2.default.createFactory(_Netting2.default),
    Payments: _react2.default.createFactory(_Payments2.default),
    Settings: _react2.default.createFactory(_Settings4.default),
    Tools: _react2.default.createFactory(_Tools2.default),
    Users: _react2.default.createFactory(_Users2.default),
    Examples: _react2.default.createFactory(_Info2.default),
    Matching: _react2.default.createFactory(_Matching2.default),
    Inspector: _react2.default.createFactory(_Inspector2.default)
  },
  invoices: {
    generic: _react2.default.createFactory(_generic2.default),
    pdf: _react2.default.createFactory(_pdf2.default),
    png: _react2.default.createFactory(_png2.default),
    ppt: _react2.default.createFactory(_ppt2.default),
    word: _react2.default.createFactory(_word2.default),
    xls: _react2.default.createFactory(_xls2.default)
  },
  logo: {
    OCShort: _react2.default.createFactory(_ocLogoShort2.default),
    OCLong: _react2.default.createFactory(_ocLogo2.default)
  }
};

var Icon = function (_React$Component) {
  _inherits(Icon, _React$Component);

  function Icon(props) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    switch (props.type) {
      case 'product':
        {
          _this.defaultWidth = 40;
          _this.defaultHeight = 40;
          break;
        }
      case 'indicator':
        {
          _this.defaultWidth = 25;
          _this.defaultHeight = 25;
          break;
        }
      case 'logo':
        {
          if (props.name === 'OCLong') {
            _this.defaultWidth = 150;
            _this.defaultHeight = 30;
          } else {
            _this.defaultWidth = 50;
            _this.defaultHeight = 30;
          }
          break;
        }
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
    if (typeof _Logout2.default === 'function') {
      return component(properties);
    }
    return _react2.default.createElement('span', _extends({ className: 'icon' }, this.props));
  };

  return Icon;
}(_react2.default.Component);

exports.default = Icon;


Icon.defaultProps = {
  width: null,
  height: null
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9pY29uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiY29tcG9uZW50cyIsImluZGljYXRvciIsImFsZXJ0IiwiUmVhY3QiLCJjcmVhdGVGYWN0b3J5IiwiSW5kaWNhdG9yQWxlcnQiLCJhcnJvd0xlZnQiLCJJbmRpY2F0b3JBcnJvd0xlZnQiLCJhdHRhY2htZW50IiwiSW5kaWNhdG9yQXR0YWNobWVudCIsImJ1cmdlciIsIkluZGljYXRvckJ1cmdlciIsImJ1cmdlckNsb3NlIiwiSW5kaWNhdG9yQnVyZ2VyQ2xvc2UiLCJjYWxlbmRhciIsIkluZGljYXRvckNhbGVuZGFyIiwiQ2FyZXRSaWdodCIsIkluZGljYXRvckNhcmV0UmlnaHQiLCJDYXJldExlZnQiLCJJbmRpY2F0b3JDYXJldExlZnQiLCJjbG9jayIsIkluZGljYXRvckNsb2NrIiwiY2xvc2UiLCJJbmRpY2F0b3JDbG9zZSIsImNvbW1lbnQiLCJJbmRpY2F0b3JDb21tZW50IiwiY29tbWVudGVkIiwiSW5kaWNhdG9yQ29tbWVudGVkIiwiY3JpdGljYWwiLCJJbmRpY2F0b3JDcml0aWNhbCIsImRlbGV0ZSIsIkluZGljYXRvckRlbGV0ZSIsImRyYWdnaW5nQXJyb3dzIiwiSW5kaWNhdG9yRHJhZ2dpbmdBcnJvd3MiLCJlZGl0IiwiSW5kaWNhdG9yRWRpdCIsImVtYWlsIiwiSW5kaWNhdG9yRW1haWwiLCJlcnJvciIsIkluZGljYXRvckVycm9yIiwiZXhjbGFtYXRpb24iLCJJbmRpY2F0b3JFeGNsYW1hdGlvbiIsImV4cG9ydCIsIkluZGljYXRvckV4cG9ydCIsImZpbHRlcmluZyIsIkluZGljYXRvckZpbHRlcmluZyIsImZsYWdnZWQiLCJJbmRpY2F0b3JGbGFnZ2VkIiwiZm9sZGVyIiwiSW5kaWNhdG9yRm9sZGVyIiwiaGVscCIsIkluZGljYXRvckhlbHAiLCJpbnNwZWN0ZWQiLCJJbmRpY2F0b3JJbnNwZWN0ZWQiLCJpbnNwZWN0ZWRBbmRBcHByb3ZlZCIsIkluZGljYXRvckluc3BlY3RlZEFuZEFwcHJvdmVkIiwibG9nb3V0IiwiSW5kaWNhdG9yTG9nb3V0IiwibWludXMiLCJJbmRpY2F0b3JNaW51cyIsIm1vcmUiLCJJbmRpY2F0b3JNb3JlIiwib2siLCJJbmRpY2F0b3JPayIsInBpbm5lZCIsIkluZGljYXRvclBpbm5lZCIsInBsdXMiLCJJbmRpY2F0b3JQbHVzIiwicHJlc2VudGF0aW9uIiwiSW5kaWNhdG9yUHJlc2VudGF0aW9uIiwicHJpbnQiLCJJbmRpY2F0b3JQcmludCIsInJlamVjdGVkIiwiSW5kaWNhdG9yUmVqZWN0ZWQiLCJyZW1vdmUiLCJJbmRpY2F0b3JSZW1vdmUiLCJyZW1vdmVGaWx0ZXIiLCJSZW1vdmVGaWx0ZXIiLCJzYXZlIiwiSW5kaWNhdG9yU2F2ZSIsInNlYXJjaCIsIkluZGljYXRvclNlYXJjaCIsInNlYXJjaFdpdGhDaXJjbGUiLCJJbmRpY2F0b3JTZWFyY2hXaXRoQ2lyY2xlIiwic2V0dGluZ3MiLCJJbmRpY2F0b3JTZXR0aW5ncyIsInNvcnRBc2MiLCJJbmRpY2F0b3JTb3J0QXNjIiwic29ydERlc2MiLCJJbmRpY2F0b3JTb3J0RGVzYyIsImluQ2xhcmlmaWNhdGlvbiIsIkluZGljYXRvckluQ2xhcmlmaWNhdGlvbiIsImxvY2tlZCIsIkluZGljYXRvckxvY2tlZCIsInVzZXIiLCJJbmRpY2F0b3JTdGF0dXNVc2VyIiwid2FybmluZyIsIkluZGljYXRvcldhcm5pbmciLCJleGNlZWRzTGltaXQiLCJJbmRpY2F0b3JFeGNlZWRzTGltaXQiLCJwcm9kdWN0IiwiSW52b2ljZXMiLCJQcm9kdWN0SW52b2ljZXMiLCJQcm9kdWN0VXNlciIsIkFjY291bnRzIiwiUHJvZHVjdEFjY291bnRzIiwiQXJjaGl2ZSIsIlByb2R1Y3RBcmNoaXZlIiwiRGFzaGJvYXJkIiwiUHJvZHVjdERhc2hib2FyZCIsIkluZm8iLCJQcm9kdWN0SW5mbyIsIkxpcXVpZGl0eSIsIlByb2R1Y3RMaXF1aWRpdHkiLCJOZXR0aW5nIiwiUHJvZHVjdE5ldHRpbmciLCJQYXltZW50cyIsIlByb2R1Y3RQYXltZW50cyIsIlNldHRpbmdzIiwiUHJvZHVjdFNldHRpbmdzIiwiVG9vbHMiLCJQcm9kdWN0VG9vbHMiLCJVc2VycyIsIlByb2R1Y3RVc2VycyIsIkV4YW1wbGVzIiwiTWF0Y2hpbmciLCJQcm9kdWN0TWF0Y2hpbmciLCJJbnNwZWN0b3IiLCJQcm9kdWN0SW5zcGVjdG9yIiwiaW52b2ljZXMiLCJnZW5lcmljIiwiSW52b2ljZXNHZW5lcmljIiwicGRmIiwiSW52b2ljZXNQZGYiLCJwbmciLCJJbnZvaWNlc1BuZyIsInBwdCIsIkludm9pY2VzUHB0Iiwid29yZCIsIkludm9pY2VzV29yZCIsInhscyIsIkludm9pY2VzWGxzIiwibG9nbyIsIk9DU2hvcnQiLCJPQ0xvbmciLCJJY29uIiwicHJvcHMiLCJ0eXBlIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEhlaWdodCIsIm5hbWUiLCJyZW5kZXIiLCJ3aWR0aCIsImhlaWdodCIsIm90aGVyUHJvcHMiLCJjb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZm9jdXNhYmxlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUdBOzs7O0FBRUE7Ozs7QUFHQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBR0E7Ozs7QUFFQTs7OztBQUdBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFHQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFHQTs7OztBQUdBOzs7O0FBRUE7Ozs7QUFHQTs7OztBQUdBOzs7O0FBRUE7Ozs7QUFHQTs7OztBQUdBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBR0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBR0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7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QUEvQixFQUEyQztBQUN6QyxhQUFPa0csVUFBVUMsVUFBVixDQUFQO0FBQ0Q7QUFDRCxXQUFPLGlEQUFNLFdBQVUsTUFBaEIsSUFBMkIsS0FBS1YsS0FBaEMsRUFBUDtBQUNELEc7OztFQWpEK0IvSSxnQkFBTTJKLFM7O2tCQUFuQmIsSTs7O0FBb0RyQkEsS0FBS2MsWUFBTCxHQUFvQjtBQUNsQlAsU0FBTyxJQURXO0FBRWxCQyxVQUFRO0FBRlUsQ0FBcEIiLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHVwbGljYXRlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBJbmRpY2F0b3JBbGVydCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0FsZXJ0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQXJyb3dMZWZ0IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQXJyb3dMZWZ0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQXR0YWNobWVudCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0F0dGFjaG1lbnQuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckJ1cmdlciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0J1cmdlci5zdmcnO1xuaW1wb3J0IEluZGljYXRvckJ1cmdlckNsb3NlIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQnVyZ2VyLWNsb3NlLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JDYWxlbmRhciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0NhbGVuZGFyLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ2FyZXRMZWZ0IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ2FyZXRMZWZ0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ2FyZXRSaWdodCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0NhcmV0UmlnaHQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JDbG9jayBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0Nsb2NrLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ2xvc2UgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9DbG9zZS5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNvbW1lbnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9Db21tZW50LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ29tbWVudGVkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ29tbWVudGVkLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ3JpdGljYWwgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9Dcml0aWNhbC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yRGVsZXRlIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRGVsZXRlLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRHJhZ2dpbmdBcnJvd3MgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9EcmFnZ2luZ0Fycm93cy5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yRWRpdCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0VkaXQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JFbWFpbCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0VtYWlsLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRXJyb3IgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FcnJvci5zdmcnO1xuaW1wb3J0IEluZGljYXRvckV4Y2xhbWF0aW9uIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRXhjbGFtYXRpb24uc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JFeHBvcnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FeHBvcnQuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckZpbHRlcmluZyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0ZpbHRlcmluZy5zdmcnO1xuaW1wb3J0IEluZGljYXRvckZsYWdnZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9GbGFnZ2VkLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRm9sZGVyIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRm9sZGVyLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JIZWxwIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvSGVscC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9ySW5zcGVjdGVkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvSW5zcGVjdGVkLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9ySW5zcGVjdGVkQW5kQXBwcm92ZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9JbnNwZWN0ZWRBbmRBcHByb3ZlZC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yTG9nb3V0IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvTG9nb3V0LnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JNaW51cyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL01pbnVzLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yTW9yZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL01vcmUuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvck9rIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvT2suc3ZnJztcblxuaW1wb3J0IEluZGljYXRvclBpbm5lZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1Bpbm5lZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvclBsdXMgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9QbHVzLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yUHJlc2VudGF0aW9uIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvUHJlc2VudGF0aW9uLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yUHJpbnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9QcmludC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yUmVqZWN0ZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9SZWplY3RlZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvclJlbW92ZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1JlbW92ZS5zdmcnO1xuaW1wb3J0IFJlbW92ZUZpbHRlciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1JlbW92ZUZpbHRlci5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yU2F2ZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1NhdmUuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTZWFyY2ggZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TZWFyY2guc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTZWFyY2hXaXRoQ2lyY2xlIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU2VhcmNoV2l0aENpcmNsZS5zdmcnO1xuaW1wb3J0IEluZGljYXRvclNldHRpbmdzIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU2V0dGluZ3Muc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTb3J0QXNjIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU29ydEFzYy5zdmcnO1xuaW1wb3J0IEluZGljYXRvclNvcnREZXNjIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU29ydERlc2Muc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JJbkNsYXJpZmljYXRpb24gZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TdGF0dXNJbmNsYXJpZmljYXRpb24uc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JMb2NrZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TdGF0dXNMb2NrZWQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTdGF0dXNVc2VyIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU3RhdHVzVXNlci5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yV2FybmluZyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1dhcm5pbmcuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JFeGNlZWRzTGltaXQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FeGNlZWRzTGltaXQuc3ZnJztcblxuaW1wb3J0IFByb2R1Y3RJbnZvaWNlcyBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9JbnZvaWNlcy5zdmcnO1xuaW1wb3J0IFByb2R1Y3RVc2VyIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1VzZXIuc3ZnJztcbmltcG9ydCBQcm9kdWN0QWNjb3VudHMgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvQWNjb3VudHMuc3ZnJztcbmltcG9ydCBQcm9kdWN0QXJjaGl2ZSBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9BcmNoaXZlLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdERhc2hib2FyZCBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9EYXNoYm9hcmQuc3ZnJztcbmltcG9ydCBQcm9kdWN0SW5mbyBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9JbmZvLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdExpcXVpZGl0eSBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9MaXF1aWRpdHkuc3ZnJztcbmltcG9ydCBQcm9kdWN0TmV0dGluZyBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9OZXR0aW5nLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFBheW1lbnRzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1BheW1lbnRzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFNldHRpbmdzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1NldHRpbmdzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFRvb2xzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1Rvb2xzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFVzZXJzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1VzZXJzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdE1hdGNoaW5nIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL01hdGNoaW5nLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdEluc3BlY3RvciBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9JbnNwZWN0b3Iuc3ZnJztcblxuaW1wb3J0IEludm9pY2VzR2VuZXJpYyBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC9nZW5lcmljLnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNQZGYgZnJvbVxuICAnLi9pbWFnZXMvaW52b2ljZXMvZG9jdW1lbnQvcGRmLnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNQbmcgZnJvbVxuICAnLi9pbWFnZXMvaW52b2ljZXMvZG9jdW1lbnQvcG5nLnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNQcHQgZnJvbVxuICAnLi9pbWFnZXMvaW52b2ljZXMvZG9jdW1lbnQvcHB0LnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNXb3JkIGZyb21cbiAgJy4vaW1hZ2VzL2ludm9pY2VzL2RvY3VtZW50L3dvcmQuc3ZnJztcbmltcG9ydCBJbnZvaWNlc1hscyBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC94bHMuc3ZnJztcblxuaW1wb3J0IE9DTG9uZyBmcm9tXG4gICcuL2ltYWdlcy9sb2dvL29jLWxvZ28uc3ZnJztcbmltcG9ydCBPQ1Nob3J0IGZyb21cbiAgJy4vaW1hZ2VzL2xvZ28vb2MtbG9nby1zaG9ydC5zdmcnO1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBpbmRpY2F0b3I6IHtcbiAgICBhbGVydDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JBbGVydCksXG4gICAgYXJyb3dMZWZ0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckFycm93TGVmdCksXG4gICAgYXR0YWNobWVudDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JBdHRhY2htZW50KSxcblxuICAgIGJ1cmdlcjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JCdXJnZXIpLFxuICAgIGJ1cmdlckNsb3NlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckJ1cmdlckNsb3NlKSxcblxuICAgIGNhbGVuZGFyOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNhbGVuZGFyKSxcbiAgICBDYXJldFJpZ2h0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNhcmV0UmlnaHQpLFxuICAgIENhcmV0TGVmdDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDYXJldExlZnQpLFxuICAgIGNsb2NrOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNsb2NrKSxcbiAgICBjbG9zZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDbG9zZSksXG4gICAgY29tbWVudDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDb21tZW50KSxcbiAgICBjb21tZW50ZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ29tbWVudGVkKSxcbiAgICBjcml0aWNhbDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDcml0aWNhbCksXG5cbiAgICBkZWxldGU6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRGVsZXRlKSxcbiAgICBkcmFnZ2luZ0Fycm93czogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JEcmFnZ2luZ0Fycm93cyksXG5cbiAgICBlZGl0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckVkaXQpLFxuICAgIGVtYWlsOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckVtYWlsKSxcbiAgICBlcnJvcjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JFcnJvciksXG4gICAgZXhjbGFtYXRpb246IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRXhjbGFtYXRpb24pLFxuICAgIGV4cG9ydDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JFeHBvcnQpLFxuXG4gICAgZmlsdGVyaW5nOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckZpbHRlcmluZyksXG4gICAgZmxhZ2dlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JGbGFnZ2VkKSxcbiAgICBmb2xkZXI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRm9sZGVyKSxcblxuICAgIGhlbHA6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9ySGVscCksXG5cbiAgICBpbnNwZWN0ZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9ySW5zcGVjdGVkKSxcbiAgICBpbnNwZWN0ZWRBbmRBcHByb3ZlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JJbnNwZWN0ZWRBbmRBcHByb3ZlZCksXG5cbiAgICBsb2dvdXQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yTG9nb3V0KSxcblxuICAgIG1pbnVzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvck1pbnVzKSxcbiAgICBtb3JlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvck1vcmUpLFxuXG4gICAgb2s6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yT2spLFxuXG4gICAgcGlubmVkOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclBpbm5lZCksXG4gICAgcGx1czogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JQbHVzKSxcbiAgICBwcmVzZW50YXRpb246IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUHJlc2VudGF0aW9uKSxcbiAgICBwcmludDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JQcmludCksXG5cbiAgICByZWplY3RlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JSZWplY3RlZCksXG4gICAgcmVtb3ZlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclJlbW92ZSksXG4gICAgcmVtb3ZlRmlsdGVyOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFJlbW92ZUZpbHRlciksXG5cbiAgICBzYXZlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNhdmUpLFxuICAgIHNlYXJjaDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JTZWFyY2gpLFxuICAgIHNlYXJjaFdpdGhDaXJjbGU6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU2VhcmNoV2l0aENpcmNsZSksXG4gICAgc2V0dGluZ3M6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU2V0dGluZ3MpLFxuICAgIHNvcnRBc2M6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU29ydEFzYyksXG4gICAgc29ydERlc2M6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU29ydERlc2MpLFxuICAgIGluQ2xhcmlmaWNhdGlvbjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JJbkNsYXJpZmljYXRpb24pLFxuICAgIGxvY2tlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JMb2NrZWQpLFxuXG4gICAgdXNlcjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JTdGF0dXNVc2VyKSxcblxuICAgIHdhcm5pbmc6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yV2FybmluZyksXG5cbiAgICBleGNlZWRzTGltaXQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRXhjZWVkc0xpbWl0KSxcblxuICB9LFxuICBwcm9kdWN0OiB7XG4gICAgSW52b2ljZXM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdEludm9pY2VzKSxcbiAgICB1c2VyOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RVc2VyKSxcbiAgICBBY2NvdW50czogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0QWNjb3VudHMpLFxuICAgIEFyY2hpdmU6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdEFyY2hpdmUpLFxuICAgIERhc2hib2FyZDogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0RGFzaGJvYXJkKSxcbiAgICBJbmZvOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RJbmZvKSxcbiAgICBMaXF1aWRpdHk6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdExpcXVpZGl0eSksXG4gICAgTmV0dGluZzogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0TmV0dGluZyksXG4gICAgUGF5bWVudHM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdFBheW1lbnRzKSxcbiAgICBTZXR0aW5nczogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0U2V0dGluZ3MpLFxuICAgIFRvb2xzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RUb29scyksXG4gICAgVXNlcnM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdFVzZXJzKSxcbiAgICBFeGFtcGxlczogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0SW5mbyksXG4gICAgTWF0Y2hpbmc6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdE1hdGNoaW5nKSxcbiAgICBJbnNwZWN0b3I6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdEluc3BlY3RvciksXG4gIH0sXG4gIGludm9pY2VzOiB7XG4gICAgZ2VuZXJpYzogUmVhY3QuY3JlYXRlRmFjdG9yeShJbnZvaWNlc0dlbmVyaWMpLFxuICAgIHBkZjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbnZvaWNlc1BkZiksXG4gICAgcG5nOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEludm9pY2VzUG5nKSxcbiAgICBwcHQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW52b2ljZXNQcHQpLFxuICAgIHdvcmQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW52b2ljZXNXb3JkKSxcbiAgICB4bHM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW52b2ljZXNYbHMpLFxuICB9LFxuICBsb2dvOiB7XG4gICAgT0NTaG9ydDogUmVhY3QuY3JlYXRlRmFjdG9yeShPQ1Nob3J0KSxcbiAgICBPQ0xvbmc6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoT0NMb25nKSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBzd2l0Y2ggKHByb3BzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOiB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFdpZHRoID0gNDA7XG4gICAgICAgIHRoaXMuZGVmYXVsdEhlaWdodCA9IDQwO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2luZGljYXRvcic6IHtcbiAgICAgICAgdGhpcy5kZWZhdWx0V2lkdGggPSAyNTtcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVpZ2h0ID0gMjU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnbG9nbyc6IHtcbiAgICAgICAgaWYgKHByb3BzLm5hbWUgPT09ICdPQ0xvbmcnKSB7XG4gICAgICAgICAgdGhpcy5kZWZhdWx0V2lkdGggPSAxNTA7XG4gICAgICAgICAgdGhpcy5kZWZhdWx0SGVpZ2h0ID0gMzA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kZWZhdWx0V2lkdGggPSA1MDtcbiAgICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSAzMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZGVmYXVsdFdpZHRoID0gNDA7XG4gICAgICAgIHRoaXMuZGVmYXVsdEhlaWdodCA9IDQwO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlLFxuICAgICAgbmFtZSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgLi4ub3RoZXJQcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNbdHlwZV0gJiYgY29tcG9uZW50c1t0eXBlXVtuYW1lXTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0ge1xuICAgICAgd2lkdGg6IHdpZHRoIHx8IHRoaXMuZGVmYXVsdFdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgfHwgdGhpcy5kZWZhdWx0SGVpZ2h0LFxuICAgICAgZm9jdXNhYmxlOiAnZmFsc2UnLFxuICAgICAgLi4ub3RoZXJQcm9wcyxcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgSW5kaWNhdG9yTG9nb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY29tcG9uZW50KHByb3BlcnRpZXMpO1xuICAgIH1cbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiaWNvblwiIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgfVxufVxuXG5JY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6IG51bGwsXG4gIGhlaWdodDogbnVsbCxcbn07XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iXX0=