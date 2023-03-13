const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: '../.env' })

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log('Db connected'))
            .catch((err) => console.log('an error', err))
    } catch (error) {
        console.log(error)
    }

}

module.exports = connectDB