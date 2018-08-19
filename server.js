
//Importing dependencies
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

//Setting up express functionality.
const app = express();

//Telling express to use body parser and dirname concat in order to process API post requests.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//Each of these requires brings routing functionality to the server.
require('./routing/htmlRoutes')(app);
require('./routing/apiRoutes')(app);

//Tells us when the app is all spun up.
app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
});



