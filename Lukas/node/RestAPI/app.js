const express = require("express");
const app = express();
const port = 3000;

let number = 0;

app.get("/", (req,res) => res.send("Hello World!"));
app.listen(port, () => console.log("Example app listening on port ${port}!"));
app.use(express.json());

app.post("/number", (req,res) => {
    number = req.body["number"];
    res.json({requestBody: req.body});
});

app.get("/number", (req,res) => {
    res.json(number);
});