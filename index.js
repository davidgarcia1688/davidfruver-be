
import  express  from "express";
import  router from "./basedatos/rutas/rutas.js";
import { sequelize } from "./basedatos/dbase.js";
import { producto } from "./basedatos/modulos/modulo_producto.js";
import cors from 'cors';

// creamos la instancia 
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.set("puerto", 4000);
app.listen(app.get("puerto"), () => {
    console.log(`puerto escuchando ${app.get("puerto")}`);
});
    app.use(express.json());
    
    app.use(router);


