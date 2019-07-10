'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WidgetFrame = require('./WidgetFrame');

var _WidgetFrame2 = _interopRequireDefault(_WidgetFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component that renders the widget which belongs to a column.
 */
/* eslint max-len: "off" */
var Widgets = function Widgets(_ref) {
  var widgets = _ref.widgets,
      widgetTypes = _ref.widgetTypes,
      onRemove = _ref.onRemove,
      layout = _ref.layout,
      columnIndex = _ref.columnIndex,
      rowIndex = _ref.rowIndex,
      editable = _ref.editable,
      frameComponent = _ref.frameComponent,
      onMove = _ref.onMove,
      containerClassName = _ref.containerClassName,
      onEdit = _ref.onEdit;

  var createdWidgets = widgets.map(function (widget, index) {
    // eslint-disable-line arrow-body-style
    return _react2.default.createElement(
      _WidgetFrame2.default,
      {
        key: index,
        widgetName: widget.key,
        title: widgetTypes[widget.key].title,
        onRemove: onRemove,
        layout: layout,
        columnIndex: columnIndex,
        rowIndex: rowIndex,
        widgetIndex: index,
        editable: editable,
        frameComponent: frameComponent,
        frameSettings: widgetTypes[widget.key].frameSettings,
        onMove: onMove,
        onEdit: onEdit
      },
      (0, _react.createElement)(widgetTypes[widget.key].type, widgetTypes[widget.key].props)
    );
  });
  return _react2.default.createElement(
    'div',
    { className: containerClassName },
    createdWidgets
  );
};

Widgets.propTypes = {
  /**
   * CSS class name that should be provided to the widgets container.
   */
  containerClassName: _propTypes2.default.string,
  /**
   * Widgets that should be rendered.
   */
  widgets: _propTypes2.default.array,

  /**
   * Widgets that are available in the dashboard.
   */
  widgetTypes: _propTypes2.default.object,

  /**
   * Function that should be called when a widget is about to be removed.
   */
  onRemove: _propTypes2.default.func,

  /**
   * Layout of the dahsboard.
   */
  layout: _propTypes2.default.object,

  /**
   * Index of the column these widgets should be placed.
   */
  columnIndex: _propTypes2.default.number,

  /**
   * Index of the row these widgets should be placed.
   */
  rowIndex: _propTypes2.default.number,

  /**
   * Indicates weatehr dashboard is in ediable mode or not.
   */
  editable: _propTypes2.default.bool,

  /**
   * User provided widget frame that should be used instead of the default one.
   */
  frameComponent: _propTypes2.default.func,

  /**
   * Method to call when a widget is moved.
   */
  onMove: _propTypes2.default.func,
  onEdit: _propTypes2.default.func
};

exports.default = Widgets;