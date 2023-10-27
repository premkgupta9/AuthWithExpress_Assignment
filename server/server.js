require ("dotenv").config()
const cookieParser = require('cookie-parser');
const express = require('express');
const { userRoute } = require('./route/userRoute');
const connectDatabase = require('./config/database');
const cors = require("cors")
const app = express();
const crypto = require('crypto')

console.log(crypto.randomBytes(32).toString('hex'));

const PORT = process.env.PORT || 8081;

app.use(cors({
    origin: "http://localhost:5500",
    credentials:true
}));

app.use(cookieParser())

app.use(express.json())

app.use("/", userRoute)



app.listen(PORT, async() => {
    connectDatabase ()
    console.log("Server Starting on PORT", PORT);
})