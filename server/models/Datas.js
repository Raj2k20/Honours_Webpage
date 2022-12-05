const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DataSchema = new Schema({
    Id:Number,
    CamID:Number,
    Location:String,
    Speed:Number,
    Plates:Number,
    Color:String,
    Duration:Number,
    TimeStamp:Number,
});
const Data = mongoose.model("db_cm", DataSchema);
module.exports    = Data;
// const UserSchema = new Schema({
// module.exports = User = mongoose.model("Users", UserSchema, "users");