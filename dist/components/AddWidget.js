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
 * Default AddWidget component.
 * @param  {[type]} {text    [description]
 * @param  {[type]} onClick} [description]
 * @return {[type]}          [description]
 */
var AddWidget = function AddWidget(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    { className: 'add-widget-button', onClick: onClick },
    _react2.default.createElement(
      'a',
      { className: 'add-widget-link' },
      text
    )
  );
};

AddWidget.propTypes = {
  /**
   * Should be called when 'add' is clicked
   */
  onClick: _propTypes2.default.func,

  /**
   * Text that should be displyed in the component
   */
  text: _propTypes2.default.string
};

AddWidget.defaultProps = {
  text: 'Add Widget'
};

exports.default = AddWidget;