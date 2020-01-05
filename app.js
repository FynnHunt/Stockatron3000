const iscraper = require('./i-scraper');
const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    let result = await iscraper.getEndOfDayResults();
    let resultString = iscraper.createReadableResults(result);
    res.send(resultString);
});

app.get('/endofdayresult', async (req, res) => {
    let result = await iscraper.getEndOfDayResults();
    res.send(result);
});

const server = app.listen(3000, () => {
    console.log('App running on port 3000');
});