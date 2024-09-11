const mongoose = require('mongoose');
const uniqid = require('uniqid');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const cloudFileSchema = new Schema(
  {
    fileID: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
      trim: true,
      default: () => uniqid('CF-')
    },
    creationID: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
      trim: true,
    },
    fileName: {
      type: String,
      required: true,
      immutable: true
    },
    rehabilitantID: {
      type: String,
      required: true,
      immutable: true,
      trim: true
    },
    fileUrl: {
      type: String,
      required: true,
      immutable: true
    },
    isFrontal: {
      type: Boolean,
      required: false,
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

cloudFileSchema.plugin(mongooseUniqueValidator, {
  message: '{VALUE} is already in use, {PATH} must be unique.'
});

const CloudFile = mongoose.model('CloudFile', cloudFileSchema);

module.exports = CloudFile;
