"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMonthDistanceFromStart = void 0;

const GetMonthDistanceFromStart = (startYear, currentYear, currentMonth) => {
  return (parseInt(currentYear) - parseInt(startYear)) * 12 + parseInt(currentMonth);
};

exports.GetMonthDistanceFromStart = GetMonthDistanceFromStart;
