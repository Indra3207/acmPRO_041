const mongoose = require("mongoose")
var employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }

})

// const Register = new mongoose.model("mydb", employeeSchema);
// module.exports = Register;
var mydb = mongoose.model("mydb", employeeSchema);
module.exports = mydb;