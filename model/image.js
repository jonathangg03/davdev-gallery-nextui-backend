const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  title: String,
  description: String,
  publicUrl: String,
  imageId: String
})

const model = mongoose.model('images', imageSchema)

module.exports = model
