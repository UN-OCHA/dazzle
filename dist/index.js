'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dashboard = require('./components/Dashboard');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Dashboard).default;
  }
});
Object.defineProperty(exports, 'DashboardWithoutDndContext', {
  enumerable: true,
  get: function get() {
    return _Dashboard.DashboardWithoutDndContext;
  }
});

var _util = require('./util');

Object.defineProperty(exports, 'addWidget', {
  enumerable: true,
  get: function get() {
    return _util.addWidget;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }