const express = require('express');
const request = require('request');
const cheerio = require('cheerio');

const fs = require('fs');
const app = express()

let title, release, rating

app.get('/scrape', (req, res) => {
  

// scrapping code
url = "https://www.imdb.com/title/tt0145487/"

request(url, function (err, response, html) {

    if (err) return console.error(err);
    let $ = cheerio.load(html)
   
 
   title = $("TitleHeader__TitleText-sc-1wu6n3d-0 dxSWFG").text()
       
        
        console.log(title);

    })
})



app.listen(5000, function() {
    console.log("Server is listening on Port 5000")
})