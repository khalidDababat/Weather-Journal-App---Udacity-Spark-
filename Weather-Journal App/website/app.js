

//8718d15f6d182546c602d84ba1a7b693   &units=imperial'

let d = new Date(); 
let currentDate = d.toDateString();

 
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=';
// api key 
const apikey =',&appid=8718d15f6d182546c602d84ba1a7b693&units=imperial'; 


const server = 'http://localhost:4000'; 
 
const generate = document.getElementById('generate');
generate.addEventListener('click' ,generateData);

// function To Get Data From API And User And Print in The Prouser 
function generateData(){
     const zip  = document.getElementById('zip').value;
     const feeling = document.getElementById('feelings').value;
    
     // using Promise For Geting Data From API 
     reterveWetherData(zip).then(
        (data) =>{
           //  console.log(data); 

            
           const {
            main :{temp},
            weather:[{description}]
           } = data; 
           
             const info = {
                currentDate,
                temp:Math.round(temp),
                description,
                feeling,
             }
        // console.log(info); //http://localhost:4000/postD
          postdata(server + '/postD' , info);
          getdata(); 


        }
     );
     
}
 

// Get Data From Server And Client User 
async function  getdata(){

    const res = await fetch(server + '/getdataAll'); 
   try{
      
      const da =await res.json(); 


     document.getElementById('temp').innerHTML ="The Temperature Wether is:" + da.temp + '&dege' ;
     document.getElementById('date').innerHTML ="The current Date is:" + da.currentDate ;
     document.getElementById('content').innerHTML ="The content is:" + da.feeling ;
     document.getElementById('desc').innerHTML ="The wether is:" + da.description;


   }catch(error){
       console.log(error);
   }

}




// Async GET  reterve Data From API 
const reterveWetherData = async (zip) =>{
    const res = await fetch(url + zip +apikey); 
    try{
         const alldata = await res.json(); 
        //  console.log(alldata);
        return alldata;
    }catch(error){
         console.log("error", error);
    }
}
 


//Post Data into Server 
const postdata = async (url ='' ,Entrydata ={}) =>{

 const res = await fetch(url ,{
    method:'post', 
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(Entrydata),
 });

 try{
     const dataready = await res.json(); 
     console.log("Save Data", dataready);
     return dataready; 
 }catch(error){
      console.log(error);
 }
}




