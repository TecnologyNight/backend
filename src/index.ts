import "reflect-metadata"

import app from "./app"
import { AppDataSource } from "./db"
import { PORT } from './config';


async function main (){
try {
    await AppDataSource.initialize()
    console.log('se conecto a la bd');
    app.listen(PORT, ()=>{
        `se ejecuta en el puerto ${PORT}`
    })
} catch (error) {
    console.log(error);
}
}

main();


