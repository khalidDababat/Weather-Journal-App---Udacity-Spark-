
projectData ={}; 

/*run server and routes */
const express = require('express'); 
/* Start up an instance of app */
const app = express(); 

/* Dependencie */
const bodyParser = require('body-parser'); 
// middleWare 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

const cors = require('cors');
app.use(cors()); 

/* Initializing the main project folder*/
app.use(express.static('website'));


const port = 4000; 

// Set Up The Server
const server = app.listen(port ,listing); 
function listing(){
    console.log(`running on localhost: ${port}`);

}

// get data http://localhost:4000/getdataAll 
app.get('/getdataAll',(req ,res) =>{
    res.send(projectData).status(200);
}); 


// post data http://localhost:4000/postD 
app.post('/postD', (req,res) =>{
  
  
 
         
    
   projectData = req.body; 
    console.log(projectData);

  
 
//   console.log(req.body);  // Log the received data
//   res.json({ message: 'Data received successfully', projectData: req.body });
   
  res.send(projectData).status(200);

});

