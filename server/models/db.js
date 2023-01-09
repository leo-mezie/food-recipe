
    const mongoose = require('mongoose');
  
    function connect(){

      
            mongoose.connect(process.env.MONGO_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true
                });
                
                const db = mongoose.connection;
                
                 db.on("error", () =>{
                  console.error.bind(console, "Failed to connect to database")
               });
                
                  db.once("open", () => console.info("Database connected successfully"));
            
                  return db;
             
          
          }


// models
require('./category')

module.exports = connect;