const User = require('../models/users');
const jwt = require("jsonwebtoken");
require("dotenv/config");

module.exports = {

    async login(req, res){
        try {
            const mail = req.body.email;
            const pass = req.body.password;
            if (!mail || !pass) {
                return res.status(400).json({ message: "Se requiere username y contraseña" });
            }

            await User.findOne({
                email: mail
            })
            .then(data => {
                if (mail === data.email && pass === data.password) {
                    const token = jwt.sign({ mail }, process.env.SECRET_KEY, { expiresIn: "6h" });
                    return res.status(200).json({ token });
                } else {
                    return res.status(401).json({ message: "Authentication failed" });
                }
            });
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async register(req, res){
        try {
            const mail = req.body.email;
            const pass = req.body.password;
            await User.find({
                email: mail
            })
            .then(data => {
                if (!data.email) {
                    const user = User.create(req.body);
                    return res.status(200).json( user );
                } else {
                    return res.status(401).json({ message: "Register failed" });
                }
            });
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async listUsers(req, res){
        try {
            const users = await User.find({}).populate("tag");
            return res.status(200).send(users);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async getById(req, res){
        try {
            const user = await User.findById(req.params.id).populate("tag");
            return res.status(200).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async update(req, res){
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            return res.status(200).send(user);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async delete(req, res){
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            return res.status(204).send(user);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

};