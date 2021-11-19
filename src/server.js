const express = require('express')
const axios = require('axios')

require('dotenv').config()

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/starships', (req, res) => {
    axios.get('https://the-legend-of-zelda.p.rapidapi.com/games', {
        params: {limit: '29'},
        headers: {
            'x-rapidapi-host': 'the-legend-of-zelda.p.rapidapi.com',
            'x-rapidapi-key': process.env.ZELDA_API_KEY
        }
    })
    .then((response) => res.json(response.data))
    .catch((err) => res.status(500).json({ type: 'error', message: err.message }))
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => console.log(`Listening on ${PORT}`))