const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World');
});

server.listen(5000, () => {
    console.log('Server is listeniing on port: 5000');
})