import express from 'express';
import fetch from 'node-fetch';
import request from 'request';
// import required
import cheerio from 'cheerio';
import fs from 'fs';


const app = express()

// let title, release, rating

// app.get('/scrape', (req, res) => {
  

// scrapping code
let url = "https://www.imdb.com/title/tt0145487/"

// request(url, function (err, response, html) {

//     if (err) return console.error(err);
//     let $ = cheerio.load(html)
   
 
//    title = $("TitleHeader__TitleText-sc-1wu6n3d-0 dxSWFG").text()
       
        
//         console.log(title);

//     })
// })

const main = async () => {
    const response = await fetch(url)
    const body = await response.text()
    console.log(body)
}

app.listen(5000, function() {
 console.log("Server running on port 5000")
})

