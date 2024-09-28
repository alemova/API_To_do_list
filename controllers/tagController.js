const Tag = require('../models/tags');

module.exports = {

    async list(req, res){
        try {
            const tags = await Tag.find({});
            return res.status(200).send(tags);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async getById(req, res){
        try {
            const tag = await Tag.findById(req.params.id);
            return res.status(200).send(tag);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async add(req, res){
        try {
            const tag = await Tag.create(req.body);
            return res.status(201).send(tag);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async update(req, res){
        try {
            const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            return res.status(200).send(tag);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async delete(req, res){
        try {
            const tag = await Tag.findByIdAndDelete(req.params.id);
            return res.status(204).send(tag);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

};