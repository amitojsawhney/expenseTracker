const express = require('express')
const router = express.Router()

const project = require('../models/project')

router.get('/', (req,res) =>{
    projects = new project("Hargun", "1", "100", "Hargun Info", "Payment Info", "Expense Info")
})
module.exports = router