
const express = require('express')
const router = express.Router()

const CategoriaController = require('./../controllers/categoria')

router.get('/categoria', CategoriaController.get)
router.get('/categoria/:id', CategoriaController.getByID)
router.post('/categoria', CategoriaController.create)
router.put('/categoria/:id', CategoriaController.update)
router.delete('/categoria/:id', CategoriaController.delete)

module.exports = router