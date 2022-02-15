
//
const axios = require("axios");
const cheerio = require("cheerio");


const markup = `
<ul class="fruits">
  <li class="fruits__mango"> Mango </li>
  <li class="fruits__apple"> Apple </li>
</ul>
`;

const $ = cheerio.load(markup)
const mango = $(".fruits__mango");
const apple = $(".fruits__apple");


console.log(apple.attr("class"))
console.log(mango.html())
console.log($.html())