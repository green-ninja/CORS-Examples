
const express = require("express");
const cors = require("cors");
const app = express();

if (!module.parent) {
  const port = 3000;

  app.listen(port, () => {
    console.log("Express server listening on port " + port + ".");
  });
}

//Serve homepage
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

//Serve Favro logo - no CORS
app.get("/favro-logo-no-cors", (req, res) => {
  res.sendFile(__dirname + "/favro-logo.svg")
});

//Serve Favro logo - CORS
app.get("/favro-logo-cors", cors(), (req, res) => {
  res.sendFile(__dirname + "/favro-logo.svg")
});

//No CORS
app.get("/no-cors", (req, res) => {
  res.sendStatus(200);
});

//CORS TYPES
//Simple CORS
app.head("/simple-cors", cors(), (req, res) => {
  res.sendStatus(204);
});


app.get("/simple-cors", cors(), (req, res) => {
  res.json({
    text: "Simple CORS requests are working. [GET]"
  });
});

app.post("/simple-cors", cors(), (req, res) => {
  res.json({
    text: "Simple CORS requests are working. [POST]"
  });
});

//Complex CORS (preflight requests)

app.options("/complex-cors", cors());

app.post("/complex-cors", cors(), (req, res) => {
  res.json({
    text: "Complex CORS - POST"
  });
});