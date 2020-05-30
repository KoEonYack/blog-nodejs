const express = require('express');
const app = express();
const PORT = 5003;
const errorController = require('./controllers/errorController');
const subscribersController = require("./controllers/subscribersController");
const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");

mongoose.Promise = global.Promise;

mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("DB 연결 성공");
})

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);

app.get('/', (req, res) => 
    res.send("Hello World!")
)


// ver 1
/* 
app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
    console.log(req.data);
    res.send(req.data);
})
*/

// ver 2
app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
    res.render("subscribers", { subscribers: req.data });
})

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

