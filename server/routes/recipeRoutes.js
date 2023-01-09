
const express = require ('express');
const router = express.Router();
const recipeController = require('../controllers/recipeControllers')




router.get('/',recipeController.home)


module.exports = router;