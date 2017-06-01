'use strict';

const express = require('express');
const carService = require('../services/car-service.js');

exports.findAllCars = function (request, response) {
  carService.findAll().then((items) => {
    response.send(items);
  });
};

exports.findCarByCode = function (request, response) {
  let code = request.params.code;
  carService.findByCode(code).then((item) => {
    response.send(item);
  });
};

exports.createCar = function (request, response) {
  let car = request.body;
  carService.create(car).then((item) => {
    response.send(item);
  });
};

exports.deleteCar = function (request, response) {
  let code = request.params.code;
  carService.delete(code);
  response.sendStatus(204);
};

exports.updateCar = function (request, response) {
  let code = request.params.code;
  let car = request.body;
  let method = request.method;
  carService.update(code, car, method).then((item) => {
    response.send(item);
  });
};
