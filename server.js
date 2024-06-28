const http = require("http");
const fs = require("fs");
const path = require("path");
require('dotenv').config();
const server = http.createServer();

// Listen to the server
server.listen(process.env.PORT, () => {
    console.log("Server is running");
});

// Handle requests
server.on('request', (req, res) => {
    const url = req.url;
    if (url === "/") {
        //getting the file location dynamically
        const filePath = path.join(__dirname, '/pages', 'home.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        });
    } else if (url === "/about") {
        const filePath = path.join(__dirname, '/pages', 'about.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                res.end();
            }
        });
    } else {
        // Handle a 404 page
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Page not found");
        res.end();
    }
});