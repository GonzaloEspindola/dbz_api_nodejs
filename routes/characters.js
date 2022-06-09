const express = require('express');
const router = express.Router();
const CharactersService = require('../services/CharactersService');
const service = new CharactersService();

//all characters
router.get('/', async (req, res) => {
    //obtengo los datos desde el servicio y los muestro con la respuesta
    const character = await service.find();
    res.json(character)
})

//id character
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const character = await service.findOne(id);
    res.json(character)
})

module.exports = router;