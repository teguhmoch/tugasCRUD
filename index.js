const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("express");
const app = express();
const port = 8000;
const apiRouter = require ("./api-routes");

//set up bodyParser
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());

//Connect Mongoose
mongoose.connect('mongodb://localhost/tugasCRUD')
const db = mongoose.connection;

app.get('/',(req,res)=>{
    res.send('Selamat datang di web Siswa')
})

app.use("/api",apiRouter);

app.listen(port,()=>{
    console.log(`server connected at port ${port}`)
})