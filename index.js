const express = require('express');
const app = express();
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const subscribersController = require("./controllers/subscribersController");
const layouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/confetti_cusine",
    { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.set("useCreateIndex", true);


app.set("view engine", "ejs");
app.use(
    express.urlencoded({
        extended: false
    })
)

app.use(express.json());
app.use(layouts);
app.use(express.static("public"));  


const PORT = 5003;

app.get('/hello', (req, res) => 
    res.send("Hello World!")
);


app.get("/", (req, res) => {
    res.render("index");
});


app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.get("/courses", homeController.showCourses);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

