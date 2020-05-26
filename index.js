const express = require('express');
const app = express();
const MongoDB = require("mongodb").MongoClient;
const dbURL = "mongodb://localhost:27017";
const dbName = "recipe_db";

const PORT = 5003;

MongoDB.connect(dbURL, (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("contacts")
    .find()
    .toArray((error, data) => {
        if (error) throw error;
        console.log(data)
    })

    db.collection("contacts")
    .insert({
        name: "Apple",
        email: "apple@naver.com"
    }, (error, db) => {
        if (error) throw error;
        console.log(db);
});


})



app.get('/', (req, res) => 
    res.send("Hello World!")
)



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

