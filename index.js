const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');

let judgments = [];

request("http://www.poderjudicial.es/search/contenidos.action?action=contentpdf&databasematch=TS&reference=8549400&links=&optimize=20181026&publicinterface=true", (err, res, body) => {
  // if (!err && res.statusCode == 200) {
    // let $ = cheerio.load(body);
    console.log(body)
    // $('a.title', '#siteTable').each(function() {
    //   var urlImg = $(this).attr('href');
    //   if (urlImg.indexOf('i.imgur.com') != -1) {
    //     images.push(urlImg);
    //   }
    // });
  // }

//   for(let i = 0; i < images.length; i++) {
//     request(images[i]).pipe(fs.createWriteStream('img/' + i + '.jpg'));
//   }
});