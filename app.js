const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded ({extended:true}));
app.use(express.static("public"));

app.set('view engine' , 'ejs');

var items = ["Buy Food","Cook Food","Eat Food"];
var workitems = [];
app.get("/" , function(req,res){
    var today = new Date();
    var options = {
        weekday:"long",
        day:"numeric",
        month:"long",
    };
    var day = today.toLocaleDateString("en-US" , options);
            res.render("list", {listTitle:day ,newlistitem:items} );
});
app.post("/", function(req,res){
    console.log(req.body);
   var item = req.body.newitem;
   if(req.body.list==="Work List"){
    workitems.push(item);
    res.redirect("/work");
   } else {
    items.push(item);
    res.redirect("/");
   }
  
});
app.get("/work",function(req,res){
    res.render("list", {listTitle:"Work List",newlistitem:workitems});
});
app.post("/work",function(req,res){
    let item = req.body.newitem;
    workitems.push(item);
    res.redirect("/work"); 
})
app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000 , function(){
    console.log("server started on port 3000");
});



// var currentday=today.getDay();
    // var currentdate= today.getDate();
    // var currentmonth= today.getMonth() +1;
    // var currentyear = today.getFullYear();
    // var day = "";
    // switch (currentday) {
    //     case 0:
    //        day = "Sunday";
    //         break;
    //         case 1 :
    //         day = "Monday";
    //         break;
    //         case 2:
    //         day = "Tuesday";
    //         break;
    //         case 3:
    //         day = "Wednesday";
    //         break;
    //         case 4:
    //         day = "Thursday";
    //         break;
    //         case 5:
    //         day = "Friday";
    //         break;
    //         case 6:
    //         day = "Saturday";
    //         break;
    
    //     default:
    //         console.log("Error");
    //         break;
    // }