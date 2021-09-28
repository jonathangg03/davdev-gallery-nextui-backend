const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const cloudinary = require('cloudinary').v2
const Image = require('../model/image')
const {
  cloudinary: { cloudinaryName, cloudinaryKey, cloudinarySecret }
} = require('../config')
const router = express.Router()

cloudinary.config({
  cloud_name: cloudinaryName,
  api_key: cloudinaryKey,
  api_secret: cloudinarySecret
})

const storage = multer.diskStorage({
  destination: `uploads`,
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const uploadStorage = multer({ storage })

router.get('/', (req, res) => {
  Image.find()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err)
      res.send(err.message)
    })
})

router.post('/', uploadStorage.single('uploadImage'), async (req, res) => {
  const cloudUpload = await cloudinary.uploader.upload(
    `${__dirname}/../uploads/${req.file.filename}`
  )

  const newImage = new Image({
    title: req.body.title,
    description: req.body.description,
    publicUrl: cloudUpload.url,
    imageId: cloudUpload.public_id
  })

  newImage
    .save()
    .then((data) => {
      fs.unlink('')
      res.json(data)
    })
    .catch((err) => {
      console.error(err)
      res.send(err.message)
    })
})

router.delete('/:imageId', (req, res) => {
  Image.findByIdAndDelete(req.params.imageId)
    .then((data) => {
      cloudinary.uploader.destroy(data.imageId)
    })
    .then(() => res.send('Imagen eliminada con exito'))
    .catch((err) => {
      console.error(err)
      res.send(err.message)
    })
})

module.exports = router
