const scrape = require('website-scraper');
const rimraf = require('rimraf');
const fs = require('fs');

rimraf.sync("./scrape");

scrape({
  urls: ['https://teppenthegame.com/en/cards/packs/2019/cor/'],
  directory: 'scrape',
  subdirectories: [
    {directory: 'images', extensions: ['.png']}
  ],
  requestConcurrency: 4,
  urlFilter: function(url){
    if (url.includes('https://teppenthegame.com/en/cards/packs/2019/cor/')) return true;
    if (url.includes('cor') && url.includes('png')) return true;
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
