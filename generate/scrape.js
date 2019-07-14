const scrape = require('website-scraper');
const rimraf = require('rimraf');
const fs = require('fs');

rimraf.sync("./scrape");

const urls = [
  {
    url: 'https://teppenthegame.com/en/cards/packs/2019/cor/',
    filename: 'core.html'
  },
  {
    url: 'https://teppenthegame.com/en/cards/basic/2019/',
    filename: 'basic.html'
  },
]

scrape({
  urls,
  directory: 'scrape',
  subdirectories: [
    {directory: 'images', extensions: ['.png']}
  ],
  requestConcurrency: 4,
  urlFilter: function(url){
    if (urls.some((current) => url.includes(current.url))) return true;
    if (url.includes('cards') && url.includes('png')) return true;
    return false;
  },
}).then(() => {
  fs.readdir('scrape/images', (err, files) => {
    files.forEach(file => {
      fs.rename(`scrape/images/${file}`, `../images/${file}`, (err) => {
        if (err) console.log(error);;
      });
    });
  });
});
