const fs = require('fs');

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getMeme = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'image/png',
  });
  response.write(spongegar);
  response.end();
};

module.exports.getMeme = getMeme;
