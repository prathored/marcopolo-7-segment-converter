const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");

const routesApi = require("./api/routes/index");
const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api", routesApi);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = app;