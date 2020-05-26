const express = require('express');
const app = express();
const PORT = 5003;
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");

mongoose.connect(
    "mongodb://localhost:27017/recipe_db", 
    { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
    console.log("Mongoose를 이용하여 MongoDB 연결에 성공했습니다.");
})


var subscriber1 = new Subscriber({
    name: "Jon Wexler",
    email: "jon@jonwexler.com"
});

subscriber1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});

Subscriber.create(
    {
        name: "Jon Wexler",
        email: "jon@jonwexler.com"
    },
    function (error, savedDocument) {
        if(error) console.log(error);
        console.log(savedDocument);
    }
);



app.get('/', (req, res) => 
    res.send("Hello World!")
)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

