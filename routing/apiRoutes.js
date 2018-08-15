module.exports = app => {

    //These two constants here allow our api routes to access the locally stored JSON file and access it before running any gets or posts on it
    const fs= require('fs');
    const matches = JSON.parse(fs.readFileSync('./app/data/matches.json', 'utf8'));

    //Our get request for the API now renders the matches stored in matches.json
    app.get('/api/matches', (req, res) => {
        return res.json(matches);
    });

    //This is a bit more difficult and is likely broken. The idea is that each post request modifies the matches object parsed above and rewrites matches.json with the newly added response. 
    app.post('/api/matches', (req, res) => {
        let newEntry = req.body;
        res.json(newEntry);
        console.log(newEntry);
    });
}