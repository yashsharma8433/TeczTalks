const http = require('http');
const app = require('./app');
const port = process.env.PORT || 4000; // Port can be 4000 or whatever you'd prefer

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
