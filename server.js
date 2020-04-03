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
      path: "./public/out.csv",
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
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'ebba.kulas77@ethereal.email',
        pass: '6AGTN8qznvS6YvTrxe'
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "longruifang@gmail.com,rae@cyclingdeal.com.au", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    });
  
//     console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);
      } 
      
      
      );

// app.use(routers);
})
app.listen(5858,()=>{
    console.log("server is running on 5858")
})
