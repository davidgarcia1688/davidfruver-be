import {Router} from "express";

import { consultarproducto,
         consultarproductos,
         almacenarproducto,
         actualizarproducto,
         eliminarproducto 
        }from "../controlador/controlador.js";
        
const router = Router();
//router.consultar("/",(req,res) => {
// res.send("Get pagina Express");
//});
router.get("/productos/:idproducto", consultarproducto);
router.get("/productos", consultarproductos);
router.post("/productos", almacenarproducto);
router.put("/productos/:idproducto",  actualizarproducto);
router.delete("/productos/:idproducto", eliminarproducto);

export default router;


