const express = require('express');
const app = express();
// app.use(express.static("public"));
app.use(express.static('./public'));
const nodemailer = require("nodemailer");
// const routers = require('./routers');
// app.all('*',(req,res,next)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// })
app.get('/warranty',(req,res)=>{
    res.send({msg:200})
    // const query=queryString.parse(req.query);
    // console.log(query)
    var {country,name,email,marketPlace,invoiceNum,subscribe} =req.query;
    // console.log(name)
    name =JSON.parse(name)
   var  firstName = name.firstName;
  
    var lastName = name.lastName;
     console.log(country)
    var csv = [];
    csv.push({invoiceNum,firstName,lastName,email,country,marketPlace,subscribe})


    // var pathName ="out"+n+".csv";
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
      path: "./public/warranty.csv",
      header: [
        { id: 'invoiceNum', title: 'Invocie Number' },
        // { id: 'description', title: 'oldDescription' },
        { id: 'firstName', title: 'First Name' },
        { id: 'lastName', title: 'Last Name' },
        { id: 'email', title: 'Email Address' },

        { id: 'country', title: 'Country' },

        { id: 'marketPlace', title: 'Market Place' },
        { id: 'subscribe', title: 'Subscription' },


      ],
      append:true
    });



    csvWriter
      .writeRecords(csv)
      .then(() =>{
    console.log(firstName ,"is written into the file");
// app.use(routers);
})
app.listen(5858,()=>{
    console.log("cd backend server is running on 5858")
})
