
// const username = process.argv[2].split('=')[1]
// console.log(`Hello, ${username}`)
// const connectionString = 'mongodb+srv://cj:1qaz2wsx@todo.8x27jbs.mongodb.net/?retryWrites=true&w=majority'


// var express = require('express');

// var app = express();

// app.get('/', function(req, res){
//   res.render('index1');
// });
// app.listen(3000, function () {
//   console.log('listening on port 3000!')
// });

//   app.set('view engine', 'ejs');

//   app.get("/", function(req, res) {    
//     res.render('index1.ejs')
//   });
//   app.use(express.static("public"));

//   var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: true }));
// var task = ["socks", "practise with nodejs", " todoapp"];

// app.post('/addtask', function (req, res) {
//     var newTask = req.body.newtask;

//     task.push(newTask);

//     res.redirect("/");
// });

// app.get("/", function(req, res) {
//   res.render('index1.ejs', { task: task, complete: complete});
// });


// var complete = ["finish buy stock"];
// app.post("/removetask", function(req, res) {
//      var completeTask = req.body.check;

// if (typeof completeTask === "string") {
//      complete.push(completeTask);

     
//   task.splice(task.indexOf(completeTask), 1);
// } else if (typeof completeTask === "object") {
//     for (var i = 0; i < completeTask.length; i++) {     complete.push(completeTask[i]);
//     task.splice(task.indexOf(completeTask[i]), 1);
// }
// }
//    res.redirect('/');
// });




  
const username = process.argv[2].split('=')[1]
console.log(`Hello, ${username}`)
const connectionString = 'mongodb+srv://cj:1qaz2wsx@todo.8x27jbs.mongodb.net/?retryWrites=true&w=majority'
  
//dependencies required for the app
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
 
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
//render css files
app.use(express.static('public'));
 
//placeholders for added task
var task = ['Math Assignment', 'Complete Web App'];
 
//placeholders for removed task
var complete = ['Buy Snacks'];
 
//post route for adding new task
app.post('/addtask', function(req, res) {
var newTask = req.body.newtask;
//add the new task from the post route
task.push(newTask);
res.redirect('/');
});
 
app.post('/removetask', function(req, res) {
var completeTask = req.body.check;
//check for the “typeof” the different completed task, then add into the complete task
if (typeof completeTask === 'string') {
complete.push(completeTask);
//check if the completed task already exits in the task when checked, then remove it
task.splice(task.indexOf(completeTask), 1);
} else if (typeof completeTask === 'object') {
for (var i = 0; i < completeTask.length; i++) {
complete.push(completeTask[i]);
task.splice(task.indexOf(completeTask[i]), 1);
}
}
res.redirect('/');
});
 
//render the ejs and display added task, completed task
app.get('/', function(req, res) {
res.render('index1', { task: task, complete: complete });
});
 
//set app to listen on port 3000
app.listen(3000, function() {
console.log('Test App Server is running on port 3000');
});