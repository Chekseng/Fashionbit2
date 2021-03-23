const mongoose = require('mongoose')

// FASHION SCHEMA MODEL
const fashionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    default: Math.ceil(Math.random() * 100) + 50,
  },
  likes: {
    type: String,
    default: Math.ceil(Math.random() * 10000) + 900,
  },
  viewed: {
    type: String,
    default: Math.ceil(Math.random() * 400) + 100,
  },
  mins: {
    type: String,
    default: Math.ceil(Math.random() * 10) + 2,
  }
})

module.exports = mongoose.model('fashion', fashionSchema);