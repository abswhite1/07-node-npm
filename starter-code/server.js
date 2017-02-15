'use strict';

// DONE: Initialize your project using NPM to create and populate a package.json file

// DONE: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

// DONE: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('/new', function(request, response) {
  console.log('should be new.html');
  response.sendFile('public/new.html', {root: '.'});
});

app.get('*', function(request, response) {
  // DONE: Using the response object, send the index.html file back to the user
  response.sendFile('./public/index.html', {root: '.'});
});

app.listen(PORT, function() {
  // DONE: Log to the console a message that lets you know which port your server has started on
  console.log('our server is serving our app at localhost: 3000');
});
