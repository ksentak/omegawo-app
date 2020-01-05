var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
const path = require("path");
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = process.env.MONGODB_URI || "mongodb://justin:justin123@ds259878.mlab.com:59878/heroku_fkklvmvz"

mongoose
 .connect(mongoURI, {useNewUrlParser: true})
 .then(() => console.log("MongoDB Connected!"))
 .catch(err => console.log(err))

 var Users = require("./routes/Users")

 app.use("/users", Users)

 if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))

  });
}

 app.listen(port, () => {
    console.log("Server is running on port:" + port)
 })