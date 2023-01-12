import {DataSource} from 'typeorm';
import { User } from './entities/User';
import { Influencer } from './entities/Influencer';
// import { Photo } from './entities/Photo';
import { Services } from './entities/Services';

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

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "huachowoman",
    entities: [ User, Influencer,Services ],
    logging: true,
    synchronize: true, //! Puedo observar todo el codigo que se genera
})

//! Para desarrollo la entities es buena, pero para PRODUCCION

//! Se recomienda migrations