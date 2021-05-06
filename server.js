//modules =======================
const express = require('express');
const app = express();

//Setting our port
const port = 3000;
app.get('/', (req, res) => res.send('Welcome to the Demo App'));

//Defining Route
app.get('/tproute', function (req, res) {
    res.send('This is routing for application developed using Node and Express');
});
//Startup our application at http://localhost:3000
app.listen(port, () => console.log('Example App listening on port ${port}!'));