
const express = require('express');
const { createCharacter, favoriteCharacter, getAllCharaters, getCharacterId } = require('../controllers/character.controllers');



// Middlewares
const { protectSession } = require('../middlewares/auth.middlewares');

const characterRouter = express.Router();

characterRouter.use(protectSession);

characterRouter.post('/', createCharacter);

characterRouter.post('/favoritos/:ref_api', favoriteCharacter);

characterRouter.get("/",getAllCharaters)
characterRouter.get("/:id",getCharacterId)

module.exports = { characterRouter };