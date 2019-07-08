const fs = require('fs');
const cheerio = require('cheerio');

let content = fs.readFileSync('./scrape/index.html', 'utf8');
const $ = cheerio.load(content);

const logError = (err) => {
  if (err) console.log(err);
 };

const cards = $('.popup-content.containar.box').map((i, element) => {
  const data = $(element);

  const attributes = {};
  data.find('tbody').children().map((i, row) => {
    const rowData = $(row).children();
    const label = rowData.first().text();
    const value = rowData.last().text();

    attributes[label] = value;
  });

  return {
    name: data.find('.card-name-child').text(),
    id: data.attr('id'),
    image: data.find('img').attr('src'),
    attributes
  };
}).get();

cards.forEach((card) => {
  fs.writeFile(`../cards/${card.id}.json`, JSON.stringify(card), logError);
});

fs.writeFile(`../cards.json`, JSON.stringify(cards), logError);

console.log(`cards written: ${cards.length}`);
