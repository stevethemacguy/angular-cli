/**
 * Author: Steven Dunn
 * Date Created: August 27, 2018
 * Dependencies: None
 */

//A basic Express Web server created with Node.

var express = require('express');
var expressStaticGzip = require("express-static-gzip");
var app = express();

//Set the public "root" folder that will contain static assets on the server (images, CSS, JS files, etc)
//The path is relative to the directory from where you launch node (i.e the folder containing server.js)
//With this in place, you can go directly to a url like http://localhost:3000/content/images/apple.png
//I use "/" here, but it could be "/public", etc. See http://expressjs.com/en/starter/static-files.html
//app.use(express.static(__dirname + '/dist'));   // __dirname is required, even though it's not initialized to anything.

// Use expressStaticGzip to serve gzip files instead of normal files.
// https://www.npmjs.com/package/express-static-gzip
// Note: expressStaticGzip does NOT compress files, it just serves your already compressed .gz files (compressed with Webpack)
// Caution: Do NOT use the "compression" plugin (https://www.npmjs.com/package/compression); that plugin compresses files for you on the server.
// app.use("/", expressStaticGzip(__dirname + '/dist'));

//If you also want to include Brotli
app.use("/", expressStaticGzip(__dirname + '/dist', {
  enableBrotli: true
}));


//Sends all other page requests to index.html (i.e. anything that doesn't match one of our angular routes)
//The routing is then handled by angular. Note: this MUST be "/index", it can't be "/home", etc
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

// This allows you to access the server from either localhost or your external IP address (at the same time)
//  localhost:8080
//  http://192.168.1.234:8080
app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});
