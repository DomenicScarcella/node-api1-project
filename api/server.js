// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('./users/model.js')

const server = express()

server.use(express.json())

// ENDPOINTS -- 'req' is talking to the server, 'res' is the response given to the client

server.get('/api/users', (req, res) => {
    User.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
    
})

server.get('/api/users/:id', (req, res) => {
    const idVar = req.params.id
    User.findById(idVar)
        .then(user => {
            if(!user){
                res.status(404).json('User not found')
            } else {
                res.status(200).json(user)
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

server.get('/api/users', (req, res) => {
    res.status(200).json({message: "Howdy!"})
})


module.exports = server // EXPORT YOUR SERVER instead of {}
