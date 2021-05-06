//modules =======================
const express = require('express');
const app = express();
var mongoose = require('mongoose');

//Setting our port
const port = 3000;
app.get('/', (req, res) => res.send('Welcome to the Demo App'));

//Configuration==================

//Config Files

var db = require('./config/db');
console.log("connecting--", db);
mongoose.connect(db.url); //Mongoose connection created


//Frontend Routes================
app.get('/', (req, res)=>res.send('Welcome to the Mean Demo App!'));

//Defining the Routes

app.get('/tproute', function (req, res) {
    res.send('This is routing for application developed using Node and Express');
});

//Sample API route
//Grab the student model we just created
var Student = require('./app/models/students');
app.get('/api/students', function(req, res){
    //Use Mongoose to get all students in the database
    Student.find(function(err, students){
        //If there's an error retrieving, send the error 
        //Nothing after res.send(err) will execute

        if(err)
        res.send(err);
        res.json(students); //Return all students in JSON format
    });
});

app.post('/api/students/send', function(req, res) {
    var student = new Student(); // create a new instance of the student model
    student.name = req.body.name; // set the student name (comes from the request)
    student.save(function(err) {
       if (err)
          res.send(err);
          res.json({ message: 'student created!' });
    });
 });
//Startup our application at http://localhost:3000
app.listen(port, () => console.log('Example App listening on port ${port}!'));