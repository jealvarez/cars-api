'use strict';

const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars-controller.js');

router.get('/', carsController.findAllCars);
router.get('/:code', carsController.findCarByCode);
router.post('/', carsController.createCar);
router.delete('/:code', carsController.deleteCar);
router.patch('/:code', carsController.updateCar);
router.put('/:code', carsController.updateCar);

module.exports = router;