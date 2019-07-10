'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardWithoutDndContext = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _LayoutRenderer = require('./LayoutRenderer');

var _LayoutRenderer2 = _interopRequireDefault(_LayoutRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Main dashboard component. This is where all of this starts.
 */
/* eslint react/prefer-stateless-function: "off" */
var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_LayoutRenderer2.default, this.props)
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

Dashboard.propTypes = {
  /**
   * The layout of the dashboard.
   */
  layout: _propTypes2.default.object,

  /**
   * List of widgets that are avilable in the dashboard.
   */
  widgets: _propTypes2.default.object,

  /**
   * Indicates weather the dashoard is in editable state or not.
   */
  editable: _propTypes2.default.bool,

  /**
   * CSS class name that should be provided to the row. Default is 'row'.
   */
  rowClass: _propTypes2.default.string,

  /**
   * Customized widget frame. The dashboard supports a default frame. But if
   * it doesn't suit your needs or the look and feel is not what you wanted, you
   * could create your own widget frame and pass it through here. Ever widget Will
   * use this as the outer container which displays controls like 'remove' button
   * on edit mode.
   */
  frameComponent: _propTypes2.default.func,

  /**
   * A custom component for the `add widget` button.
   */
  addWidgetComponent: _propTypes2.default.func,

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass: _propTypes2.default.string,

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass: _propTypes2.default.string,

  /**
   * Text that should be displayed in the `AddWidget` component.
   */
  addWidgetComponentText: _propTypes2.default.string,

  /**
   * Will be called when a widget removed by the user from the dashboard.
   * Should be handled if the dashbord supports edit functionality.
   * provides the updated layout object. This layout object  with the removed widget
   * should be given back to the dashboard through the layout prop to re-render the dashboard.
   */
  onRemove: _propTypes2.default.func,

  /**
   * Will be called when user tries to add a widget into a column.
   */
  onAdd: _propTypes2.default.func,

  /**
   * Function to be called when a widget is moved by the user.
   */
  onMove: _propTypes2.default.func,
  /**
   * Function to be called when a widget is edited.
   */
  onEdit: _propTypes2.default.func
};

exports.DashboardWithoutDndContext = Dashboard;
exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(Dashboard);