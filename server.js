const RegisterController = require('./Controllers/RegisterController');
const express = require('express');
const mongo = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './vars/.env' });

const RegisterRouter = require('./Routes/RegisterRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* MongoDB Connection */
/* Use container name "mongodb" instead of 127.0.0.1 */
const dbURI = process.env.MONGO_URI || "mongodb://mongodb:27017/signup-login";

mongo.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB @", dbURI);
})
.catch((err) => {
    console.error("Mongoose connection error:", err);
    process.exit(1);
});

/* Routes */
app.use('/App', RegisterRouter);

/* Static Files */
app.use(express.static('./Public'));

/* Start Server */
app.listen(2000, () => {
    console.log("Server started on port 2000");
});
