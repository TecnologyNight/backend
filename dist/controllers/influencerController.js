"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInfluencer = exports.updateInfluencer = exports.createInfluencer = exports.getInfluencer = exports.desabilitadoInfluencer = exports.habilitadoInfluencer = exports.getTodosInfluencer = void 0;
const Influencer_1 = require("../entities/Influencer");
const Services_1 = require("../entities/Services");
const getTodosInfluencer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body, 'zinedine get');
        // const influencer = await AppDataSource
        // .getRepository(Influencer)
        // .createQueryBuilder("influencer")
        // .leftJoin("influencer.services","services")
        // .getMany;
        const influencer = yield Influencer_1.Influencer.find({
            relations: {
                services: true,
            }
        });
        return res.json({ listInfluencer: influencer });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getTodosInfluencer = getTodosInfluencer;
const habilitadoInfluencer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const influencer = yield Influencer_1.Influencer.findOneBy({ id: parseInt(id) }); //! Puedo obtener un usuario
        if (!influencer)
            return res.status(404).json({ message: "Not Influencer found" });
        yield Influencer_1.Influencer.update({ id: parseInt(id) }, { habilitado: true });
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.habilitadoInfluencer = habilitadoInfluencer;
const desabilitadoInfluencer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const influencer = yield Influencer_1.Influencer.findOneBy({ id: parseInt(id) });
        if (!influencer)
            return res.status(404).json({ message: "Not Influencer found" });
        yield Influencer_1.Influencer.update({ id: parseInt(id) }, { habilitado: false });
        console.log("Funciono");
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.desabilitadoInfluencer = desabilitadoInfluencer;
const getInfluencer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const influencer = yield Influencer_1.Influencer.findOneBy({ id: parseInt(id) });
        if (!influencer)
            return res.status(404).json({ message: "Influencer not found" });
        return res.json(influencer);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getInfluencer = getInfluencer;
const createInfluencer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, edad, description, precio, img, estatura, services } = req.body;
        const listId = services;
        const listServices = [];
        const influencer = new Influencer_1.Influencer();
        influencer.nombre = nombre;
        influencer.edad = edad;
        influencer.estatura = estatura;
        influencer.precio = precio;
        influencer.description = description;
        influencer.img = img;
        for (const id of listId) {
            let values = yield Services_1.Services.findOneBy({ id: parseInt(id) });
            if (!values)
                return res.status(404).json({ message: "Services not found" });
            listServices.push(values);
        }
        influencer.services = listServices;
        yield influencer.save();
        return res.json({ listInfluencer: yield Influencer_1.Influencer.find() });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createInfluencer = createInfluencer;
const updateInfluencer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const influencer = yield Influencer_1.Influencer.findOneBy({ id: parseInt(id) }); //! Puedo obtener un usuario
        if (!influencer)
            return res.status(404).json({ message: "Not Influencer found" });
        yield Influencer_1.Influencer.update({ id: parseInt(id) }, req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateInfluencer = updateInfluencer;
const deleteInfluencer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield Influencer_1.Influencer.delete({ id: parseInt(id) });
        if (result.affected === 0)
            return res.status(404).json({ message: "Influencer not found" });
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteInfluencer = deleteInfluencer;
