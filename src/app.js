const express = require("express");
const path = require("path");
require("./db/conn");
const Register = require("./models/register");
const app = express();
const { json } = require("express");
const { plugin } = require("mongoose");
const mongoose = require('mongoose')
var bodyParser = require("body-parser");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

// const template_path = path.join(__dirname, "../templates/views");

// app.set("view engine", "hbs");
// app.set("views", template_path);

// app.get("/", (req, res) => {
//     const params = {}
//     res.status(200).render("signup", params);
// });
app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/signup", async(req, res) => {
    try {
        const password = req.body.password;
        const pass = req.body.confirmpassword;
        if (password === pass) {
            const RegisterEmploye = new Register({
                firstname: req.body.firstname,
                username: req.body.username,
                email: req.body.email,
                number: req.body.number,
                gender: req.body.gender,
                password: password,
                confirmpassword: pass,
            })
            const registered = await RegisterEmploye.save();
            res.status(201).send("Registration successful!");
        } else {
            res.send("PASSWORD ARE NOT MATCHING")
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})