const Nota = require('../models/notas');
const Tag = require('../models/tags')

module.exports = {

    async list(req, res){    //me falta aplicar para que traiga el nombre del tag en el json
        try {
            const notas = await Nota.find({}).populate("tag");
            return res.status(200).send(notas);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async getById(req, res){
        try {
            const nota = await Nota.findById(req.params.id).populate("tag");
            return res.status(200).send(nota);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async add(req, res){
        try {
            const nota = await Nota.create(req.body);
            return res.status(201).send(nota);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async update(req, res){
        try {
            const nota = await Nota.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            return res.status(200).send(nota);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

    async delete(req, res){
        try {
            const nota = await Nota.findByIdAndDelete(req.params.id);
            return res.status(204).send(nota);
        } catch (error) {
            return res.status(400).send(error);
        }
    },

};