const express = require('express')
const router = express.Router()

const Property = require('./../models/Property.model')


router.get('/', (req, res) => {

    Property
        .find()
        .sort({ createdAt: -1 })
        .then(response => res.json(response))
        // .then(response => setTimeout(() => res.json(response), 200))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching properties', err }))
})


router.get('/:property_id', (req, res) => {

    Property
        .findById(req.params.property_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching properties', err }))
})


router.post('/new', (req, res) => {

    const property = req.body

    Property
        .create(property)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving properties', err }))
})


router.put('/edit/:property_id', (req, res) => {

    const property = req.body

    Property
        .findByIdAndUpdate(req.params.property_id, property)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing properties', err }))
})

router.delete('/:property_id', (req, res) => {

    Property
        .findOneAndRemove(req.params.property_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error fetching properties', err }))
})


module.exports = router
