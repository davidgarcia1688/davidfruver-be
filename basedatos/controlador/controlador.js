import{ producto} from '../modulos/modulo_producto.js';

// este metodo permite consultar un producto en especifico 
const consultarproducto = async (req, res) => {
    const { idproducto } = req.params;
    try {
        const prod = await producto.findByPk(idproducto);
        res.status(200).json([prod]);
     } catch (error){
        res.status(400).json({mensaje: error});
        }
    };
//este metodo permite consultar todos los productos que tenemos disponibles 
    const consultarproductos = async (req, res) => {
    try {
        const prod = await producto.findAll();
        res.status(200).json(prod);
     } catch (error){
         res.status(400).json({mensaje: error});
      }
};
// este metodo permite almacenar los productos 
    const almacenarproducto = async (req, res) => {
        const { idproducto, nombreproducto, detalleproducto, precioproducto, foto } = req.body;
        try{
            const newproducto = await producto.create({
                idproducto,
                nombreproducto,
                detalleproducto,
                precioproducto,
                foto
});
            res.status(200).json(newproducto);
        }catch (error){
            res.status(400).json({mensaje: error});
        }
    };
// este metodo permite actulizar la lista los productos 
    const actualizarproducto = async (req, res) => {
        const { idproducto} = req.params;
        const { nombreproducto,detalleproducto, precioproducto} =req.body;
        try{
            const oldproducto = await producto.findByPk(idproducto);
            oldproducto.nombreprodcto = nombreproducto;
            oldproducto.detalleproducto = detalleproducto;  
            oldproducto.precioproducto = precioproducto;

            const modproducto = await oldproducto.save();
            res.status(200).json(modproducto);
        }catch (error){
            res.status(400).json({mensaje: error});
        
    }
    };
// este metodo permite eliminar un registro de producto
    const eliminarproducto = async (req, res) => {
        const { idproducto} = req.params;
        
        try{
            const respuesta = await producto.destroy({
                where: {
                    idproducto: idproducto
                }
            });
           res.status(200).json({mensaje: "producto eliminado"});
        }catch (error){
            res.status(400).json({mensaje: "producto no eliminado" + error});
        
    }
       
    };

    export {

        consultarproducto,
        consultarproductos,
        almacenarproducto,
        actualizarproducto,
        eliminarproducto
    }
    

