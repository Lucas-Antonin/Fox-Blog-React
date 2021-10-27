'use strict';

const sequelize = require("sequelize");
const { users } = require("../models/userModel");
const { passwordEncryptor } = require("../../utils/passwordHelper");

module.exports.registerUsers = async (req, res, next) => {
    try {
        var {username, email, password} = req.body.user;

        await passwordEncryptor(password).then((hash)=>{
            users.create({
                username: username,
                email: email,
                password: hash
            })
        })
    }
    catch (err) {
        res.status(500).send()
        console.log(err)
    }
}
/*module.exports.loginUsers = async (req, res, next) => {
    const user = await users.findOne({ where: { email: email } });
    if (user == null) {
        return res.status(404).send("Cannot find user");
    }
    try {
        if (await bcrypt.compareSync(password, user.password)) {
            res.send("Correct password");
        } else {
            res.send("Incorrect password");
        }
    }
    catch (err) {
        res.status(500).send()
        console.log(err)
    }
}*/