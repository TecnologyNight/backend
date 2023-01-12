"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Influencer_1 = require("./entities/Influencer");
// import { Photo } from './entities/Photo';
const Services_1 = require("./entities/Services");
// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "1234",
//     database: "huachowoman",
//     entities: [ User, Influencer,Services ],
//     logging: true,
//     synchronize: true, //! Puedo observar todo el codigo que se genera
// })
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "huachowoman",
    entities: [User_1.User, Influencer_1.Influencer, Services_1.Services],
    logging: true,
    synchronize: true, //! Puedo observar todo el codigo que se genera
});
//! Para desarrollo la entities es buena, pero para PRODUCCION
//! Se recomienda migrations
