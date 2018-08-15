//This js file only exports our html route map to the server.js file. Path is required here, not in server.js. This page only serves the homepage and survey page--the API routes will be served from a different module. 

module.exports = app => {
    const path = require('path');

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
}