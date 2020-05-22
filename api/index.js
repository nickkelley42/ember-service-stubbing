const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.end(JSON.stringify({
    data: [
        {
          type: 'comments',
          id: 1,
          attributes: {
            username: 'bob',
            body: 'nice meme!',
          }
        },
        {
          type: 'comments',
          id: 2,
          attributes: {
            username: 'larry',
            body: 'first comment lol!!!!',
          },
        },
        {
          type: 'comments',
          id: 3,
          attributes: {
            username: 'larry',
            body: 'dangit',
          }
        }
    ],
  }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
