
require('../models/db');
const categories = require('../models/category')


// get /
// home page
exports.home = async(req,res) =>{
  // try{
  //   // create limit of data to display
  //   const limitNumber  = 5;
  //   const categories = await category.find({}).limit(limitNumber)
    res.render('index',{title:'Cooking Blog - Home', categories})
  // }catch(error){
  //   res.status(500).send({message:error.message || "Error Occured" })
  // }
   
}


// to load dummy data to db

async function insertCategoryData(){
    try{
        await categories.insertMany(

          [{
    
                        "name": "American",
                        "image": "american-food.jpeg"
                        
                      },
                      {
                        "name": "Chinese",
                        "image": "chinese-food.jpg"
                        
                      },
                        {
                        "name": "Thai",
                        "image": "thai-food.jpeg"
                        
                      },
                      {
                       
                        "name": "Mexican",
                        "image": "mexican-food.jpg"
                        
                      },
                      {
                       
                        "name": "Indian",
                        "image": "indian-food.jpg"
                        
                      },
                      {
                        "name": "Spanish",
                        "image": "spanish-food.jpeg"
                        
                      }]
        );
         
        }
        catch(error){
        console.log('err',  error)
    }
}
insertCategoryData();





//           [{
    
//             "name": "American",
//             "image": "american-food.jpeg"
            
//           },
//           {
//             "name": "Chinese",
//             "image": "chinese-food.jpg"
            
//           },
//             {
//             "name": "Thai",
//             "image": "thai-food.jpeg"
            
//           },
//           {
           
//             "name": "Mexican",
//             "image": "mexican-food.jpg"
            
//           },
//           {
           
//             "name": "Indian",
//             "image": "indian-food.jpg"
            
//           },
//           {
//             "name": "Spanish",
//             "image": "spanish-food.jpeg"
            
//           }]