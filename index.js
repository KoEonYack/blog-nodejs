const express = require('express');
const app = express();
const PORT = 5003;
const errorController = require("./controllers/errorControllers");

app.get('/', (req, res) => 
    res.send("Hello World!")
)

app.use(errorController.pageNotFoundError);
app.use(errorController.respondInternalError);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

