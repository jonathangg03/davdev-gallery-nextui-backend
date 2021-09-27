const express = require('express')
const multer = require('multer')
const path = require('path')
const Image = require('../model/image')
const router = express.Router()

const storageOptions = multer.diskStorage({
  destination: `uploads`,
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const storage = multer(storageOptions)

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

router.post('/', storage.single('uploadImage'), (req, res) => {
  const newImage = new Image({
    title: req.body.title,
    description: req.body.description,
    publicUrl: 'https',
    imageId: req.file.fieldname
  })

  newImage
    .save()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(err)
      res.send(err.message)
    })
})

router.delete('/:imageId', (req, res) => {
  Image.findByIdAndDelete(req.params.imageId)
    .then(() => res.send('Imagen eliminada con exito'))
    .catch((err) => {
      console.error(err)
      res.send(err.message)
    })
})

module.exports = router
