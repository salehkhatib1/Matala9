const http = require("http");
const fs = require("fs");
const path = require("path");

// Define the path to the HTML file
const filePath = path.join(__dirname, "templates", "index.html");

// Create the server
const server = http.createServer((req, res) => {
  // Serve the HTML file
  if (req.url === "/") {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    // Handle 404 - Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
