'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDnd = require('react-dnd');

var _ItemTypes = require('./ItemTypes');

var _util = require('../util');

var _DefaultFrame = require('./DefaultFrame');

var _DefaultFrame2 = _interopRequireDefault(_DefaultFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var boxSource = {
  beginDrag: function beginDrag(props) {
    return {
      widgetName: props.widgetName,
      rowIndex: props.rowIndex,
      columnIndex: props.columnIndex,
      widgetIndex: props.widgetIndex
    };
  }
};

var cardTarget = {
  hover: function hover(props, monitor, component) {
    var dragIndex = monitor.getItem().widgetIndex;
    var hoverIndex = props.widgetIndex;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    var hoverBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();

    // Get vertical middle
    var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    var clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    var hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    var layout = props.layout,
        columnIndex = props.columnIndex,
        rowIndex = props.rowIndex;


    if (monitor.getItem().rowIndex === rowIndex && monitor.getItem().columnIndex === columnIndex) {
      var newLayout = (0, _util.sortWidget)(layout, {
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        widgetIndex: dragIndex
      }, {
        rowIndex: rowIndex,
        columnIndex: columnIndex,
        widgetIndex: hoverIndex
      }, monitor.getItem().widgetName);

      props.onMove(newLayout);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem().widgetIndex = hoverIndex; // eslint-disable-line no-param-reassign
    }
  }
};

/**
 * Frame component which surrounds each widget.
 */
var WidgetFrame = (_dec = (0, _reactDnd.DropTarget)(_ItemTypes.WIDGET, cardTarget, function (connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}), _dec2 = (0, _reactDnd.DragSource)(_ItemTypes.WIDGET, boxSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}), _dec(_class = _dec2(_class = function (_Component) {
  _inherits(WidgetFrame, _Component);

  function WidgetFrame() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WidgetFrame);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WidgetFrame.__proto__ || Object.getPrototypeOf(WidgetFrame)).call.apply(_ref, [this].concat(args))), _this), _this.edit = function () {
      var _this$props = _this.props,
          layout = _this$props.layout,
          rowIndex = _this$props.rowIndex,
          columnIndex = _this$props.columnIndex,
          widgetIndex = _this$props.widgetIndex;

      _this.props.onEdit(layout.rows[rowIndex].columns[columnIndex].widgets[widgetIndex].key);
    }, _this.remove = function () {
      var _this$props2 = _this.props,
          layout = _this$props2.layout,
          rowIndex = _this$props2.rowIndex,
          columnIndex = _this$props2.columnIndex,
          widgetIndex = _this$props2.widgetIndex;

      var newLayout = (0, _util.removeWidget)(layout, rowIndex, columnIndex, widgetIndex);
      _this.props.onRemove(newLayout, rowIndex, columnIndex, widgetIndex);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WidgetFrame, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          frameComponent = _props.frameComponent,
          children = _props.children,
          editable = _props.editable,
          title = _props.title,
          frameSettings = _props.frameSettings,
          connectDragSource = _props.connectDragSource,
          connectDropTarget = _props.connectDropTarget,
          isDragging = _props.isDragging,
          rowIndex = _props.rowIndex,
          columnIndex = _props.columnIndex,
          widgetIndex = _props.widgetIndex;


      var selected = null;

      if (frameComponent) {
        // if user provided a custom frame,  use it
        selected = (0, _react.createElement)(frameComponent, {
          children: children,
          editable: editable,
          title: title,
          settings: frameSettings,
          onRemove: this.remove,
          onEdit: this.edit,
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          widgetIndex: widgetIndex,
          isDragging: isDragging
        });
      } else {
        // else use the default frame
        selected = _react2.default.createElement(_DefaultFrame2.default, {
          title: title,
          editable: editable,
          children: children,
          onRemove: this.remove,
          onEdit: this.edit
        });
      }
      var opacity = isDragging ? 0 : 1;
      var widgetFrame = _react2.default.createElement(
        'div',
        { style: { opacity: opacity } },
        selected
      );

      return editable ? connectDragSource(connectDropTarget(widgetFrame)) : widgetFrame;
    }
  }]);

  return WidgetFrame;
}(_react.Component)) || _class) || _class);


WidgetFrame.propTypes = {
  /**
   * Childrens of the widget frame.
   */
  children: _propTypes2.default.element,

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
   * Index of the widget.
   */
  widgetIndex: _propTypes2.default.number,

  /**
   * Indicates weatehr dashboard is in ediable mode or not.
   */
  editable: _propTypes2.default.bool,

  /**
   * User provided widget frame that should be used instead of the default one.
   */
  frameComponent: _propTypes2.default.func,

  /**
   * User provided settings for be use by custom widget frame.
   */
  frameSettings: _propTypes2.default.object,

  /**
   * Name of the widget.
   */
  widgetName: _propTypes2.default.string,

  /**
   * Title of the widget.
   */
  title: _propTypes2.default.string,

  /**
   * Weather the component is being dragged.
   */
  isDragging: _propTypes2.default.bool,

  /**
   * ReactDnd's connectDragSource().
   */
  connectDragSource: _propTypes2.default.func,

  /**
  * ReactDnd's connectDropTarget().
  */
  connectDropTarget: _propTypes2.default.func,

  /**
   * Function that should be called when a widget is about to be removed.
   */
  onRemove: _propTypes2.default.func,

  /**
   * Function called when to edit a widget.
   */
  onEdit: _propTypes2.default.func
};

WidgetFrame.defaultProps = {
  frameSettings: {}
};

exports.default = WidgetFrame;