'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addWidget = addWidget;
exports.removeWidget = removeWidget;
exports.moveWidget = moveWidget;
exports.sortWidget = sortWidget;

var _immutabilityHelper = require('immutability-helper');

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Adds the specified widget to the specified position in the layout.
 */
function addWidget(layout, rowIndex, columnIndex, widgetName) {
  return (0, _immutabilityHelper2.default)(layout, {
    rows: _defineProperty({}, rowIndex, {
      columns: _defineProperty({}, columnIndex, {
        widgets: {
          $push: [{
            key: widgetName
          }]
        }
      })
    })
  });
}

/**
 * Removes the widget at a specified index.
 */
function removeWidget(layout, rowIndex, columnIndex, widgetIndex) {
  return (0, _immutabilityHelper2.default)(layout, {
    rows: _defineProperty({}, rowIndex, {
      columns: _defineProperty({}, columnIndex, {
        widgets: {
          $splice: [[widgetIndex, 1]]
        }
      })
    })
  });
}

/**
 * Moves a widget from column to column.
 */
function moveWidget(layout, initialLocation, destination, widgetName) {
  /* eslint max-len: "off" */
  var removedLayout = removeWidget(layout, initialLocation.rowIndex, initialLocation.columnIndex, initialLocation.widgetIndex);
  var movedLayout = addWidget(removedLayout, destination.rowIndex, destination.columnIndex, widgetName);
  return movedLayout;
}

/**
 * Sorts a widget in the same column.
 */
function sortWidget(layout, initialLocation, destination, widgetName) {
  return (0, _immutabilityHelper2.default)(layout, {
    rows: _defineProperty({}, initialLocation.rowIndex, {
      columns: _defineProperty({}, initialLocation.columnIndex, {
        widgets: {
          $splice: [[initialLocation.widgetIndex, 1], [destination.widgetIndex, 0, {
            key: widgetName
          }]]
        }
      })
    })
  });
}