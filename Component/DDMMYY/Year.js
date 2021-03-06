"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./../Calender.css");

var _findYearArray = require("../Logic/findYearArray");

var _findLeapYear = require("../Logic/findLeapYear");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Year = ({
  startYear,
  endYear,
  selectedYear,
  setSelectedYear
}) => {
  let yearArr = (0, _findYearArray.findYearArray)(parseInt(startYear), parseInt(endYear));
  return /*#__PURE__*/_react.default.createElement("select", {
    name: "year",
    id: "2",
    value: selectedYear,
    onChange: e => setSelectedYear(e.target.value)
  }, yearArr.map(year => {
    let days = 365;

    if ((0, _findLeapYear.isLeapYear)(year)) {
      days = 366;
    }

    return /*#__PURE__*/_react.default.createElement("option", {
      key: year,
      value: year,
      days: days
    }, year);
  }));
};

var _default = Year;
exports.default = _default;