const mongoose = require('mongoose');
const uniqid = require('uniqid');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const fileSchema = new Schema(
  {
    fileID: {
      type: String,
      required: true,
      unique: true,
      immutable: true,
      trim: true,
      default: () => uniqid('F-')
    },
    fileName: {
      type: String,
      required: true,
      immutable: true
    },
    originalName: {
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
    dateOfVideo: {
      type: Date,
      required: true,
      immutable: true
    },
    filePath: {
      type: String,
      required: true,
      immutable: true
    },
    isAnalyzed: {
      type: Boolean,
      required: true
    },
    csvFilePath: {
      type: String,
      required: false
    },
    dimension: {
      type: Array,
      required: false
    },
    distance: {
      type: Number,
      required: true
    },
    duration: {
      type: Number
    },
    comment: {
      type: String
    },
    isFrontal: {
      type: Boolean,
      required: true,
      default: false
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

fileSchema.plugin(mongooseUniqueValidator, {
  message: '{VALUE} is already in use, {PATH} must be unique.'
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
