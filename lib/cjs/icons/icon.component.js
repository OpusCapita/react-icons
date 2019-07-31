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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9pY29uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiY29tcG9uZW50cyIsImluZGljYXRvciIsImFsZXJ0IiwiUmVhY3QiLCJjcmVhdGVGYWN0b3J5IiwiSW5kaWNhdG9yQWxlcnQiLCJhcnJvd0xlZnQiLCJJbmRpY2F0b3JBcnJvd0xlZnQiLCJhdHRhY2htZW50IiwiSW5kaWNhdG9yQXR0YWNobWVudCIsImJ1cmdlciIsIkluZGljYXRvckJ1cmdlciIsImJ1cmdlckNsb3NlIiwiSW5kaWNhdG9yQnVyZ2VyQ2xvc2UiLCJjYWxlbmRhciIsIkluZGljYXRvckNhbGVuZGFyIiwiQ2FyZXRSaWdodCIsIkluZGljYXRvckNhcmV0UmlnaHQiLCJDYXJldExlZnQiLCJJbmRpY2F0b3JDYXJldExlZnQiLCJjbG9jayIsIkluZGljYXRvckNsb2NrIiwiY2xvc2UiLCJJbmRpY2F0b3JDbG9zZSIsImNvbW1lbnQiLCJJbmRpY2F0b3JDb21tZW50IiwiY29tbWVudGVkIiwiSW5kaWNhdG9yQ29tbWVudGVkIiwiY3JpdGljYWwiLCJJbmRpY2F0b3JDcml0aWNhbCIsImRlbGV0ZSIsIkluZGljYXRvckRlbGV0ZSIsImRyYWdnaW5nQXJyb3dzIiwiSW5kaWNhdG9yRHJhZ2dpbmdBcnJvd3MiLCJlZGl0IiwiSW5kaWNhdG9yRWRpdCIsImVtYWlsIiwiSW5kaWNhdG9yRW1haWwiLCJlcnJvciIsIkluZGljYXRvckVycm9yIiwiZXhjbGFtYXRpb24iLCJJbmRpY2F0b3JFeGNsYW1hdGlvbiIsImV4cG9ydCIsIkluZGljYXRvckV4cG9ydCIsImZpbHRlcmluZyIsIkluZGljYXRvckZpbHRlcmluZyIsImZsYWdnZWQiLCJJbmRpY2F0b3JGbGFnZ2VkIiwiZm9sZGVyIiwiSW5kaWNhdG9yRm9sZGVyIiwiaGVscCIsIkluZGljYXRvckhlbHAiLCJpbnNwZWN0ZWQiLCJJbmRpY2F0b3JJbnNwZWN0ZWQiLCJpbnNwZWN0ZWRBbmRBcHByb3ZlZCIsIkluZGljYXRvckluc3BlY3RlZEFuZEFwcHJvdmVkIiwibG9nb3V0IiwiSW5kaWNhdG9yTG9nb3V0IiwibWF0Y2hlZCIsIkluZGljYXRvck1hdGNoZWQiLCJtaW51cyIsIkluZGljYXRvck1pbnVzIiwibW9yZSIsIkluZGljYXRvck1vcmUiLCJvayIsIkluZGljYXRvck9rIiwicGlubmVkIiwiSW5kaWNhdG9yUGlubmVkIiwicGx1cyIsIkluZGljYXRvclBsdXMiLCJwcmVzZW50YXRpb24iLCJJbmRpY2F0b3JQcmVzZW50YXRpb24iLCJwcmludCIsIkluZGljYXRvclByaW50IiwicmVqZWN0ZWQiLCJJbmRpY2F0b3JSZWplY3RlZCIsInJlbW92ZSIsIkluZGljYXRvclJlbW92ZSIsInJlbW92ZUZpbHRlciIsIlJlbW92ZUZpbHRlciIsInNhdmUiLCJJbmRpY2F0b3JTYXZlIiwic2VhcmNoIiwiSW5kaWNhdG9yU2VhcmNoIiwic2VhcmNoV2l0aENpcmNsZSIsIkluZGljYXRvclNlYXJjaFdpdGhDaXJjbGUiLCJzZXR0aW5ncyIsIkluZGljYXRvclNldHRpbmdzIiwic29ydEFzYyIsIkluZGljYXRvclNvcnRBc2MiLCJzb3J0RGVzYyIsIkluZGljYXRvclNvcnREZXNjIiwiaW5DbGFyaWZpY2F0aW9uIiwiSW5kaWNhdG9ySW5DbGFyaWZpY2F0aW9uIiwibG9ja2VkIiwiSW5kaWNhdG9yTG9ja2VkIiwidW5tYXRjaGVkIiwiSW5kaWNhdG9yVW5tYXRjaGVkIiwidXNlciIsIkluZGljYXRvclN0YXR1c1VzZXIiLCJ3YXJuaW5nIiwiSW5kaWNhdG9yV2FybmluZyIsImV4Y2VlZHNMaW1pdCIsIkluZGljYXRvckV4Y2VlZHNMaW1pdCIsInByb2R1Y3QiLCJJbnZvaWNlcyIsIlByb2R1Y3RJbnZvaWNlcyIsIlByb2R1Y3RVc2VyIiwiQWNjb3VudHMiLCJQcm9kdWN0QWNjb3VudHMiLCJBcmNoaXZlIiwiUHJvZHVjdEFyY2hpdmUiLCJEYXNoYm9hcmQiLCJQcm9kdWN0RGFzaGJvYXJkIiwiSW5mbyIsIlByb2R1Y3RJbmZvIiwiTGlxdWlkaXR5IiwiUHJvZHVjdExpcXVpZGl0eSIsIk5ldHRpbmciLCJQcm9kdWN0TmV0dGluZyIsIlBheW1lbnRzIiwiUHJvZHVjdFBheW1lbnRzIiwiU2V0dGluZ3MiLCJQcm9kdWN0U2V0dGluZ3MiLCJUb29scyIsIlByb2R1Y3RUb29scyIsIlVzZXJzIiwiUHJvZHVjdFVzZXJzIiwiRXhhbXBsZXMiLCJNYXRjaGluZyIsIlByb2R1Y3RNYXRjaGluZyIsIkluc3BlY3RvciIsIlByb2R1Y3RJbnNwZWN0b3IiLCJpbnZvaWNlcyIsImdlbmVyaWMiLCJJbnZvaWNlc0dlbmVyaWMiLCJwZGYiLCJJbnZvaWNlc1BkZiIsInBuZyIsIkludm9pY2VzUG5nIiwicHB0IiwiSW52b2ljZXNQcHQiLCJ3b3JkIiwiSW52b2ljZXNXb3JkIiwieGxzIiwiSW52b2ljZXNYbHMiLCJsb2dvIiwiT0NTaG9ydCIsIk9DTG9uZyIsIkljb24iLCJwcm9wcyIsInR5cGUiLCJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwibmFtZSIsInJlbmRlciIsIndpZHRoIiwiaGVpZ2h0Iiwib3RoZXJQcm9wcyIsImNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmb2N1c2FibGUiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBR0E7Ozs7QUFFQTs7OztBQUdBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFHQTs7OztBQUVBOzs7O0FBR0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUdBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUdBOzs7O0FBR0E7Ozs7QUFFQTs7OztBQUdBOzs7O0FBR0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBR0E7Ozs7QUFHQTs7OztBQUVBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUdBOzs7O0FBRUE7Ozs7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LEtBQW9CdkosV0FBV3VKLElBQVgsRUFBaUJHLElBQWpCLENBQXRDO0FBQ0EsUUFBTU07QUFDSkosYUFBT0EsU0FBUyxLQUFLSixZQURqQjtBQUVKSyxjQUFRQSxVQUFVLEtBQUtKLGFBRm5CO0FBR0pRLGlCQUFXO0FBSFAsT0FJREgsVUFKQyxDQUFOO0FBTUEsUUFBSSxPQUFPckcsZ0JBQVAsS0FBMkIsVUFBL0IsRUFBMkM7QUFDekMsYUFBT3NHLFVBQVVDLFVBQVYsQ0FBUDtBQUNEO0FBQ0QsV0FBTyxpREFBTSxXQUFVLE1BQWhCLElBQTJCLEtBQUtWLEtBQWhDLEVBQVA7QUFDRCxHOzs7RUFqRCtCbkosZ0JBQU0rSixTOztrQkFBbkJiLEk7OztBQW9EckJBLEtBQUtjLFlBQUwsR0FBb0I7QUFDbEJQLFNBQU8sSUFEVztBQUVsQkMsVUFBUTtBQUZVLENBQXBCIiwiZmlsZSI6Imljb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWR1cGxpY2F0ZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSW5kaWNhdG9yQWxlcnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9BbGVydC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckFycm93TGVmdCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0Fycm93TGVmdC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckF0dGFjaG1lbnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9BdHRhY2htZW50LnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JCdXJnZXIgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9CdXJnZXIuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JCdXJnZXJDbG9zZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0J1cmdlci1jbG9zZS5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yQ2FsZW5kYXIgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9DYWxlbmRhci5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNhcmV0TGVmdCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0NhcmV0TGVmdC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNhcmV0UmlnaHQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9DYXJldFJpZ2h0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ2xvY2sgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9DbG9jay5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNsb3NlIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ2xvc2Uuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JDb21tZW50IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ29tbWVudC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNvbW1lbnRlZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0NvbW1lbnRlZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNyaXRpY2FsIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ3JpdGljYWwuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckRlbGV0ZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0RlbGV0ZS5zdmcnO1xuaW1wb3J0IEluZGljYXRvckRyYWdnaW5nQXJyb3dzIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRHJhZ2dpbmdBcnJvd3Muc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckVkaXQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FZGl0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRW1haWwgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FbWFpbC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckVycm9yIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRXJyb3Iuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JFeGNsYW1hdGlvbiBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0V4Y2xhbWF0aW9uLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRXhwb3J0IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRXhwb3J0LnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JGaWx0ZXJpbmcgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9GaWx0ZXJpbmcuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JGbGFnZ2VkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRmxhZ2dlZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckZvbGRlciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0ZvbGRlci5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9ySGVscCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0hlbHAuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckluc3BlY3RlZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0luc3BlY3RlZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckluc3BlY3RlZEFuZEFwcHJvdmVkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvSW5zcGVjdGVkQW5kQXBwcm92ZWQuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckxvZ291dCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0xvZ291dC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yTWF0Y2hlZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL01hdGNoZWQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JNaW51cyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL01pbnVzLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yTW9yZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL01vcmUuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvck9rIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvT2suc3ZnJztcblxuaW1wb3J0IEluZGljYXRvclBpbm5lZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1Bpbm5lZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvclBsdXMgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9QbHVzLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yUHJlc2VudGF0aW9uIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvUHJlc2VudGF0aW9uLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yUHJpbnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9QcmludC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yUmVqZWN0ZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9SZWplY3RlZC5zdmcnO1xuaW1wb3J0IEluZGljYXRvclJlbW92ZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1JlbW92ZS5zdmcnO1xuaW1wb3J0IFJlbW92ZUZpbHRlciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1JlbW92ZUZpbHRlci5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yU2F2ZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1NhdmUuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTZWFyY2ggZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TZWFyY2guc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTZWFyY2hXaXRoQ2lyY2xlIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU2VhcmNoV2l0aENpcmNsZS5zdmcnO1xuaW1wb3J0IEluZGljYXRvclNldHRpbmdzIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU2V0dGluZ3Muc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTb3J0QXNjIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU29ydEFzYy5zdmcnO1xuaW1wb3J0IEluZGljYXRvclNvcnREZXNjIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU29ydERlc2Muc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JJbkNsYXJpZmljYXRpb24gZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TdGF0dXNJbmNsYXJpZmljYXRpb24uc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JMb2NrZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TdGF0dXNMb2NrZWQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTdGF0dXNVc2VyIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU3RhdHVzVXNlci5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yVW5tYXRjaGVkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvVW5tYXRjaGVkLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JXYXJuaW5nIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvV2FybmluZy5zdmcnO1xuaW1wb3J0IEluZGljYXRvckV4Y2VlZHNMaW1pdCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0V4Y2VlZHNMaW1pdC5zdmcnO1xuXG5pbXBvcnQgUHJvZHVjdEludm9pY2VzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0ludm9pY2VzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFVzZXIgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvVXNlci5zdmcnO1xuaW1wb3J0IFByb2R1Y3RBY2NvdW50cyBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9BY2NvdW50cy5zdmcnO1xuaW1wb3J0IFByb2R1Y3RBcmNoaXZlIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0FyY2hpdmUuc3ZnJztcbmltcG9ydCBQcm9kdWN0RGFzaGJvYXJkIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0Rhc2hib2FyZC5zdmcnO1xuaW1wb3J0IFByb2R1Y3RJbmZvIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0luZm8uc3ZnJztcbmltcG9ydCBQcm9kdWN0TGlxdWlkaXR5IGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0xpcXVpZGl0eS5zdmcnO1xuaW1wb3J0IFByb2R1Y3ROZXR0aW5nIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL05ldHRpbmcuc3ZnJztcbmltcG9ydCBQcm9kdWN0UGF5bWVudHMgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvUGF5bWVudHMuc3ZnJztcbmltcG9ydCBQcm9kdWN0U2V0dGluZ3MgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvU2V0dGluZ3Muc3ZnJztcbmltcG9ydCBQcm9kdWN0VG9vbHMgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvVG9vbHMuc3ZnJztcbmltcG9ydCBQcm9kdWN0VXNlcnMgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvVXNlcnMuc3ZnJztcbmltcG9ydCBQcm9kdWN0TWF0Y2hpbmcgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvTWF0Y2hpbmcuc3ZnJztcbmltcG9ydCBQcm9kdWN0SW5zcGVjdG9yIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL0luc3BlY3Rvci5zdmcnO1xuXG5pbXBvcnQgSW52b2ljZXNHZW5lcmljIGZyb21cbiAgJy4vaW1hZ2VzL2ludm9pY2VzL2RvY3VtZW50L2dlbmVyaWMuc3ZnJztcbmltcG9ydCBJbnZvaWNlc1BkZiBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC9wZGYuc3ZnJztcbmltcG9ydCBJbnZvaWNlc1BuZyBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC9wbmcuc3ZnJztcbmltcG9ydCBJbnZvaWNlc1BwdCBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC9wcHQuc3ZnJztcbmltcG9ydCBJbnZvaWNlc1dvcmQgZnJvbVxuICAnLi9pbWFnZXMvaW52b2ljZXMvZG9jdW1lbnQvd29yZC5zdmcnO1xuaW1wb3J0IEludm9pY2VzWGxzIGZyb21cbiAgJy4vaW1hZ2VzL2ludm9pY2VzL2RvY3VtZW50L3hscy5zdmcnO1xuXG5pbXBvcnQgT0NMb25nIGZyb21cbiAgJy4vaW1hZ2VzL2xvZ28vb2MtbG9nby5zdmcnO1xuaW1wb3J0IE9DU2hvcnQgZnJvbVxuICAnLi9pbWFnZXMvbG9nby9vYy1sb2dvLXNob3J0LnN2Zyc7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIGluZGljYXRvcjoge1xuICAgIGFsZXJ0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckFsZXJ0KSxcbiAgICBhcnJvd0xlZnQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQXJyb3dMZWZ0KSxcbiAgICBhdHRhY2htZW50OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckF0dGFjaG1lbnQpLFxuXG4gICAgYnVyZ2VyOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckJ1cmdlciksXG4gICAgYnVyZ2VyQ2xvc2U6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQnVyZ2VyQ2xvc2UpLFxuXG4gICAgY2FsZW5kYXI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ2FsZW5kYXIpLFxuICAgIENhcmV0UmlnaHQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ2FyZXRSaWdodCksXG4gICAgQ2FyZXRMZWZ0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNhcmV0TGVmdCksXG4gICAgY2xvY2s6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ2xvY2spLFxuICAgIGNsb3NlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNsb3NlKSxcbiAgICBjb21tZW50OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNvbW1lbnQpLFxuICAgIGNvbW1lbnRlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDb21tZW50ZWQpLFxuICAgIGNyaXRpY2FsOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNyaXRpY2FsKSxcblxuICAgIGRlbGV0ZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JEZWxldGUpLFxuICAgIGRyYWdnaW5nQXJyb3dzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckRyYWdnaW5nQXJyb3dzKSxcblxuICAgIGVkaXQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRWRpdCksXG4gICAgZW1haWw6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRW1haWwpLFxuICAgIGVycm9yOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckVycm9yKSxcbiAgICBleGNsYW1hdGlvbjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JFeGNsYW1hdGlvbiksXG4gICAgZXhwb3J0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckV4cG9ydCksXG5cbiAgICBmaWx0ZXJpbmc6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRmlsdGVyaW5nKSxcbiAgICBmbGFnZ2VkOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckZsYWdnZWQpLFxuICAgIGZvbGRlcjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JGb2xkZXIpLFxuXG4gICAgaGVscDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JIZWxwKSxcblxuICAgIGluc3BlY3RlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JJbnNwZWN0ZWQpLFxuICAgIGluc3BlY3RlZEFuZEFwcHJvdmVkOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckluc3BlY3RlZEFuZEFwcHJvdmVkKSxcblxuICAgIGxvZ291dDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JMb2dvdXQpLFxuXG4gICAgbWF0Y2hlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JNYXRjaGVkKSxcbiAgICBtaW51czogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JNaW51cyksXG4gICAgbW9yZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JNb3JlKSxcblxuICAgIG9rOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvck9rKSxcblxuICAgIHBpbm5lZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JQaW5uZWQpLFxuICAgIHBsdXM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUGx1cyksXG4gICAgcHJlc2VudGF0aW9uOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclByZXNlbnRhdGlvbiksXG4gICAgcHJpbnQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUHJpbnQpLFxuXG4gICAgcmVqZWN0ZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUmVqZWN0ZWQpLFxuICAgIHJlbW92ZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JSZW1vdmUpLFxuICAgIHJlbW92ZUZpbHRlcjogUmVhY3QuY3JlYXRlRmFjdG9yeShSZW1vdmVGaWx0ZXIpLFxuXG4gICAgc2F2ZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JTYXZlKSxcbiAgICBzZWFyY2g6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU2VhcmNoKSxcbiAgICBzZWFyY2hXaXRoQ2lyY2xlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNlYXJjaFdpdGhDaXJjbGUpLFxuICAgIHNldHRpbmdzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNldHRpbmdzKSxcbiAgICBzb3J0QXNjOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNvcnRBc2MpLFxuICAgIHNvcnREZXNjOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNvcnREZXNjKSxcbiAgICBpbkNsYXJpZmljYXRpb246IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9ySW5DbGFyaWZpY2F0aW9uKSxcbiAgICBsb2NrZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yTG9ja2VkKSxcblxuICAgIHVubWF0Y2hlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JVbm1hdGNoZWQpLFxuICAgIHVzZXI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU3RhdHVzVXNlciksXG5cbiAgICB3YXJuaW5nOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvcldhcm5pbmcpLFxuXG4gICAgZXhjZWVkc0xpbWl0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckV4Y2VlZHNMaW1pdCksXG5cbiAgfSxcbiAgcHJvZHVjdDoge1xuICAgIEludm9pY2VzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RJbnZvaWNlcyksXG4gICAgdXNlcjogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0VXNlciksXG4gICAgQWNjb3VudHM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdEFjY291bnRzKSxcbiAgICBBcmNoaXZlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RBcmNoaXZlKSxcbiAgICBEYXNoYm9hcmQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdERhc2hib2FyZCksXG4gICAgSW5mbzogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0SW5mbyksXG4gICAgTGlxdWlkaXR5OiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RMaXF1aWRpdHkpLFxuICAgIE5ldHRpbmc6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdE5ldHRpbmcpLFxuICAgIFBheW1lbnRzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RQYXltZW50cyksXG4gICAgU2V0dGluZ3M6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdFNldHRpbmdzKSxcbiAgICBUb29sczogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0VG9vbHMpLFxuICAgIFVzZXJzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RVc2VycyksXG4gICAgRXhhbXBsZXM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdEluZm8pLFxuICAgIE1hdGNoaW5nOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RNYXRjaGluZyksXG4gICAgSW5zcGVjdG9yOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RJbnNwZWN0b3IpLFxuICB9LFxuICBpbnZvaWNlczoge1xuICAgIGdlbmVyaWM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW52b2ljZXNHZW5lcmljKSxcbiAgICBwZGY6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW52b2ljZXNQZGYpLFxuICAgIHBuZzogUmVhY3QuY3JlYXRlRmFjdG9yeShJbnZvaWNlc1BuZyksXG4gICAgcHB0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEludm9pY2VzUHB0KSxcbiAgICB3b3JkOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEludm9pY2VzV29yZCksXG4gICAgeGxzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEludm9pY2VzWGxzKSxcbiAgfSxcbiAgbG9nbzoge1xuICAgIE9DU2hvcnQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoT0NTaG9ydCksXG4gICAgT0NMb25nOiBSZWFjdC5jcmVhdGVGYWN0b3J5KE9DTG9uZyksXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgc3dpdGNoIChwcm9wcy50eXBlKSB7XG4gICAgICBjYXNlICdwcm9kdWN0Jzoge1xuICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDQwO1xuICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSA0MDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdpbmRpY2F0b3InOiB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFdpZHRoID0gMjU7XG4gICAgICAgIHRoaXMuZGVmYXVsdEhlaWdodCA9IDI1O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2xvZ28nOiB7XG4gICAgICAgIGlmIChwcm9wcy5uYW1lID09PSAnT0NMb25nJykge1xuICAgICAgICAgIHRoaXMuZGVmYXVsdFdpZHRoID0gMTUwO1xuICAgICAgICAgIHRoaXMuZGVmYXVsdEhlaWdodCA9IDMwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZGVmYXVsdFdpZHRoID0gNTA7XG4gICAgICAgICAgdGhpcy5kZWZhdWx0SGVpZ2h0ID0gMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDQwO1xuICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSA0MDtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZSxcbiAgICAgIG5hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIC4uLm90aGVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb25lbnRzW3R5cGVdICYmIGNvbXBvbmVudHNbdHlwZV1bbmFtZV07XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHtcbiAgICAgIHdpZHRoOiB3aWR0aCB8fCB0aGlzLmRlZmF1bHRXaWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0IHx8IHRoaXMuZGVmYXVsdEhlaWdodCxcbiAgICAgIGZvY3VzYWJsZTogJ2ZhbHNlJyxcbiAgICAgIC4uLm90aGVyUHJvcHMsXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIEluZGljYXRvckxvZ291dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNvbXBvbmVudChwcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIiB7Li4udGhpcy5wcm9wc30gLz47XG4gIH1cbn1cblxuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiBudWxsLFxuICBoZWlnaHQ6IG51bGwsXG59O1xuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuIl19