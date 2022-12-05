const express = require('express');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const {Schma} = mongoose;
const PORT = 4000;
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://sr123:sr123@cluster0.dlps8ua.mongodb.net/database4?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const dataschema = new mongoose.Schema({
    id: Number,
    plates: Number,
    location: String,
    timestamp: Number,
    camera: Number,
});
// const datamodel = mongoose.model('data', dataschema,"datas");
var a =0;
const datamodel = mongoose.model('data', dataschema,"collection4");
app.get("/fetchall", async (req, res) => {
    datamodel.find((err, data) => {
        if (err) {
            res.status(500).send(err);
            console.log("Error here");
        } else {
            res.status(200).send(data);
            a++;
            console.log("Success here",a);
        }
});
});
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
