let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
//let dbConfig = require('./database/db');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());




// Connecting mongoDB Database
const uri = process.env.MONGODB_URI;
// mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://masong:12345@cluster0.aravz.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Express Route
const studentRoute = require('./routes/student.route')

app.use('/students', studentRoute)

/*
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

*/



// PORT

const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})



// ... other imports 
const path = require("path")

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//app.listen(...)

const secret = process.env.SECRET || "some secret passphrase here for local development"
