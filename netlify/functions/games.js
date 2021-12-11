const axios = require('axios')

exports.handler = async function (event, context) {
    console.log(event)
    console.log(context)
    try {
        const response = await axios.get('https://the-legend-of-zelda.p.rapidapi.com/games', {
            params: {limit: '29'},
            headers: {
                'x-rapidapi-host': 'the-legend-of-zelda.p.rapidapi.com',
                'x-rapidapi-key': process.env.ZELDA_API_KEY
            }
    })
    return {
        statusCode: 200,
        body: JSON.stringify(response.data.data)
    }
    }  catch (err) {
        return {
            statusCode: 404,
            body: err.toString()
        }
    }
}