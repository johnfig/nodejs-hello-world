var http = require("http");
  fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    console.log('=> Node.js application starting in development on http://0.0.0.0:8000');
    console.log('=> Ctrl-C to shutdown server');
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
});
