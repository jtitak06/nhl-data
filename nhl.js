const express = require("express");
const cors = require("cors");
const app = express();
const goalsData = require("./goals.json");
const assistsData = require("./assists.json");
const winsData = require("./wins.json");


const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("NHL Stat Leaders");
});

app.get("/points", (req, res) => {
    res.send(goalsData);
});

app.get("/rebounds", (req, res) => {
    res.send(assistsData);
});

app.get("/assists", (req, res) => {
    res.send(winsData);
});

app.listen(port, () => {
    console.log(`Port is listening on port 3000`);
});