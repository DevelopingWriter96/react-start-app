const express = require('express')
const axios = require('axios')

require('dotenv').config()

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next ()
})

app.get('/starships', (req, res) => {
    //axios.get(propublica api goes here)
    res.json([{name: 'Executor', model: 'Executor-class star dreadnought'}, {name: 'Sentinel-class landing craft', model: 'Sentinel-class landing craft'}])
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))