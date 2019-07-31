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

var _Info = require('./images/indicators/Info.svg');

var _Info2 = _interopRequireDefault(_Info);

var _Inspected = require('./images/indicators/Inspected.svg');

var _Inspected2 = _interopRequireDefault(_Inspected);

var _InspectedAndApproved = require('./images/indicators/InspectedAndApproved.svg');

var _InspectedAndApproved2 = _interopRequireDefault(_InspectedAndApproved);

var _Logout = require('./images/indicators/Logout.svg');

var _Logout2 = _interopRequireDefault(_Logout);

var _Matched = require('./images/indicators/Matched.svg');

var _Matched2 = _interopRequireDefault(_Matched);

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

var _Unmatched = require('./images/indicators/Unmatched.svg');

var _Unmatched2 = _interopRequireDefault(_Unmatched);

var _ConfirmedSub = require('./images/indicators/ConfirmedSub.svg');

var _ConfirmedSub2 = _interopRequireDefault(_ConfirmedSub);

var _PartiallySub = require('./images/indicators/PartiallySub.svg');

var _PartiallySub2 = _interopRequireDefault(_PartiallySub);

var _ErrorSub = require('./images/indicators/ErrorSub.svg');

var _ErrorSub2 = _interopRequireDefault(_ErrorSub);

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

var _Info3 = require('./images/products/Info.svg');

var _Info4 = _interopRequireDefault(_Info3);

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

    info: _react2.default.createFactory(_Info2.default),

    inspected: _react2.default.createFactory(_Inspected2.default),
    inspectedAndApproved: _react2.default.createFactory(_InspectedAndApproved2.default),

    logout: _react2.default.createFactory(_Logout2.default),

    matched: _react2.default.createFactory(_Matched2.default),
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

    unmatched: _react2.default.createFactory(_Unmatched2.default),
    user: _react2.default.createFactory(_StatusUser2.default),

    warning: _react2.default.createFactory(_Warning2.default),

    exceedsLimit: _react2.default.createFactory(_ExceedsLimit2.default),

    confirmedSub: _react2.default.createFactory(_ConfirmedSub2.default),
    partiallySub: _react2.default.createFactory(_PartiallySub2.default),
    errorSub: _react2.default.createFactory(_ErrorSub2.default)
  },
  product: {
    Invoices: _react2.default.createFactory(_Invoices2.default),
    user: _react2.default.createFactory(_User2.default),
    Accounts: _react2.default.createFactory(_Accounts2.default),
    Archive: _react2.default.createFactory(_Archive2.default),
    Dashboard: _react2.default.createFactory(_Dashboard2.default),
    Info: _react2.default.createFactory(_Info4.default),
    Liquidity: _react2.default.createFactory(_Liquidity2.default),
    Netting: _react2.default.createFactory(_Netting2.default),
    Payments: _react2.default.createFactory(_Payments2.default),
    Settings: _react2.default.createFactory(_Settings4.default),
    Tools: _react2.default.createFactory(_Tools2.default),
    Users: _react2.default.createFactory(_Users2.default),
    Examples: _react2.default.createFactory(_Info4.default),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9pY29uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiY29tcG9uZW50cyIsImluZGljYXRvciIsImFsZXJ0IiwiUmVhY3QiLCJjcmVhdGVGYWN0b3J5IiwiSW5kaWNhdG9yQWxlcnQiLCJhcnJvd0xlZnQiLCJJbmRpY2F0b3JBcnJvd0xlZnQiLCJhdHRhY2htZW50IiwiSW5kaWNhdG9yQXR0YWNobWVudCIsImJ1cmdlciIsIkluZGljYXRvckJ1cmdlciIsImJ1cmdlckNsb3NlIiwiSW5kaWNhdG9yQnVyZ2VyQ2xvc2UiLCJjYWxlbmRhciIsIkluZGljYXRvckNhbGVuZGFyIiwiQ2FyZXRSaWdodCIsIkluZGljYXRvckNhcmV0UmlnaHQiLCJDYXJldExlZnQiLCJJbmRpY2F0b3JDYXJldExlZnQiLCJjbG9jayIsIkluZGljYXRvckNsb2NrIiwiY2xvc2UiLCJJbmRpY2F0b3JDbG9zZSIsImNvbW1lbnQiLCJJbmRpY2F0b3JDb21tZW50IiwiY29tbWVudGVkIiwiSW5kaWNhdG9yQ29tbWVudGVkIiwiY3JpdGljYWwiLCJJbmRpY2F0b3JDcml0aWNhbCIsImRlbGV0ZSIsIkluZGljYXRvckRlbGV0ZSIsImRyYWdnaW5nQXJyb3dzIiwiSW5kaWNhdG9yRHJhZ2dpbmdBcnJvd3MiLCJlZGl0IiwiSW5kaWNhdG9yRWRpdCIsImVtYWlsIiwiSW5kaWNhdG9yRW1haWwiLCJlcnJvciIsIkluZGljYXRvckVycm9yIiwiZXhjbGFtYXRpb24iLCJJbmRpY2F0b3JFeGNsYW1hdGlvbiIsImV4cG9ydCIsIkluZGljYXRvckV4cG9ydCIsImZpbHRlcmluZyIsIkluZGljYXRvckZpbHRlcmluZyIsImZsYWdnZWQiLCJJbmRpY2F0b3JGbGFnZ2VkIiwiZm9sZGVyIiwiSW5kaWNhdG9yRm9sZGVyIiwiaGVscCIsIkluZGljYXRvckhlbHAiLCJpbmZvIiwiSW5kaWNhdG9ySW5mbyIsImluc3BlY3RlZCIsIkluZGljYXRvckluc3BlY3RlZCIsImluc3BlY3RlZEFuZEFwcHJvdmVkIiwiSW5kaWNhdG9ySW5zcGVjdGVkQW5kQXBwcm92ZWQiLCJsb2dvdXQiLCJJbmRpY2F0b3JMb2dvdXQiLCJtYXRjaGVkIiwiSW5kaWNhdG9yTWF0Y2hlZCIsIm1pbnVzIiwiSW5kaWNhdG9yTWludXMiLCJtb3JlIiwiSW5kaWNhdG9yTW9yZSIsIm9rIiwiSW5kaWNhdG9yT2siLCJwaW5uZWQiLCJJbmRpY2F0b3JQaW5uZWQiLCJwbHVzIiwiSW5kaWNhdG9yUGx1cyIsInByZXNlbnRhdGlvbiIsIkluZGljYXRvclByZXNlbnRhdGlvbiIsInByaW50IiwiSW5kaWNhdG9yUHJpbnQiLCJyZWplY3RlZCIsIkluZGljYXRvclJlamVjdGVkIiwicmVtb3ZlIiwiSW5kaWNhdG9yUmVtb3ZlIiwicmVtb3ZlRmlsdGVyIiwiUmVtb3ZlRmlsdGVyIiwic2F2ZSIsIkluZGljYXRvclNhdmUiLCJzZWFyY2giLCJJbmRpY2F0b3JTZWFyY2giLCJzZWFyY2hXaXRoQ2lyY2xlIiwiSW5kaWNhdG9yU2VhcmNoV2l0aENpcmNsZSIsInNldHRpbmdzIiwiSW5kaWNhdG9yU2V0dGluZ3MiLCJzb3J0QXNjIiwiSW5kaWNhdG9yU29ydEFzYyIsInNvcnREZXNjIiwiSW5kaWNhdG9yU29ydERlc2MiLCJpbkNsYXJpZmljYXRpb24iLCJJbmRpY2F0b3JJbkNsYXJpZmljYXRpb24iLCJsb2NrZWQiLCJJbmRpY2F0b3JMb2NrZWQiLCJ1bm1hdGNoZWQiLCJJbmRpY2F0b3JVbm1hdGNoZWQiLCJ1c2VyIiwiSW5kaWNhdG9yU3RhdHVzVXNlciIsIndhcm5pbmciLCJJbmRpY2F0b3JXYXJuaW5nIiwiZXhjZWVkc0xpbWl0IiwiSW5kaWNhdG9yRXhjZWVkc0xpbWl0IiwiY29uZmlybWVkU3ViIiwiSW5kaWNhdG9yQ29uZmlybWVkU3ViIiwicGFydGlhbGx5U3ViIiwiSW5kaWNhdG9yUGFydGlhbGx5U3ViIiwiZXJyb3JTdWIiLCJJbmRpY2F0b3JFcnJvclN1YiIsInByb2R1Y3QiLCJJbnZvaWNlcyIsIlByb2R1Y3RJbnZvaWNlcyIsIlByb2R1Y3RVc2VyIiwiQWNjb3VudHMiLCJQcm9kdWN0QWNjb3VudHMiLCJBcmNoaXZlIiwiUHJvZHVjdEFyY2hpdmUiLCJEYXNoYm9hcmQiLCJQcm9kdWN0RGFzaGJvYXJkIiwiSW5mbyIsIlByb2R1Y3RJbmZvIiwiTGlxdWlkaXR5IiwiUHJvZHVjdExpcXVpZGl0eSIsIk5ldHRpbmciLCJQcm9kdWN0TmV0dGluZyIsIlBheW1lbnRzIiwiUHJvZHVjdFBheW1lbnRzIiwiU2V0dGluZ3MiLCJQcm9kdWN0U2V0dGluZ3MiLCJUb29scyIsIlByb2R1Y3RUb29scyIsIlVzZXJzIiwiUHJvZHVjdFVzZXJzIiwiRXhhbXBsZXMiLCJNYXRjaGluZyIsIlByb2R1Y3RNYXRjaGluZyIsIkluc3BlY3RvciIsIlByb2R1Y3RJbnNwZWN0b3IiLCJpbnZvaWNlcyIsImdlbmVyaWMiLCJJbnZvaWNlc0dlbmVyaWMiLCJwZGYiLCJJbnZvaWNlc1BkZiIsInBuZyIsIkludm9pY2VzUG5nIiwicHB0IiwiSW52b2ljZXNQcHQiLCJ3b3JkIiwiSW52b2ljZXNXb3JkIiwieGxzIiwiSW52b2ljZXNYbHMiLCJsb2dvIiwiT0NTaG9ydCIsIk9DTG9uZyIsIkljb24iLCJwcm9wcyIsInR5cGUiLCJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwibmFtZSIsInJlbmRlciIsIndpZHRoIiwiaGVpZ2h0Iiwib3RoZXJQcm9wcyIsImNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmb2N1c2FibGUiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBR0E7Ozs7QUFFQTs7OztBQUdBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFHQTs7OztBQUVBOzs7O0FBR0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUdB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QUhELE1BR087QUFDTCxrQkFBS0QsWUFBTCxHQUFvQixFQUFwQjtBQUNBLGtCQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0Q7QUFDRDtBQUNEO0FBQ0Q7QUFDRSxjQUFLRCxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsY0FBS0MsYUFBTCxHQUFxQixFQUFyQjtBQXZCSjtBQUZpQjtBQTJCbEI7O2lCQUVERSxNLHFCQUFTO0FBQUEsaUJBT0gsS0FBS0wsS0FQRjtBQUFBLFFBRUxDLElBRkssVUFFTEEsSUFGSztBQUFBLFFBR0xHLElBSEssVUFHTEEsSUFISztBQUFBLFFBSUxFLEtBSkssVUFJTEEsS0FKSztBQUFBLFFBS0xDLE1BTEssVUFLTEEsTUFMSztBQUFBLFFBTUZDLFVBTkU7O0FBUVAsUUFBTUMsWUFBWXZLLFdBQVcrSixJQUFYLEtBQW9CL0osV0FBVytKLElBQVgsRUFBaUJHLElBQWpCLENBQXRDO0FBQ0EsUUFBTU07QUFDSkosYUFBT0EsU0FBUyxLQUFLSixZQURqQjtBQUVKSyxjQUFRQSxVQUFVLEtBQUtKLGFBRm5CO0FBR0pRLGlCQUFXO0FBSFAsT0FJREgsVUFKQyxDQUFOO0FBTUEsUUFBSSxPQUFPM0csZ0JBQVAsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekMsYUFBTzRHLFVBQVVDLFVBQVYsQ0FBUDtBQUNEO0FBQ0QsV0FBTyxpREFBTSxXQUFVLE1BQWhCLElBQTJCLEtBQUtWLEtBQWhDLEVBQVA7QUFDRCxHOzs7RUFqRCtCM0osZ0JBQU11SyxTOztrQkFBbkJiLEk7OztBQW9EckJBLEtBQUtjLFlBQUwsR0FBb0I7QUFDbEJQLFNBQU8sSUFEVztBQUVsQkMsVUFBUTtBQUZVLENBQXBCIiwiZmlsZSI6Imljb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWR1cGxpY2F0ZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSW5kaWNhdG9yQWxlcnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9BbGVydC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckFycm93TGVmdCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0Fycm93TGVmdC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckF0dGFjaG1lbnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9BdHRhY2htZW50LnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JCdXJnZXIgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9CdXJnZXIuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JCdXJnZXJDbG9zZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0J1cmdlci1jbG9zZS5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yQ2FsZW5kYXIgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9DYWxlbmRhci5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNhcmV0TGVmdCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0NhcmV0TGVmdC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNhcmV0UmlnaHQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9DYXJldFJpZ2h0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ2xvY2sgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9DbG9jay5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNsb3NlIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ2xvc2Uuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JDb21tZW50IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ29tbWVudC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNvbW1lbnRlZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0NvbW1lbnRlZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNyaXRpY2FsIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ3JpdGljYWwuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckRlbGV0ZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0RlbGV0ZS5zdmcnO1xuaW1wb3J0IEluZGljYXRvckRyYWdnaW5nQXJyb3dzIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRHJhZ2dpbmdBcnJvd3Muc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckVkaXQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FZGl0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRW1haWwgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FbWFpbC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckVycm9yIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRXJyb3Iuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JFeGNsYW1hdGlvbiBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0V4Y2xhbWF0aW9uLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRXhwb3J0IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRXhwb3J0LnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JGaWx0ZXJpbmcgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9GaWx0ZXJpbmcuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JGbGFnZ2VkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRmxhZ2dlZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckZvbGRlciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0ZvbGRlci5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9ySGVscCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0hlbHAuc3ZnJztcblxuXG5pbXBvcnQgSW5kaWNhdG9ySW5mbyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0luZm8uc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckluc3BlY3RlZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0luc3BlY3RlZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckluc3BlY3RlZEFuZEFwcHJvdmVkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvSW5zcGVjdGVkQW5kQXBwcm92ZWQuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckxvZ291dCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0xvZ291dC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yTWF0Y2hlZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL01hdGNoZWQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JNaW51cyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL01pbnVzLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yTW9yZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL01vcmUuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvck9rIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvT2suc3ZnJztcblxuaW1wb3J0IEluZGljYXRvclBpbm5lZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1Bpbm5lZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvclBsdXMgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9QbHVzLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yUHJlc2VudGF0aW9uIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvUHJlc2VudGF0aW9uLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yUHJpbnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9QcmludC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yUmVqZWN0ZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9SZWplY3RlZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvclJlbW92ZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1JlbW92ZS5zdmcnO1xuaW1wb3J0IFJlbW92ZUZpbHRlciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1JlbW92ZUZpbHRlci5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yU2F2ZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1NhdmUuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTZWFyY2ggZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TZWFyY2guc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTZWFyY2hXaXRoQ2lyY2xlIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU2VhcmNoV2l0aENpcmNsZS5zdmcnO1xuaW1wb3J0IEluZGljYXRvclNldHRpbmdzIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU2V0dGluZ3Muc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTb3J0QXNjIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU29ydEFzYy5zdmcnO1xuaW1wb3J0IEluZGljYXRvclNvcnREZXNjIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU29ydERlc2Muc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JJbkNsYXJpZmljYXRpb24gZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TdGF0dXNJbmNsYXJpZmljYXRpb24uc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JMb2NrZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TdGF0dXNMb2NrZWQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTdGF0dXNVc2VyIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU3RhdHVzVXNlci5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yVW5tYXRjaGVkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvVW5tYXRjaGVkLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JDb25maXJtZWRTdWIgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9Db25maXJtZWRTdWIuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JQYXJ0aWFsbHlTdWIgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9QYXJ0aWFsbHlTdWIuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JFcnJvclN1YiBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0Vycm9yU3ViLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JXYXJuaW5nIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvV2FybmluZy5zdmcnO1xuaW1wb3J0IEluZGljYXRvckV4Y2VlZHNMaW1pdCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0V4Y2VlZHNMaW1pdC5zdmcnO1xuXG5pbXBvcnQgUHJvZHVjdEludm9pY2VzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0ludm9pY2VzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFVzZXIgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvVXNlci5zdmcnO1xuaW1wb3J0IFByb2R1Y3RBY2NvdW50cyBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9BY2NvdW50cy5zdmcnO1xuaW1wb3J0IFByb2R1Y3RBcmNoaXZlIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0FyY2hpdmUuc3ZnJztcbmltcG9ydCBQcm9kdWN0RGFzaGJvYXJkIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0Rhc2hib2FyZC5zdmcnO1xuaW1wb3J0IFByb2R1Y3RJbmZvIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0luZm8uc3ZnJztcbmltcG9ydCBQcm9kdWN0TGlxdWlkaXR5IGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0xpcXVpZGl0eS5zdmcnO1xuaW1wb3J0IFByb2R1Y3ROZXR0aW5nIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL05ldHRpbmcuc3ZnJztcbmltcG9ydCBQcm9kdWN0UGF5bWVudHMgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvUGF5bWVudHMuc3ZnJztcbmltcG9ydCBQcm9kdWN0U2V0dGluZ3MgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvU2V0dGluZ3Muc3ZnJztcbmltcG9ydCBQcm9kdWN0VG9vbHMgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvVG9vbHMuc3ZnJztcbmltcG9ydCBQcm9kdWN0VXNlcnMgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvVXNlcnMuc3ZnJztcbmltcG9ydCBQcm9kdWN0TWF0Y2hpbmcgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvTWF0Y2hpbmcuc3ZnJztcbmltcG9ydCBQcm9kdWN0SW5zcGVjdG9yIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0luc3BlY3Rvci5zdmcnO1xuXG5pbXBvcnQgSW52b2ljZXNHZW5lcmljIGZyb21cbiAgJy4vaW1hZ2VzL2ludm9pY2VzL2RvY3VtZW50L2dlbmVyaWMuc3ZnJztcbmltcG9ydCBJbnZvaWNlc1BkZiBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC9wZGYuc3ZnJztcbmltcG9ydCBJbnZvaWNlc1BuZyBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC9wbmcuc3ZnJztcbmltcG9ydCBJbnZvaWNlc1BwdCBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC9wcHQuc3ZnJztcbmltcG9ydCBJbnZvaWNlc1dvcmQgZnJvbVxuICAnLi9pbWFnZXMvaW52b2ljZXMvZG9jdW1lbnQvd29yZC5zdmcnO1xuaW1wb3J0IEludm9pY2VzWGxzIGZyb21cbiAgJy4vaW1hZ2VzL2ludm9pY2VzL2RvY3VtZW50L3hscy5zdmcnO1xuXG5pbXBvcnQgT0NMb25nIGZyb21cbiAgJy4vaW1hZ2VzL2xvZ28vb2MtbG9nby5zdmcnO1xuaW1wb3J0IE9DU2hvcnQgZnJvbVxuICAnLi9pbWFnZXMvbG9nby9vYy1sb2dvLXNob3J0LnN2Zyc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIGluZGljYXRvcjoge1xuICAgIGFsZXJ0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckFsZXJ0KSxcbiAgICBhcnJvd0xlZnQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQXJyb3dMZWZ0KSxcbiAgICBhdHRhY2htZW50OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckF0dGFjaG1lbnQpLFxuXG4gICAgYnVyZ2VyOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckJ1cmdlciksXG4gICAgYnVyZ2VyQ2xvc2U6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQnVyZ2VyQ2xvc2UpLFxuXG4gICAgY2FsZW5kYXI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ2FsZW5kYXIpLFxuICAgIENhcmV0UmlnaHQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ2FyZXRSaWdodCksXG4gICAgQ2FyZXRMZWZ0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNhcmV0TGVmdCksXG4gICAgY2xvY2s6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ2xvY2spLFxuICAgIGNsb3NlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNsb3NlKSxcbiAgICBjb21tZW50OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNvbW1lbnQpLFxuICAgIGNvbW1lbnRlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDb21tZW50ZWQpLFxuICAgIGNyaXRpY2FsOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNyaXRpY2FsKSxcblxuICAgIGRlbGV0ZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JEZWxldGUpLFxuICAgIGRyYWdnaW5nQXJyb3dzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckRyYWdnaW5nQXJyb3dzKSxcblxuICAgIGVkaXQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRWRpdCksXG4gICAgZW1haWw6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRW1haWwpLFxuICAgIGVycm9yOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckVycm9yKSxcbiAgICBleGNsYW1hdGlvbjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JFeGNsYW1hdGlvbiksXG4gICAgZXhwb3J0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckV4cG9ydCksXG5cbiAgICBmaWx0ZXJpbmc6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRmlsdGVyaW5nKSxcbiAgICBmbGFnZ2VkOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckZsYWdnZWQpLFxuICAgIGZvbGRlcjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JGb2xkZXIpLFxuXG4gICAgaGVscDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JIZWxwKSxcblxuICAgIGluZm86IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9ySW5mbyksXG5cblxuICAgIGluc3BlY3RlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JJbnNwZWN0ZWQpLFxuICAgIGluc3BlY3RlZEFuZEFwcHJvdmVkOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckluc3BlY3RlZEFuZEFwcHJvdmVkKSxcblxuICAgIGxvZ291dDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JMb2dvdXQpLFxuXG4gICAgbWF0Y2hlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JNYXRjaGVkKSxcbiAgICBtaW51czogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JNaW51cyksXG4gICAgbW9yZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JNb3JlKSxcblxuICAgIG9rOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvck9rKSxcblxuICAgIHBpbm5lZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JQaW5uZWQpLFxuICAgIHBsdXM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUGx1cyksXG4gICAgcHJlc2VudGF0aW9uOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclByZXNlbnRhdGlvbiksXG4gICAgcHJpbnQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUHJpbnQpLFxuXG4gICAgcmVqZWN0ZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUmVqZWN0ZWQpLFxuICAgIHJlbW92ZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JSZW1vdmUpLFxuICAgIHJlbW92ZUZpbHRlcjogUmVhY3QuY3JlYXRlRmFjdG9yeShSZW1vdmVGaWx0ZXIpLFxuXG4gICAgc2F2ZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JTYXZlKSxcbiAgICBzZWFyY2g6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU2VhcmNoKSxcbiAgICBzZWFyY2hXaXRoQ2lyY2xlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNlYXJjaFdpdGhDaXJjbGUpLFxuICAgIHNldHRpbmdzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNldHRpbmdzKSxcbiAgICBzb3J0QXNjOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNvcnRBc2MpLFxuICAgIHNvcnREZXNjOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNvcnREZXNjKSxcbiAgICBpbkNsYXJpZmljYXRpb246IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9ySW5DbGFyaWZpY2F0aW9uKSxcbiAgICBsb2NrZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yTG9ja2VkKSxcblxuICAgIHVubWF0Y2hlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JVbm1hdGNoZWQpLFxuICAgIHVzZXI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU3RhdHVzVXNlciksXG5cbiAgICB3YXJuaW5nOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvcldhcm5pbmcpLFxuXG4gICAgZXhjZWVkc0xpbWl0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckV4Y2VlZHNMaW1pdCksXG5cbiAgICBjb25maXJtZWRTdWI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ29uZmlybWVkU3ViKSxcbiAgICBwYXJ0aWFsbHlTdWI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUGFydGlhbGx5U3ViKSxcbiAgICBlcnJvclN1YjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JFcnJvclN1YiksXG4gIH0sXG4gIHByb2R1Y3Q6IHtcbiAgICBJbnZvaWNlczogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0SW52b2ljZXMpLFxuICAgIHVzZXI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdFVzZXIpLFxuICAgIEFjY291bnRzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RBY2NvdW50cyksXG4gICAgQXJjaGl2ZTogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0QXJjaGl2ZSksXG4gICAgRGFzaGJvYXJkOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3REYXNoYm9hcmQpLFxuICAgIEluZm86IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdEluZm8pLFxuICAgIExpcXVpZGl0eTogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0TGlxdWlkaXR5KSxcbiAgICBOZXR0aW5nOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3ROZXR0aW5nKSxcbiAgICBQYXltZW50czogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0UGF5bWVudHMpLFxuICAgIFNldHRpbmdzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RTZXR0aW5ncyksXG4gICAgVG9vbHM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdFRvb2xzKSxcbiAgICBVc2VyczogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0VXNlcnMpLFxuICAgIEV4YW1wbGVzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RJbmZvKSxcbiAgICBNYXRjaGluZzogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0TWF0Y2hpbmcpLFxuICAgIEluc3BlY3RvcjogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0SW5zcGVjdG9yKSxcbiAgfSxcbiAgaW52b2ljZXM6IHtcbiAgICBnZW5lcmljOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEludm9pY2VzR2VuZXJpYyksXG4gICAgcGRmOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEludm9pY2VzUGRmKSxcbiAgICBwbmc6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW52b2ljZXNQbmcpLFxuICAgIHBwdDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbnZvaWNlc1BwdCksXG4gICAgd29yZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbnZvaWNlc1dvcmQpLFxuICAgIHhsczogUmVhY3QuY3JlYXRlRmFjdG9yeShJbnZvaWNlc1hscyksXG4gIH0sXG4gIGxvZ286IHtcbiAgICBPQ1Nob3J0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KE9DU2hvcnQpLFxuICAgIE9DTG9uZzogUmVhY3QuY3JlYXRlRmFjdG9yeShPQ0xvbmcpLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHN3aXRjaCAocHJvcHMudHlwZSkge1xuICAgICAgY2FzZSAncHJvZHVjdCc6IHtcbiAgICAgICAgdGhpcy5kZWZhdWx0V2lkdGggPSA0MDtcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVpZ2h0ID0gNDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnaW5kaWNhdG9yJzoge1xuICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDI1O1xuICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSAyNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdsb2dvJzoge1xuICAgICAgICBpZiAocHJvcHMubmFtZSA9PT0gJ09DTG9uZycpIHtcbiAgICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDE1MDtcbiAgICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSAzMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDUwO1xuICAgICAgICAgIHRoaXMuZGVmYXVsdEhlaWdodCA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5kZWZhdWx0V2lkdGggPSA0MDtcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVpZ2h0ID0gNDA7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHR5cGUsXG4gICAgICBuYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c1t0eXBlXSAmJiBjb21wb25lbnRzW3R5cGVdW25hbWVdO1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7XG4gICAgICB3aWR0aDogd2lkdGggfHwgdGhpcy5kZWZhdWx0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCB8fCB0aGlzLmRlZmF1bHRIZWlnaHQsXG4gICAgICBmb2N1c2FibGU6ICdmYWxzZScsXG4gICAgICAuLi5vdGhlclByb3BzLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBJbmRpY2F0b3JMb2dvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjb21wb25lbnQocHJvcGVydGllcyk7XG4gICAgfVxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCIgey4uLnRoaXMucHJvcHN9IC8+O1xuICB9XG59XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICB3aWR0aDogbnVsbCxcbiAgaGVpZ2h0OiBudWxsLFxufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiJdfQ==