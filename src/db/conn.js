const mongoose = require("mongoose");
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true }).then(() => console.log("Connection Sucessful"))
};