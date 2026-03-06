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

mongo.connect("mongodb://127.0.0.1:27017/signup-login")
    .then(con => {
        console.log('connected with mongoose');
    })
    .catch(err => console.log(err));



app.use(express.json())
app.use('/App', RegisterRouter)
app.use(express.static('./Public'))
app.listen(2000, () => {
    console.log('yes the server has been started');


})
