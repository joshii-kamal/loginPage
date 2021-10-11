const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require('./routes/users');
const apiErrorHandler = require('./error/api-error-handler');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongoDB database connection established sucessfully");
})

app.use(userRouter);
app.use(apiErrorHandler);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})