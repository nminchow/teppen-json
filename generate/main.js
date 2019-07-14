const fs = require('fs');
const cheerio = require('cheerio');

let coreContent = fs.readFileSync('./scrape/core.html', 'utf8');
let basicContent = fs.readFileSync('./scrape/basic.html', 'utf8');

const $ = cheerio.load(coreContent + basicContent);

// TODO: make this configurable
const webPath = 'https://nminchow.github.io/teppen-json'

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
    image: `${webPath}/${data.find('img').attr('src')}`,
    attributes
  };
}).get();

cards.forEach((card) => {
  fs.writeFile(`../cards/${card.id}.json`, JSON.stringify(card), logError);
});

fs.writeFile(`../cards.json`, JSON.stringify(cards), logError);

console.log(`cards written: ${cards.length}`);
