'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _ItemTypes = require('./ItemTypes');

var _AddWidget = require('./AddWidget');

var _AddWidget2 = _interopRequireDefault(_AddWidget);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var columnTarget = {
  drop: function drop(props, monitor) {
    var layout = props.layout,
        rowIndex = props.rowIndex,
        columnIndex = props.columnIndex,
        onMove = props.onMove;

    var item = monitor.getItem();
    if (item.columnIndex !== columnIndex || item.rowIndex !== rowIndex) {
      var movedLayout = (0, _util.moveWidget)(layout, {
        rowIndex: item.rowIndex,
        columnIndex: item.columnIndex,
        widgetIndex: item.widgetIndex
      }, {
        rowIndex: rowIndex,
        columnIndex: columnIndex
      }, item.widgetName);
      onMove(movedLayout);
    }
  }
};

/**
 * Colum of the dashboard grid. A column holds multiple widgets.
 */
var Column = (_dec = (0, _reactDnd.DropTarget)(_ItemTypes.WIDGET, columnTarget, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}), _dec(_class = function (_Component) {
  _inherits(Column, _Component);

  function Column() {
    _classCallCheck(this, Column);

    return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  _createClass(Column, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          layout = _props.layout,
          rowIndex = _props.rowIndex,
          columnIndex = _props.columnIndex,
          editable = _props.editable,
          children = _props.children,
          connectDropTarget = _props.connectDropTarget,
          onAdd = _props.onAdd,
          isOver = _props.isOver,
          canDrop = _props.canDrop,
          editableColumnClass = _props.editableColumnClass,
          droppableColumnClass = _props.droppableColumnClass,
          addWidgetComponentText = _props.addWidgetComponentText,
          addWidgetComponent = _props.addWidgetComponent;


      var classes = className;
      classes = editable ? className + ' ' + editableColumnClass : classes;
      var isActive = isOver && canDrop;
      classes = isActive ? classes + ' ' + droppableColumnClass : classes;

      var addWidgetComponentToUse = null;
      if (addWidgetComponent) {
        // eslint max-len=off
        addWidgetComponentToUse = (0, _react.createElement)(addWidgetComponent, { text: addWidgetComponentText, onClick: function onClick() {
            onAdd(layout, rowIndex, columnIndex);
          } }); // eslint-disable-line
      } else {
        addWidgetComponentToUse = _react2.default.createElement(_AddWidget2.default, { text: addWidgetComponentText, onClick: function onClick() {
            onAdd(layout, rowIndex, columnIndex);
          } }); // eslint-disable-line
      }

      return connectDropTarget(_react2.default.createElement(
        'div',
        { className: classes },
        editable && addWidgetComponentToUse,
        children
      ));
    }
  }]);

  return Column;
}(_react.Component)) || _class);


Column.propTypes = {
  /**
   * Children of the column
   */
  children: _propTypes2.default.node,

  /**
   * CSS class that should be used with the column.
   */
  className: _propTypes2.default.string,

  /**
   * Function that should be called when user tries to add a widget
   * to the column.
   */
  onAdd: _propTypes2.default.func,

  /**
   * Layout of the dashboard.
   */
  layout: _propTypes2.default.object,

  /**
   * Index of the row that this column resides.
   */
  rowIndex: _propTypes2.default.number,

  /**
   * Index of this column.
   */
  columnIndex: _propTypes2.default.number,

  /**
   * Indicates weather dashboard is in editable state
   */
  editable: _propTypes2.default.bool,

  /**
   * Indicates weather a widget is being draged over.
   */
  isOver: _propTypes2.default.bool,

  /**
   * Indicated a widget can be dropped.
   */
  canDrop: _propTypes2.default.bool,

  /**
   * Class to be used for columns in editable mode.
   */
  editableColumnClass: _propTypes2.default.string,

  /**
   * CSS class to be used for columns when a widget is droppable.
   */
  droppableColumnClass: _propTypes2.default.string,

  /**
   * Text that should be given to the AddWidget component.
   */
  addWidgetComponentText: _propTypes2.default.string,

  /**
   * ReactDnd's connectDropTarget.
   */
  connectDropTarget: _propTypes2.default.func,

  /**
   * Customized AddWidget component.
   */
  addWidgetComponent: _propTypes2.default.func
};

Column.defaultProps = {
  editableColumnClass: 'editable-column',
  droppableColumnClass: 'droppable-column'
};

exports.default = Column;