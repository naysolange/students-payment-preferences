const mysql = require("mysql");
const dbConfig = require("./config/db.config.js");

// Create a connection to the database
const DBConnection = {
  conn : mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  }),
  connected : false,
}


DBConnection.connect = () => {
  if(!DBConnection.connected) {
    DBConnection.conn.connect(error => {
      if (error) {
        console.error(error);
      } else {
        console.log("Successfully connected to the database");
        DBConnection.connected = true;
      }
    });
  }
}


DBConnection.execute = (callback) => {
  if(!DBConnection.connected) {
    DBConnection.conn.connect(error => {
      if (error) {
        console.error(error);
      } else {
        console.log("Successfully connected to the database");
        DBConnection.connected = true;
        callback(DBConnection.conn);
      }
    });
  } else {
    callback(DBConnection.conn);
  }
}

module.exports = DBConnection;