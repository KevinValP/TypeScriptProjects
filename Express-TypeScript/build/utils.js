"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
// Comment Validation
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment:');
    }
    return commentFromRequest;
};
const isString = (string) => {
    return typeof string === 'string';
};
// Date Validation
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date:');
    }
    return dateFromRequest;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
// Weather Validation
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || (!isWeather(weatherFromRequest))) {
        throw new Error('Incorrect or missing weather:');
    }
    return weatherFromRequest;
};
const isWeather = (weather) => {
    return Object.values(types_1.Weather).includes(weather);
};
// Visibility Validation
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility:');
    }
    return visibilityFromRequest;
};
const isVisibility = (visibility) => {
    return Object.values(types_1.Visibility).includes(visibility);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
        // todo
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
