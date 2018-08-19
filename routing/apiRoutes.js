module.exports = app => {

    //These two constants here allow our api routes to access the locally stored JSON file and access it before running any gets or posts on it
    const fs= require('fs');

    //Our get request for the API now renders the matches stored in matches.json
    app.get('/api/matches', (req, res) => {      
        return res.json(matches);
    });

    //Matches just exports the array of objects held within matches JS.
    let matches = require('../app/data/matches.js');

    //Our post route, triggered only by the survey's submission...
    app.post('/api/matches', (req, res) => {

        //Defining our variables for req.body (the contents of the survey on submission, and a sum.)
        let newEntry = req.body;
        let sum = 0;

        //Using an iterator, we use the answers given to the number choice questions on the survey to tally up a total score.
        for (let i = 0; i < newEntry.choice.length; i++){
            let answer = parseInt(newEntry.choice[i]);
            sum += answer;
        }

        //We add this score to the newEntry object variable...
        console.log(sum)
        newEntry.total = sum;

        //And we push it all to our data, along with a response if someone hits the push route ( /api/matches )
        matches.push(newEntry);
        res.json(newEntry);
    });
}