const mongoose = require('mongoose')

const dbConnect = (dbUri) => {
  mongoose.connect(dbUri, () => console.log('DB Connected'))
}

module.exports = dbConnect
