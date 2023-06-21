
const express = require("express");
const cors = require("cors");
const app = express();

if (!module.parent) {
    const port = 3001;
  
    app.listen(port, () => {
      console.log("Express server listening on port " + port + ".");
    });
  }
  
//Serve homepage
app.get("/home", (req, res) => {
    console.info("GET /home");
    res.sendFile("/Users/dino/Development/CORS-Exploits/Malicious server/index.html")
  });


