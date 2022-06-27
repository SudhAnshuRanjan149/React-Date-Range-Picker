"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./../Calender.css");

var _removeClassFromMultipleDiv = require("../Logic/removeClassFromMultipleDiv");

var _addClassToMultipleDivs = require("../Logic/addClassToMultipleDivs");

var _addClassFromStartToEnd = require("../Logic/addClassFromStartToEnd");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DateBody = ({
  date,
  clas,
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
  selectedMonth,
  selectedYear,
  today
}) => {
  let cl = `date ${clas}`;
  const [startdate, setStartdate] = (0, _react.useState)("");
  const [enddate, setEnddate] = (0, _react.useState)("");
  const [dateRange, setDateRange] = (0, _react.useState)({
    startdate: "",
    enddate: ""
  });
  const [startPoint, setStartPoint] = (0, _react.useState)("");
  const [endPoint, setEndPoint] = (0, _react.useState)("");

  if (today.date == date && today.month == selectedMonth && today.year == selectedYear) {
    cl += " today";
  }

  let d = new Date(`${selectedYear}-${selectedMonth}-${date}`);

  const handleClick = e => {
    let value = e.target.getAttribute("value");
    let d = new Date(value);

    if (selectedStartDate === "" && selectedEndDate === "") {
      setSelectedStartDate(d);
      setSelectedEndDate("");
      (0, _removeClassFromMultipleDiv.removeClassFromMultipleDiv)("startdate");
      (0, _removeClassFromMultipleDiv.removeClassFromMultipleDiv)("enddate");
      (0, _removeClassFromMultipleDiv.removeClassFromMultipleDiv)("tobeselected");
      e.target.classList.add("startdate");
      setStartPoint(d);
      setEndPoint("");
      (0, _addClassToMultipleDivs.addClassToMultipleDivs)("date", "tobeselected");
    } else if (selectedStartDate !== "" && selectedEndDate === "") {
      setSelectedEndDate(d);
      e.target.classList.add("enddate");
      setEndPoint(d);
    } else if (selectedStartDate !== "" && selectedEndDate !== "") {
      setSelectedStartDate(d);
      setSelectedEndDate("");
      (0, _removeClassFromMultipleDiv.removeClassFromMultipleDiv)("startdate");
      (0, _removeClassFromMultipleDiv.removeClassFromMultipleDiv)("enddate");
      setStartPoint(d);
      setEndPoint("");
      e.target.classList.add("startdate");
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: e => handleClick(e),
    value: d,
    key: d,
    className: cl
  }, date);
};

var _default = DateBody;
exports.default = _default;
