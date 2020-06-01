const express = require('express');
const app = express();
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");
const layouts = require("express-ejs-layouts");

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


app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);


app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

