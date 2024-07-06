// Create web server
// Create a web server that listens on port 3000. It should respond to a GET request to /comments with a JSON object that represents a list of comments.
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify([
      { id: 1, author: 'John Doe', text: 'Hello, world!' },
      { id: 2, author: 'Jane Doe', text: 'Another comment' },
      { id: 3, author: 'Alice', text: 'Third comment' }
    ]));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});