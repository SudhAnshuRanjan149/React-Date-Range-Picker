"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShortDate = void 0;

const getShortDate = date => {
  if (date !== "") {
    var d = new Date(date);
    const month = d.toLocaleString("default", {
      month: "short"
    });
    d = parseInt(d.getDate()) + " " + month + " " + parseInt(d.getFullYear());
    return d;
  }

  return "";
};

exports.getShortDate = getShortDate;
