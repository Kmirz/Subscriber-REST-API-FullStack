const express = require('express')
const router = express.Router()

// Getting All
router.get('/', (req, res) => {

    res.send('Hello World')

})

// Getting One
router.get('/:id', (req, res) => {


    
})

// Creating One
router.post('/:id', (req, res) => {


    
})
// Updating One
router.patch('/:id', (req, res) => {


    
})
// Deleting One
router.patch('/:id', (req, res) => {


    
})

module.exports = router