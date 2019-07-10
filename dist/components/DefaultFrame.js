'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default frame that will be used with the widgets.
 */
var DefaultFrame = function DefaultFrame(_ref) {
  var children = _ref.children,
      onRemove = _ref.onRemove,
      onEdit = _ref.onEdit,
      editable = _ref.editable,
      title = _ref.title;
  return _react2.default.createElement(
    'div',
    { className: 'defaultWidgetFrame' },
    _react2.default.createElement(
      'div',
      { className: 'defaultWidgetFrameHeader' },
      _react2.default.createElement(
        'span',
        { className: 'title' },
        title
      ),
      editable && _react2.default.createElement(
        'a',
        { className: 'edit', onClick: function onClick() {
            return onEdit();
          } },
        'Edit'
      ),
      editable && _react2.default.createElement(
        'a',
        { className: 'remove', onClick: function onClick() {
            return onRemove();
          } },
        'Remove'
      )
    ),
    children
  );
};

DefaultFrame.propTypes = {
  /**
   * Indicates weather the dashboard is in editable mode.
   */
  editable: _propTypes2.default.bool,

  /**
   * Children of the frame.
   */
  children: _propTypes2.default.node,

  /**
   * Function to call when the widget is removed.
   */
  onRemove: _propTypes2.default.func,

  /**
  * Title of the widget
  */
  title: _propTypes2.default.string
};

exports.default = DefaultFrame;