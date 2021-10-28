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
        res.status(200).send()
    }
    catch (err) {
        res.status(500).send()
        console.log(err)
    }
}
