const express = require("express");
const bodyparser = require("body-parser")
const app = express();
const {default: mangoose, mongo, default: mongoose} = require('mongoose')
const route = require('./routes/route');
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}));
let port = 3000

mongoose.connect("mongodb+srv://kavya:xLvSB2EPL3Th9y_@cluster0.ri0ljz1.mongodb.net/", {
    useNewUrlParser: true  
})

.then(() => console.log("conected to kavya mongodb"))

.catch((err)=> console.log(err))

app.use('/', route);

app.get("/", (req, res) => {
  res.send("Hello! express is running on node.");
});

app.listen( process.env.PORT || port, function(){
  console.log("College app running on port"  + ( `${port}`  || (process.env.PORT) ) );
});

module.exports = app  