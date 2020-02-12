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

var _CaretDoubleLeft = require('./images/indicators/CaretDoubleLeft.svg');

var _CaretDoubleLeft2 = _interopRequireDefault(_CaretDoubleLeft);

var _CaretDoubleRight = require('./images/indicators/CaretDoubleRight.svg');

var _CaretDoubleRight2 = _interopRequireDefault(_CaretDoubleRight);

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

var _Deleted = require('./images/indicators/Deleted.svg');

var _Deleted2 = _interopRequireDefault(_Deleted);

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

var _Inspector = require('./images/indicators/Inspector.svg');

var _Inspector2 = _interopRequireDefault(_Inspector);

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

var _Inspector3 = require('./images/products/Inspector.svg');

var _Inspector4 = _interopRequireDefault(_Inspector3);

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
    CaretDoubleRight: _react2.default.createFactory(_CaretDoubleRight2.default),
    CaretDoubleLeft: _react2.default.createFactory(_CaretDoubleLeft2.default),
    clock: _react2.default.createFactory(_Clock2.default),
    close: _react2.default.createFactory(_Close2.default),
    comment: _react2.default.createFactory(_Comment2.default),
    commented: _react2.default.createFactory(_Commented2.default),
    critical: _react2.default.createFactory(_Critical2.default),

    delete: _react2.default.createFactory(_Delete2.default),
    deleted: _react2.default.createFactory(_Deleted2.default),
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
    inspector: _react2.default.createFactory(_Inspector2.default),

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
    Inspector: _react2.default.createFactory(_Inspector4.default)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pY29ucy9pY29uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiY29tcG9uZW50cyIsImluZGljYXRvciIsImFsZXJ0IiwiUmVhY3QiLCJjcmVhdGVGYWN0b3J5IiwiSW5kaWNhdG9yQWxlcnQiLCJhcnJvd0xlZnQiLCJJbmRpY2F0b3JBcnJvd0xlZnQiLCJhdHRhY2htZW50IiwiSW5kaWNhdG9yQXR0YWNobWVudCIsImJ1cmdlciIsIkluZGljYXRvckJ1cmdlciIsImJ1cmdlckNsb3NlIiwiSW5kaWNhdG9yQnVyZ2VyQ2xvc2UiLCJjYWxlbmRhciIsIkluZGljYXRvckNhbGVuZGFyIiwiQ2FyZXRSaWdodCIsIkluZGljYXRvckNhcmV0UmlnaHQiLCJDYXJldExlZnQiLCJJbmRpY2F0b3JDYXJldExlZnQiLCJDYXJldERvdWJsZVJpZ2h0IiwiSW5kaWNhdG9yQ2FyZXREb3VibGVSaWdodCIsIkNhcmV0RG91YmxlTGVmdCIsIkluZGljYXRvckNhcmV0RG91YmxlTGVmdCIsImNsb2NrIiwiSW5kaWNhdG9yQ2xvY2siLCJjbG9zZSIsIkluZGljYXRvckNsb3NlIiwiY29tbWVudCIsIkluZGljYXRvckNvbW1lbnQiLCJjb21tZW50ZWQiLCJJbmRpY2F0b3JDb21tZW50ZWQiLCJjcml0aWNhbCIsIkluZGljYXRvckNyaXRpY2FsIiwiZGVsZXRlIiwiSW5kaWNhdG9yRGVsZXRlIiwiZGVsZXRlZCIsIkluZGljYXRvckRlbGV0ZWQiLCJkcmFnZ2luZ0Fycm93cyIsIkluZGljYXRvckRyYWdnaW5nQXJyb3dzIiwiZWRpdCIsIkluZGljYXRvckVkaXQiLCJlbWFpbCIsIkluZGljYXRvckVtYWlsIiwiZXJyb3IiLCJJbmRpY2F0b3JFcnJvciIsImV4Y2xhbWF0aW9uIiwiSW5kaWNhdG9yRXhjbGFtYXRpb24iLCJleHBvcnQiLCJJbmRpY2F0b3JFeHBvcnQiLCJmaWx0ZXJpbmciLCJJbmRpY2F0b3JGaWx0ZXJpbmciLCJmbGFnZ2VkIiwiSW5kaWNhdG9yRmxhZ2dlZCIsImZvbGRlciIsIkluZGljYXRvckZvbGRlciIsImhlbHAiLCJJbmRpY2F0b3JIZWxwIiwiaW5mbyIsIkluZGljYXRvckluZm8iLCJpbnNwZWN0ZWQiLCJJbmRpY2F0b3JJbnNwZWN0ZWQiLCJpbnNwZWN0ZWRBbmRBcHByb3ZlZCIsIkluZGljYXRvckluc3BlY3RlZEFuZEFwcHJvdmVkIiwiaW5zcGVjdG9yIiwiSW5kaWNhdG9ySW5zcGVjdG9yIiwibG9nb3V0IiwiSW5kaWNhdG9yTG9nb3V0IiwibWF0Y2hlZCIsIkluZGljYXRvck1hdGNoZWQiLCJtaW51cyIsIkluZGljYXRvck1pbnVzIiwibW9yZSIsIkluZGljYXRvck1vcmUiLCJvayIsIkluZGljYXRvck9rIiwicGlubmVkIiwiSW5kaWNhdG9yUGlubmVkIiwicGx1cyIsIkluZGljYXRvclBsdXMiLCJwcmVzZW50YXRpb24iLCJJbmRpY2F0b3JQcmVzZW50YXRpb24iLCJwcmludCIsIkluZGljYXRvclByaW50IiwicmVqZWN0ZWQiLCJJbmRpY2F0b3JSZWplY3RlZCIsInJlbW92ZSIsIkluZGljYXRvclJlbW92ZSIsInJlbW92ZUZpbHRlciIsIlJlbW92ZUZpbHRlciIsInNhdmUiLCJJbmRpY2F0b3JTYXZlIiwic2VhcmNoIiwiSW5kaWNhdG9yU2VhcmNoIiwic2VhcmNoV2l0aENpcmNsZSIsIkluZGljYXRvclNlYXJjaFdpdGhDaXJjbGUiLCJzZXR0aW5ncyIsIkluZGljYXRvclNldHRpbmdzIiwic29ydEFzYyIsIkluZGljYXRvclNvcnRBc2MiLCJzb3J0RGVzYyIsIkluZGljYXRvclNvcnREZXNjIiwiaW5DbGFyaWZpY2F0aW9uIiwiSW5kaWNhdG9ySW5DbGFyaWZpY2F0aW9uIiwibG9ja2VkIiwiSW5kaWNhdG9yTG9ja2VkIiwidW5tYXRjaGVkIiwiSW5kaWNhdG9yVW5tYXRjaGVkIiwidXNlciIsIkluZGljYXRvclN0YXR1c1VzZXIiLCJ3YXJuaW5nIiwiSW5kaWNhdG9yV2FybmluZyIsImV4Y2VlZHNMaW1pdCIsIkluZGljYXRvckV4Y2VlZHNMaW1pdCIsImNvbmZpcm1lZFN1YiIsIkluZGljYXRvckNvbmZpcm1lZFN1YiIsInBhcnRpYWxseVN1YiIsIkluZGljYXRvclBhcnRpYWxseVN1YiIsImVycm9yU3ViIiwiSW5kaWNhdG9yRXJyb3JTdWIiLCJwcm9kdWN0IiwiSW52b2ljZXMiLCJQcm9kdWN0SW52b2ljZXMiLCJQcm9kdWN0VXNlciIsIkFjY291bnRzIiwiUHJvZHVjdEFjY291bnRzIiwiQXJjaGl2ZSIsIlByb2R1Y3RBcmNoaXZlIiwiRGFzaGJvYXJkIiwiUHJvZHVjdERhc2hib2FyZCIsIkluZm8iLCJQcm9kdWN0SW5mbyIsIkxpcXVpZGl0eSIsIlByb2R1Y3RMaXF1aWRpdHkiLCJOZXR0aW5nIiwiUHJvZHVjdE5ldHRpbmciLCJQYXltZW50cyIsIlByb2R1Y3RQYXltZW50cyIsIlNldHRpbmdzIiwiUHJvZHVjdFNldHRpbmdzIiwiVG9vbHMiLCJQcm9kdWN0VG9vbHMiLCJVc2VycyIsIlByb2R1Y3RVc2VycyIsIkV4YW1wbGVzIiwiTWF0Y2hpbmciLCJQcm9kdWN0TWF0Y2hpbmciLCJJbnNwZWN0b3IiLCJQcm9kdWN0SW5zcGVjdG9yIiwiaW52b2ljZXMiLCJnZW5lcmljIiwiSW52b2ljZXNHZW5lcmljIiwicGRmIiwiSW52b2ljZXNQZGYiLCJwbmciLCJJbnZvaWNlc1BuZyIsInBwdCIsIkludm9pY2VzUHB0Iiwid29yZCIsIkludm9pY2VzV29yZCIsInhscyIsIkludm9pY2VzWGxzIiwibG9nbyIsIk9DU2hvcnQiLCJPQ0xvbmciLCJJY29uIiwicHJvcHMiLCJ0eXBlIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEhlaWdodCIsIm5hbWUiLCJyZW5kZXIiLCJ3aWR0aCIsImhlaWdodCIsIm90aGVyUHJvcHMiLCJjb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZm9jdXNhYmxlIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FB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MkIsVUFBL0IsRUFBMkM7QUFDekMsYUFBTzRHLFVBQVVDLFVBQVYsQ0FBUDtBQUNEO0FBQ0QsV0FBTyxpREFBTSxXQUFVLE1BQWhCLElBQTJCLEtBQUtWLEtBQWhDLEVBQVA7QUFDRCxHOzs7RUFqRCtCbkssZ0JBQU0rSyxTOztrQkFBbkJiLEk7OztBQW9EckJBLEtBQUtjLFlBQUwsR0FBb0I7QUFDbEJQLFNBQU8sSUFEVztBQUVsQkMsVUFBUTtBQUZVLENBQXBCIiwiZmlsZSI6Imljb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWR1cGxpY2F0ZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSW5kaWNhdG9yQWxlcnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9BbGVydC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckFycm93TGVmdCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0Fycm93TGVmdC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckF0dGFjaG1lbnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9BdHRhY2htZW50LnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JCdXJnZXIgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9CdXJnZXIuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JCdXJnZXJDbG9zZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0J1cmdlci1jbG9zZS5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yQ2FsZW5kYXIgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9DYWxlbmRhci5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNhcmV0TGVmdCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0NhcmV0TGVmdC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNhcmV0UmlnaHQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9DYXJldFJpZ2h0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ2FyZXREb3VibGVMZWZ0IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ2FyZXREb3VibGVMZWZ0LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ2FyZXREb3VibGVSaWdodCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0NhcmV0RG91YmxlUmlnaHQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JDbG9jayBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0Nsb2NrLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ2xvc2UgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9DbG9zZS5zdmcnO1xuaW1wb3J0IEluZGljYXRvckNvbW1lbnQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9Db21tZW50LnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ29tbWVudGVkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ29tbWVudGVkLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yQ3JpdGljYWwgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9Dcml0aWNhbC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yRGVsZXRlIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRGVsZXRlLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRGVsZXRlZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0RlbGV0ZWQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JEcmFnZ2luZ0Fycm93cyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0RyYWdnaW5nQXJyb3dzLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JFZGl0IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRWRpdC5zdmcnO1xuaW1wb3J0IEluZGljYXRvckVtYWlsIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRW1haWwuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JFcnJvciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0Vycm9yLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRXhjbGFtYXRpb24gZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FeGNsYW1hdGlvbi5zdmcnO1xuaW1wb3J0IEluZGljYXRvckV4cG9ydCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0V4cG9ydC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yRmlsdGVyaW5nIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvRmlsdGVyaW5nLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRmxhZ2dlZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0ZsYWdnZWQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JGb2xkZXIgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9Gb2xkZXIuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvckhlbHAgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9IZWxwLnN2Zyc7XG5cblxuaW1wb3J0IEluZGljYXRvckluZm8gZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9JbmZvLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JJbnNwZWN0ZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9JbnNwZWN0ZWQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JJbnNwZWN0ZWRBbmRBcHByb3ZlZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL0luc3BlY3RlZEFuZEFwcHJvdmVkLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9ySW5zcGVjdG9yIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvSW5zcGVjdG9yLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JMb2dvdXQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9Mb2dvdXQuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvck1hdGNoZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9NYXRjaGVkLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yTWludXMgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9NaW51cy5zdmcnO1xuaW1wb3J0IEluZGljYXRvck1vcmUgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9Nb3JlLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JPayBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL09rLnN2Zyc7XG5cbmltcG9ydCBJbmRpY2F0b3JQaW5uZWQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9QaW5uZWQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JQbHVzIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvUGx1cy5zdmcnO1xuaW1wb3J0IEluZGljYXRvclByZXNlbnRhdGlvbiBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1ByZXNlbnRhdGlvbi5zdmcnO1xuaW1wb3J0IEluZGljYXRvclByaW50IGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvUHJpbnQuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvclJlamVjdGVkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvUmVqZWN0ZWQuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JSZW1vdmUgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9SZW1vdmUuc3ZnJztcbmltcG9ydCBSZW1vdmVGaWx0ZXIgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9SZW1vdmVGaWx0ZXIuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvclNhdmUgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9TYXZlLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yU2VhcmNoIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU2VhcmNoLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yU2VhcmNoV2l0aENpcmNsZSBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1NlYXJjaFdpdGhDaXJjbGUuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTZXR0aW5ncyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1NldHRpbmdzLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yU29ydEFzYyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1NvcnRBc2Muc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JTb3J0RGVzYyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1NvcnREZXNjLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9ySW5DbGFyaWZpY2F0aW9uIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU3RhdHVzSW5jbGFyaWZpY2F0aW9uLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yTG9ja2VkIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvU3RhdHVzTG9ja2VkLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yU3RhdHVzVXNlciBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1N0YXR1c1VzZXIuc3ZnJztcblxuaW1wb3J0IEluZGljYXRvclVubWF0Y2hlZCBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1VubWF0Y2hlZC5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yQ29uZmlybWVkU3ViIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvQ29uZmlybWVkU3ViLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yUGFydGlhbGx5U3ViIGZyb21cbiAgJy4vaW1hZ2VzL2luZGljYXRvcnMvUGFydGlhbGx5U3ViLnN2Zyc7XG5pbXBvcnQgSW5kaWNhdG9yRXJyb3JTdWIgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FcnJvclN1Yi5zdmcnO1xuXG5pbXBvcnQgSW5kaWNhdG9yV2FybmluZyBmcm9tXG4gICcuL2ltYWdlcy9pbmRpY2F0b3JzL1dhcm5pbmcuc3ZnJztcbmltcG9ydCBJbmRpY2F0b3JFeGNlZWRzTGltaXQgZnJvbVxuICAnLi9pbWFnZXMvaW5kaWNhdG9ycy9FeGNlZWRzTGltaXQuc3ZnJztcblxuaW1wb3J0IFByb2R1Y3RJbnZvaWNlcyBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9JbnZvaWNlcy5zdmcnO1xuaW1wb3J0IFByb2R1Y3RVc2VyIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1VzZXIuc3ZnJztcbmltcG9ydCBQcm9kdWN0QWNjb3VudHMgZnJvbVxuICAnLi9pbWFnZXMvcHJvZHVjdHMvQWNjb3VudHMuc3ZnJztcbmltcG9ydCBQcm9kdWN0QXJjaGl2ZSBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9BcmNoaXZlLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdERhc2hib2FyZCBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9EYXNoYm9hcmQuc3ZnJztcbmltcG9ydCBQcm9kdWN0SW5mbyBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9JbmZvLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdExpcXVpZGl0eSBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9MaXF1aWRpdHkuc3ZnJztcbmltcG9ydCBQcm9kdWN0TmV0dGluZyBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9OZXR0aW5nLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFBheW1lbnRzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1BheW1lbnRzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFNldHRpbmdzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1NldHRpbmdzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFRvb2xzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1Rvb2xzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdFVzZXJzIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL1VzZXJzLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdE1hdGNoaW5nIGZyb21cbiAgJy4vaW1hZ2VzL3Byb2R1Y3RzL01hdGNoaW5nLnN2Zyc7XG5pbXBvcnQgUHJvZHVjdEluc3BlY3RvciBmcm9tXG4gICcuL2ltYWdlcy9wcm9kdWN0cy9JbnNwZWN0b3Iuc3ZnJztcblxuaW1wb3J0IEludm9pY2VzR2VuZXJpYyBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC9nZW5lcmljLnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNQZGYgZnJvbVxuICAnLi9pbWFnZXMvaW52b2ljZXMvZG9jdW1lbnQvcGRmLnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNQbmcgZnJvbVxuICAnLi9pbWFnZXMvaW52b2ljZXMvZG9jdW1lbnQvcG5nLnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNQcHQgZnJvbVxuICAnLi9pbWFnZXMvaW52b2ljZXMvZG9jdW1lbnQvcHB0LnN2Zyc7XG5pbXBvcnQgSW52b2ljZXNXb3JkIGZyb21cbiAgJy4vaW1hZ2VzL2ludm9pY2VzL2RvY3VtZW50L3dvcmQuc3ZnJztcbmltcG9ydCBJbnZvaWNlc1hscyBmcm9tXG4gICcuL2ltYWdlcy9pbnZvaWNlcy9kb2N1bWVudC94bHMuc3ZnJztcblxuaW1wb3J0IE9DTG9uZyBmcm9tXG4gICcuL2ltYWdlcy9sb2dvL29jLWxvZ28uc3ZnJztcbmltcG9ydCBPQ1Nob3J0IGZyb21cbiAgJy4vaW1hZ2VzL2xvZ28vb2MtbG9nby1zaG9ydC5zdmcnO1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBpbmRpY2F0b3I6IHtcbiAgICBhbGVydDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JBbGVydCksXG4gICAgYXJyb3dMZWZ0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckFycm93TGVmdCksXG4gICAgYXR0YWNobWVudDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JBdHRhY2htZW50KSxcblxuICAgIGJ1cmdlcjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JCdXJnZXIpLFxuICAgIGJ1cmdlckNsb3NlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckJ1cmdlckNsb3NlKSxcblxuICAgIGNhbGVuZGFyOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNhbGVuZGFyKSxcbiAgICBDYXJldFJpZ2h0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNhcmV0UmlnaHQpLFxuICAgIENhcmV0TGVmdDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDYXJldExlZnQpLFxuICAgIENhcmV0RG91YmxlUmlnaHQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ2FyZXREb3VibGVSaWdodCksXG4gICAgQ2FyZXREb3VibGVMZWZ0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNhcmV0RG91YmxlTGVmdCksXG4gICAgY2xvY2s6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ2xvY2spLFxuICAgIGNsb3NlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNsb3NlKSxcbiAgICBjb21tZW50OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNvbW1lbnQpLFxuICAgIGNvbW1lbnRlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JDb21tZW50ZWQpLFxuICAgIGNyaXRpY2FsOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckNyaXRpY2FsKSxcblxuICAgIGRlbGV0ZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JEZWxldGUpLFxuICAgIGRlbGV0ZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRGVsZXRlZCksXG4gICAgZHJhZ2dpbmdBcnJvd3M6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRHJhZ2dpbmdBcnJvd3MpLFxuXG4gICAgZWRpdDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JFZGl0KSxcbiAgICBlbWFpbDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JFbWFpbCksXG4gICAgZXJyb3I6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRXJyb3IpLFxuICAgIGV4Y2xhbWF0aW9uOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckV4Y2xhbWF0aW9uKSxcbiAgICBleHBvcnQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRXhwb3J0KSxcblxuICAgIGZpbHRlcmluZzogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JGaWx0ZXJpbmcpLFxuICAgIGZsYWdnZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yRmxhZ2dlZCksXG4gICAgZm9sZGVyOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckZvbGRlciksXG5cbiAgICBoZWxwOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckhlbHApLFxuXG4gICAgaW5mbzogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JJbmZvKSxcblxuICAgIGluc3BlY3RlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JJbnNwZWN0ZWQpLFxuICAgIGluc3BlY3RlZEFuZEFwcHJvdmVkOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckluc3BlY3RlZEFuZEFwcHJvdmVkKSxcbiAgICBpbnNwZWN0b3I6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9ySW5zcGVjdG9yKSxcblxuICAgIGxvZ291dDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JMb2dvdXQpLFxuXG4gICAgbWF0Y2hlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JNYXRjaGVkKSxcbiAgICBtaW51czogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JNaW51cyksXG4gICAgbW9yZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JNb3JlKSxcblxuICAgIG9rOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvck9rKSxcblxuICAgIHBpbm5lZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JQaW5uZWQpLFxuICAgIHBsdXM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUGx1cyksXG4gICAgcHJlc2VudGF0aW9uOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclByZXNlbnRhdGlvbiksXG4gICAgcHJpbnQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUHJpbnQpLFxuXG4gICAgcmVqZWN0ZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUmVqZWN0ZWQpLFxuICAgIHJlbW92ZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JSZW1vdmUpLFxuICAgIHJlbW92ZUZpbHRlcjogUmVhY3QuY3JlYXRlRmFjdG9yeShSZW1vdmVGaWx0ZXIpLFxuXG4gICAgc2F2ZTogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JTYXZlKSxcbiAgICBzZWFyY2g6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU2VhcmNoKSxcbiAgICBzZWFyY2hXaXRoQ2lyY2xlOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNlYXJjaFdpdGhDaXJjbGUpLFxuICAgIHNldHRpbmdzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNldHRpbmdzKSxcbiAgICBzb3J0QXNjOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNvcnRBc2MpLFxuICAgIHNvcnREZXNjOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvclNvcnREZXNjKSxcbiAgICBpbkNsYXJpZmljYXRpb246IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9ySW5DbGFyaWZpY2F0aW9uKSxcbiAgICBsb2NrZWQ6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yTG9ja2VkKSxcblxuICAgIHVubWF0Y2hlZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JVbm1hdGNoZWQpLFxuICAgIHVzZXI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yU3RhdHVzVXNlciksXG5cbiAgICB3YXJuaW5nOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvcldhcm5pbmcpLFxuXG4gICAgZXhjZWVkc0xpbWl0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KEluZGljYXRvckV4Y2VlZHNMaW1pdCksXG5cbiAgICBjb25maXJtZWRTdWI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yQ29uZmlybWVkU3ViKSxcbiAgICBwYXJ0aWFsbHlTdWI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW5kaWNhdG9yUGFydGlhbGx5U3ViKSxcbiAgICBlcnJvclN1YjogUmVhY3QuY3JlYXRlRmFjdG9yeShJbmRpY2F0b3JFcnJvclN1YiksXG4gIH0sXG4gIHByb2R1Y3Q6IHtcbiAgICBJbnZvaWNlczogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0SW52b2ljZXMpLFxuICAgIHVzZXI6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdFVzZXIpLFxuICAgIEFjY291bnRzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RBY2NvdW50cyksXG4gICAgQXJjaGl2ZTogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0QXJjaGl2ZSksXG4gICAgRGFzaGJvYXJkOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3REYXNoYm9hcmQpLFxuICAgIEluZm86IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdEluZm8pLFxuICAgIExpcXVpZGl0eTogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0TGlxdWlkaXR5KSxcbiAgICBOZXR0aW5nOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3ROZXR0aW5nKSxcbiAgICBQYXltZW50czogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0UGF5bWVudHMpLFxuICAgIFNldHRpbmdzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RTZXR0aW5ncyksXG4gICAgVG9vbHM6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoUHJvZHVjdFRvb2xzKSxcbiAgICBVc2VyczogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0VXNlcnMpLFxuICAgIEV4YW1wbGVzOiBSZWFjdC5jcmVhdGVGYWN0b3J5KFByb2R1Y3RJbmZvKSxcbiAgICBNYXRjaGluZzogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0TWF0Y2hpbmcpLFxuICAgIEluc3BlY3RvcjogUmVhY3QuY3JlYXRlRmFjdG9yeShQcm9kdWN0SW5zcGVjdG9yKSxcbiAgfSxcbiAgaW52b2ljZXM6IHtcbiAgICBnZW5lcmljOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEludm9pY2VzR2VuZXJpYyksXG4gICAgcGRmOiBSZWFjdC5jcmVhdGVGYWN0b3J5KEludm9pY2VzUGRmKSxcbiAgICBwbmc6IFJlYWN0LmNyZWF0ZUZhY3RvcnkoSW52b2ljZXNQbmcpLFxuICAgIHBwdDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbnZvaWNlc1BwdCksXG4gICAgd29yZDogUmVhY3QuY3JlYXRlRmFjdG9yeShJbnZvaWNlc1dvcmQpLFxuICAgIHhsczogUmVhY3QuY3JlYXRlRmFjdG9yeShJbnZvaWNlc1hscyksXG4gIH0sXG4gIGxvZ286IHtcbiAgICBPQ1Nob3J0OiBSZWFjdC5jcmVhdGVGYWN0b3J5KE9DU2hvcnQpLFxuICAgIE9DTG9uZzogUmVhY3QuY3JlYXRlRmFjdG9yeShPQ0xvbmcpLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHN3aXRjaCAocHJvcHMudHlwZSkge1xuICAgICAgY2FzZSAncHJvZHVjdCc6IHtcbiAgICAgICAgdGhpcy5kZWZhdWx0V2lkdGggPSA0MDtcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVpZ2h0ID0gNDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnaW5kaWNhdG9yJzoge1xuICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDI1O1xuICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSAyNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdsb2dvJzoge1xuICAgICAgICBpZiAocHJvcHMubmFtZSA9PT0gJ09DTG9uZycpIHtcbiAgICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDE1MDtcbiAgICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSAzMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IDUwO1xuICAgICAgICAgIHRoaXMuZGVmYXVsdEhlaWdodCA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5kZWZhdWx0V2lkdGggPSA0MDtcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVpZ2h0ID0gNDA7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHR5cGUsXG4gICAgICBuYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICAuLi5vdGhlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c1t0eXBlXSAmJiBjb21wb25lbnRzW3R5cGVdW25hbWVdO1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7XG4gICAgICB3aWR0aDogd2lkdGggfHwgdGhpcy5kZWZhdWx0V2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCB8fCB0aGlzLmRlZmF1bHRIZWlnaHQsXG4gICAgICBmb2N1c2FibGU6ICdmYWxzZScsXG4gICAgICAuLi5vdGhlclByb3BzLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBJbmRpY2F0b3JMb2dvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjb21wb25lbnQocHJvcGVydGllcyk7XG4gICAgfVxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCIgey4uLnRoaXMucHJvcHN9IC8+O1xuICB9XG59XG5cbkljb24uZGVmYXVsdFByb3BzID0ge1xuICB3aWR0aDogbnVsbCxcbiAgaGVpZ2h0OiBudWxsLFxufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiJdfQ==