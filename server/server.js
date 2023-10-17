const express = require("express");
require("dotenv").config();
const connection = require("./database/db");
const DefaultData = require("./default");
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, async () => {
    try {
        await connection;
        // await DefaultData();
        console.log("Server is connected to DB");
    } catch (error) {
        console.log(`Error in connecting to DB:${error}`);
    }
    console.log(`Server is running on port ${PORT}`);
    
});
