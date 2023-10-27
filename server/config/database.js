const mongoose = require ("mongoose");
require("dotenv").config()

const connectDatabase = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then((con) => {
        console.log(`mongodb connected with server: ${con.connection.host}`);
    }) .catch ((e) => {
        console.log("error", e.message);
    })
};


module.exports = connectDatabase;