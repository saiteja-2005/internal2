const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/') {
        res.end('Welcome to the Home Page!');
    } else {
        res.end('404 Not Found');
    }
});
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
