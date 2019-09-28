const http = require("http")
const os = require("os")

http.createServer(function (req, res) {
    const host = os.hostname()
    const url = req.url
    res.writeHead(200, {
        "Content-Type": "text/html"
    })
    res.write(`<h1>Hello ${host}</h1>`)
    res.write(`<p>Request URL : ${url}</p>`)
    res.end()
}).listen(3000)

console.log("Listening on http://localhost:3000")