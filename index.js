const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');

// create application
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Corriendo en el puerto ' + port);
})
app.use(cors());

//def route
app.get('/', (req, res) => {
    res.send('Hola mi server en express')
})

routerApi(app);
