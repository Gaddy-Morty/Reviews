const mysql = require('mysql');
const mysqlConfig = require('./config.js');

// connect to mysql
const connection = mysql.createConnection(mysqlConfig);
connection.connect((err) => {
  if (err) {
    console.log('mysql is not connected: ', err);
  } else {
    console.log('mysql is connected');
  }
});

// retrive all sample data in reviews table for API calls.
const getData = (callback) => {
  const query = 'SELECT * from reviews WHERE property_id = 0;';
  connection.query(query, (error, results) => {
    if (error) {
      // console.log('error retrive data from reviews table: ', error);
      callback(error);
    } else {
      // console.log(results);
      callback(null, results);
    }
  });
};

const updateReview = (data, callback) => {
  const query = 'UPDATE review SET ? = ? WHERE id = ? and property_id = ?;'
  connection.query(query,[data], (error) => {
    if (error) {
      callback(error)
    } else {
      callback('updated review!')
    }
  })
}

const deleteReview = (callback) => {
  const query = 'DELETE from reviews WHERE id = ? and property_id = ?'
  connection.query(query, (error) => {
    if (error) {
      callback(error)
    } else {
      callback('deleted review!')
    }
  })
}

const addReview = (data, callback) => {
  const query = 'INSERT into reviews where property_id = ?'
  connection.query(query, (error) => {
    if (error) {
      callback(error)
    } else {
      callback('added review!')
    }
  })
}
module.exports = {
  getData,
  updateReview,
  addReview,
  deleteReview
};
