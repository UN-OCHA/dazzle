'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _Widgets = require('./Widgets');

var _Widgets2 = _interopRequireDefault(_Widgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a set of columns that belongs to a row.
 */
function Row(props) {
  var rowClass = props.rowClass,
      columns = props.columns,
      widgets = props.widgets,
      onRemove = props.onRemove,
      layout = props.layout,
      rowIndex = props.rowIndex,
      editable = props.editable,
      frameComponent = props.frameComponent,
      editableColumnClass = props.editableColumnClass,
      droppableColumnClass = props.droppableColumnClass,
      addWidgetComponentText = props.addWidgetComponentText,
      addWidgetComponent = props.addWidgetComponent,
      onAdd = props.onAdd,
      onMove = props.onMove,
      onEdit = props.onEdit;


  var items = columns.map(function (column, index) {
    // eslint-disable-line arrow-body-style
    return _react2.default.createElement(
      _Column2.default,
      {
        key: index,
        className: column.className,
        onAdd: onAdd,
        layout: layout,
        rowIndex: rowIndex,
        columnIndex: index,
        editable: editable,
        onMove: onMove,
        editableColumnClass: editableColumnClass,
        droppableColumnClass: droppableColumnClass,
        addWidgetComponent: addWidgetComponent,
        addWidgetComponentText: addWidgetComponentText
      },
      _react2.default.createElement(_Widgets2.default, {
        key: index,
        widgets: column.widgets,
        containerClassName: column.containerClassName,
        widgetTypes: widgets,
        onRemove: onRemove,
        layout: layout,
        rowIndex: rowIndex,
        columnIndex: index,
        editable: editable,
        frameComponent: frameComponent,
        onMove: onMove,
        onEdit: onEdit
      })
    );
  });

  return _react2.default.createElement(
    'div',
    { className: rowClass },
    items
  );
}

Row.propTypes = {
  /**
   * CSS class that should be used to represent a row.
   */
  rowClass: _propTypes2.default.string,

  /**
   * Columns of the layout.
   */
  columns: _propTypes2.default.array,

  /**
   * Widgets that should be used in the dashboard.
   */
  widgets: _propTypes2.default.object,

  /**
   * Layout of the dashboard.
   */
  layout: _propTypes2.default.object,

  /**
   * Index of the row where this column is in.
   */
  rowIndex: _propTypes2.default.number,

  /**
   * Indicates weather the dashboard is in editable mode or not.
   */
  editable: _propTypes2.default.bool,

  /**
   * Custom frame that should be used with the widget.
   */
  frameComponent: _propTypes2.default.func,

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass: _propTypes2.default.string,

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass: _propTypes2.default.string,

  /**
   * Custom AddWidget component.
   */
  addWidgetComponent: _propTypes2.default.func,

  /**
   * Text that should be displyed in the AddWidget component.
   */
  addWidgetComponentText: _propTypes2.default.string,

  /**
   * Method that should be called when a component is added.
   */
  onAdd: _propTypes2.default.func,

  /**
   * Method that should be called when a component is removed.
   */
  onRemove: _propTypes2.default.func,

  /**
   * Method that should be called when a widget is moved.
   */
  onMove: _propTypes2.default.func,
  onEdit: _propTypes2.default.func
};

Row.defaultProps = {
  /**
   * Most CSS grid systems uses 'row' as the class name. Or not ?
   */
  rowClass: 'row'
};

exports.default = Row;