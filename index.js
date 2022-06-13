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

//def rediret
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/es/index.html");
})

app.get('/api', (req, res) => {
    res.json(
    {
        characters: "https://dragon-ball-super-api.herokuapp.com/api/characters"
    }
    )
})

//es
app.get('/es', (req, res) => {
    res.sendFile(__dirname + "/public/es/index.html");
})

app.get('/es/documentacion', (req, res) => {
    res.sendFile(__dirname + "/public/es/docs.html");
})

//en
app.get('/en', (req, res) => {
    res.sendFile(__dirname + "/public/en/index.html");
})

app.get('/en/documentation', (req, res) => {
    res.sendFile(__dirname + "/public/en/docs.html");
})

app.use(express.static(__dirname + "/public"))


routerApi(app);
