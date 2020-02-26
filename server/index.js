/* eslint-disable no-console */
const newrelic = require('newrelic');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { getData } = require('../database/index.js');
const cassie = require('../database/cassie.js')


const app = express();
const port = 3003;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

app.locals.newrelic = newrelic;
// get request response for property_id = 0
app.get('/legacy/api/0', (req, res) => {
  getData((error, results) => {
    if (error) {
      console.log('error retrive data from reviews table: ', error);
    } else {
      console.log('successfully get data from reviews table!');
      res.send(results);
    }
  });
});

//CRUD
//get all reviews by propid
app.get('/property/:property_id/reviews', (req, res) => {
  cassie.get(req.params.property_id, (error, results) => {
    if (error) {
      console.log(error)
    } else {
      console.log(`${req.params.property_id}`)
      res.send(results.rows)
    }
  })
})

//post review to specific property_id
app.post('/property/:property_id/reviews', (req, res) => {
  cassie.post(req, (error, results) => {
    if (error) {
      console.log('this is an error', error)
    } else {
     res.send(results)
      
    }
  })
  
})

//update review at specific id for specific property_id
app.put('/api/:id/:property_id', (req, res) => {
  res.send('put!')
})

//delete review at specfic id for specific property_id (only if correct user)
app.delete('/property/:property_id/reviews/:id/user/:user_id', (req,res) => {
  console.log(req.params)

  cassie.delete(req, (error, results) => {
    if (error) {
      console.log(error)
    } else {
      res.send(results)
    }
  })
})
// start server on port 3003
app.listen(port, () => console.log(`app listening on port ${port}!`));
