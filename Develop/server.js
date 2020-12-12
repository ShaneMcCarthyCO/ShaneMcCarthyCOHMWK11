const express = require("express");
// const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))


// require("./routes/apiroutes.js")(app)
const htmlroutes = require("./routes/htmlroutes")
const apiroutes = require("./routes/apiroutes")
app.use("/", htmlroutes)
app.use("/api", apiroutes)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });