'use strict'

const carRepository = require('../repositories/car-repository.js');

exports.findAll = () => {
  return carRepository.findAll();
};

exports.findByCode = (code) => {
  return carRepository.findByCode(code);
}

exports.create = (car) => {
  return carRepository.create(car);
};

exports.delete = (code) => {
  carRepository.delete(code);
};

exports.update = (code, car, method) => {
  return carRepository.update(code, car, method);
};
