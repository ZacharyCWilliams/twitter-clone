const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


// create express server
const express = require("express");
const app = express();

// basic routing
app.get("/", (req, res) => res.send("Twitter Clone"));

// set heroku + local ports
const port = process.env.PORT || 5000;

// start socket & listen for connections
app.listen(port, () => console.log(`Server is running on port ${port}`));