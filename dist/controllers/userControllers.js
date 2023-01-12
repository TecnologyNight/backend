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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const User_1 = require("../entities/User");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body, 'zinedine get');
        const users = yield User_1.User.find();
        return res.json(users);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield User_1.User.findOneBy({ id: parseInt(id) });
        if (!user)
            return res.status(404).json({ message: "User not found" });
        return res.json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname } = req.body;
        const user = new User_1.User(); //! Estoy creando un nuevo usuario
        user.firstname = firstname;
        user.lastname = lastname;
        yield user.save(); //! Guardo el usuario
        return res.json(user); //! Retorno el usuario
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield User_1.User.findOneBy({ id: parseInt(id) }); //! Puedo obtener un usuario
        if (!user)
            return res.status(404).json({ message: "Not user found" });
        //!Asi tambien puedo editar una propiedad
        // user.firstname ='Nuevo nombe'
        // user.lastname = 'nuevo apellido'
        // user.save() //* Se guarda la modificacion. Es necesario este metodo
        //! Otra forma de editar algunas propiedades
        // await User.update({id: parseInt(id)},{
        //     firstname: req.body.firstname
        // })
        // * Observacion: req.body Tambien sirve para actualizar parcial. osea si es un solo dato que deseas actualizar !!!!!!!!!!!!!!!!!!!
        yield User_1.User.update({ id: parseInt(id) }, req.body); //!Edita todos los campos del body si estan con el nismo nombre
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield User_1.User.delete({ id: parseInt(id) });
        if (result.affected === 0)
            return res.status(404).json({ message: "User not found" });
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteUser = deleteUser;