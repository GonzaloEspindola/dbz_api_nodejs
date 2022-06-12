const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');
var path = require('express');

// create application
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Corriendo en el puerto ' + port);
})
app.use(cors());


//def index route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

//def docs route
app.get('/documentacion', (req, res) => {
    res.sendFile(__dirname + "/public/docs.html");
})

app.use(express.static(__dirname + "/public"))


routerApi(app);
