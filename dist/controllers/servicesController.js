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
exports.deleteServices = exports.updateServices = exports.createServices = exports.getServices = exports.getAllServices = void 0;
const Services_1 = require("../entities/Services");
const getAllServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield Services_1.Services.find();
        return res.json({ listServices: services });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getAllServices = getAllServices;
const getServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const services = yield Services_1.Services.findOneBy({ id: parseInt(id) });
        if (!services)
            return res.status(404).json({ message: "Services not found" });
        return res.json(services);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getServices = getServices;
const createServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, edad, description, precio, img, habilitado } = req.body;
        const services = new Services_1.Services(); //! Estoy creando un nuevo usuario
        services.nombre = nombre;
        services.precio = precio;
        yield services.save(); //! Guardo el usuario
        const allServices = yield Services_1.Services.find();
        return res.json({ listServices: allServices });
        // return res.json(services); //! Retorno el usuario
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createServices = createServices;
const updateServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const services = yield Services_1.Services.findOneBy({ id: parseInt(id) }); //! Puedo obtener un usuario
        if (!services)
            return res.status(404).json({ message: "Not Services found" });
        yield Services_1.Services.update({ id: parseInt(id) }, req.body);
        const allServices = yield Services_1.Services.find();
        return res.json({ listServices: allServices });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateServices = updateServices;
const deleteServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield Services_1.Services.delete({ id: parseInt(id) });
        if (result.affected === 0)
            return res.status(404).json({ message: "Services not found" });
        const allServices = yield Services_1.Services.find();
        return res.json({ listServices: allServices });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteServices = deleteServices;
