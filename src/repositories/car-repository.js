'use strict'

const database = require('../configurations/mongo-configuration.js');

exports.findAll = () => {
  const collection = database.get().collection('cars');
  return new Promise((resolve, reject) => {
    collection.find({}).toArray((error, items) => {
      if (error) reject(error);
      resolve(items);
    });
  });
};

exports.findByCode = (code) => {
  const collection = database.get().collection('cars');
  return new Promise((resolve, reject) => {
    collection.findOne({ code: code }, (error, item) => {
      if (error) reject(error);
      resolve(item);
    });
  });
};

exports.create = (car) => {
  const collection = database.get().collection('cars');
  return new Promise((resolve, reject) => {
    collection.insertOne(car, (error, result) => {
      if (error) reject(error);
      resolve(car);
    });
  });
};

exports.delete = (code) => {
  const collection = database.get().collection('cars');
  collection.findOneAndDelete({ code: code });
};

exports.update = (code, car, method) => {
  const collection = database.get().collection('cars');
  if (method === 'PUT') {
    return put(collection, code, car);
  } else if (method === 'PATCH') {
    return patch(collection, code, car);
  }
  return patch(code, car);
};

const put = (collection, code, car) => {
  return new Promise((resolve, reject) => {
    collection.findOneAndUpdate({ code: code }, car, (error, item) => {
      if (error) reject(error);
      resolve(item);
    });
  });
};

const patch = (collection, code, car) => {
  return new Promise((resolve, reject) => {
    collection.findOneAndUpdate({ code: code }, { $set: car }, { returnNewDocument: true }, (error, item) => {
      if (error) reject(error);
      resolve(item);
    });
  });
};
