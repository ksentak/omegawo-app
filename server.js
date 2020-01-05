var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
const path = require("path");
require("dotenv").config();
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/mernloginreg"

mongoose
 .connect(mongoURI, {useNewUrlParser: true})
 .then(() => console.log("MongoDB Connected!"))
 .catch(err => console.log(err))

 var Users = require("./routes/Users")

 app.use("/users", Users)

 if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

 app.listen(port, () => {
    console.log("Server is running on port:" + port)
 })