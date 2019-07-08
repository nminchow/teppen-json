const fs = require('fs');
const cheerio = require('cheerio');

let content = fs.readFileSync('./scrape/index.html', 'utf8');
const $ = cheerio.load(content);

$('.popup-content.containar.box').map((i, element) => {
  console.log($(element).find('.card-name-child').text());
});
