'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders the row, column layout based on the layout provided to the dashboard.
 */
var LayoutRenderer = function LayoutRenderer(props) {
  var layout = props.layout,
      widgets = props.widgets,
      onRemove = props.onRemove,
      editable = props.editable,
      onAdd = props.onAdd,
      frameComponent = props.frameComponent,
      rowClass = props.rowClass,
      onMove = props.onMove,
      onEdit = props.onEdit,
      editableColumnClass = props.editableColumnClass,
      droppableColumnClass = props.droppableColumnClass,
      addWidgetComponentText = props.addWidgetComponentText,
      addWidgetComponent = props.addWidgetComponent;


  var rows = layout.rows.map(function (row, rowIndex) {
    // eslint-disable-line arrow-body-style
    return _react2.default.createElement(_Row2.default, {
      key: rowIndex,
      rowClass: rowClass,
      columns: row.columns,
      widgets: widgets,
      onRemove: onRemove,
      layout: layout,
      rowIndex: rowIndex,
      editable: editable,
      onAdd: onAdd,
      onMove: onMove,
      onEdit: onEdit,
      frameComponent: frameComponent,
      editableColumnClass: editableColumnClass,
      droppableColumnClass: droppableColumnClass,
      addWidgetComponentText: addWidgetComponentText,
      addWidgetComponent: addWidgetComponent
    });
  });

  return _react2.default.createElement(
    'div',
    null,
    rows
  );
};

LayoutRenderer.propTypes = {
  /**
   * Layout of the dashboard.
   */
  layout: _propTypes2.default.object,

  /**
   * Widgets that the dashboard supports.
   */
  widgets: _propTypes2.default.object,

  /**
   * Indicates weather this dashboard is in editable mode.
   */
  editable: _propTypes2.default.bool,

  /**
   * Function that will be called when user removed a widget.
   */
  onRemove: _propTypes2.default.func,

  /**
   * Function that will be called user tries to add a widget.
   */
  onAdd: _propTypes2.default.func,

  /**
   * Frame that should be used as the outer cotnainer of the widget.
   */
  frameComponent: _propTypes2.default.func,

  /**
   * Class name that should be provided to the row component.
   */
  rowClass: _propTypes2.default.string,

  /**
   * Function to be called when a widget is moved by the user.
   */
  onMove: _propTypes2.default.func,

  onEdit: _propTypes2.default.func,

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass: _propTypes2.default.string,

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass: _propTypes2.default.string,

  /**
   * Customized AddWidget component.
   */
  addWidgetComponent: _propTypes2.default.func,

  /**
   * Text that should be displayed in the `AddWidget` component.
   */
  addWidgetComponentText: _propTypes2.default.string
};

LayoutRenderer.defaultProps = {
  /**
   * Default layout.
   */
  layout: {
    rows: []
  }
};

exports.default = LayoutRenderer;