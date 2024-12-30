const express = require ('express');
const axios = require ('axios');
const app = express();



const NEWS_API_URL = 'https://newsapi.org/v2/everything?q=technology&apiKey=' + API_KEY;

app.get('/', async (req,res)=>{
try {
    const response = await axios.get (NEWS_API_URL);
    res.json(response.data.articles);
} catch (error) {
    res.status(500).send('Error fetching news');
}
});

app.listen(3000, () => {    console.log('Server is running on port 3000'); 

});