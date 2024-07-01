const mongoose = require('mongoose');
const uniqid = require('uniqid');
const mongooseUniqueValidator = require('mongoose-unique-validator');
const { validSexTypes } = require('./rehabilitant.constants');
// const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
// const mongooseAutoPopulate = require('mongoose-autopopulate');

const Schema = mongoose.Schema;

const rehabilitantSchema = new Schema(
  {
    rehabilitantID: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
      trim: true,
      default: () => uniqid('R')
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: [2, 'First name must be at least 2 characters long!'],
      maxlength: [50, 'First name must be less than 50 characters long!']
    },
    lastName: {
      type: String,
      required: false,
      trim: true,
      minlength: [2, 'First name must be at least 2 characters long!'],
      maxlength: [50, 'First name must be less than 50 characters long!']
    },
    dob: {
      type: Date,
      required: false
    },
    comment: {
      type: String,
      required: false,
      trim: true,
      maxlength: [200, 'Maximum number of characters exceeded']
    },
    sex: {
      type: String,
      required: true,
      default: validSexTypes[0],
      trim: true,
      enum: {
        values: validSexTypes,
        message: 'Invalid sex type provided.'
      }
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    strict: true,
    id: true
  }
);

rehabilitantSchema.plugin(mongooseUniqueValidator, {
  message: '{VALUE} is already in use, {PATH} must be unique.'
});

const Rehabilitant = mongoose.model('Rehabilitant', rehabilitantSchema);

module.exports = Rehabilitant;
