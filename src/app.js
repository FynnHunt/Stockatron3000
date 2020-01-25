const iscraper = require('./i-scraper');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', async (req, res) => {
    let result = await iscraper.getEndOfDayResults();
    res.render('table', {
        title: 'End of day results',
        results: result
    });
});

app.get('/endofdayresult', async (req, res) => {
    let result = await iscraper.getEndOfDayResults();
    let resultString = iscraper.createReadableResults(result);
    res.send(resultString);
});

const server = app.listen(3000, () => {
    console.log('App running on port 3000');
});