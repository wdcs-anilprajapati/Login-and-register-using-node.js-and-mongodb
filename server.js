const RegisterController = require('./Controllers/RegisterController')
const express = require('express')
const mongo = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './vars/.env' })
// const script = require('./Public/JS/script')
const RegisterRouter = require('./Routes/RegisterRoute')
const app = express()
app.use(express.urlencoded({ extended: true }));

// app.use(express.json());

const dbURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/signup-login";

mongo.connect(dbURI)
    .then(() => console.log('Connected to MongoDB @', dbURI))
    .catch(err => {
        console.error('Mongoose connection error:', err);
        process.exit(1); // Exit with error so Docker knows it failed
    });




app.use(express.json())
app.use('/App', RegisterRouter)
app.use(express.static('./Public'))
app.listen(2000, () => {
    console.log('yes the server has been started');


})
