const express = require('express')
const axios = require('axios')

require('dotenv').config()

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/starships', (req, res) => {
    //axios.get("zelda api goes here")
    res.json([{id: 1, name: 'Executor', model: 'Executor-class star dreadnought'}, {id: 2, name: 'Sentinel-class landing craft', model: 'Sentinel-class landing craft'}])
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))