if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  port: process.env.PORT,
  dbUri: process.env.DB_URI,
  cloudinary: {
    cloudinaryName: process.env.CLOUDINARY_NAME,
    cloudinaryKey: process.env.CLOUDINARY_KEY,
    cloudinarySecret: process.env.CLOUDINARY_SECRET
  }
}
