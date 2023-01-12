"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const router = (0, express_1.Router)();
router.post('/save', userControllers_1.createUser);
router.get('/get', userControllers_1.getUser);
router.put('/update/:id', userControllers_1.updateUser);
router.delete("/delete/:id", userControllers_1.deleteUser);
// router.get('/users ', (req, res)=>{
//     res.send('hola  ')
// })
exports.default = router;
