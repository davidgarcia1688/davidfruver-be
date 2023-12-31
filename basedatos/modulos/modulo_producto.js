import { DataTypes } from "sequelize";
import { sequelize } from "../dbase.js";

        const producto = sequelize.define('productos', {
             idproducto: {
             type: DataTypes.INTEGER,
             allowNull: true,
             primaryKey: true,
             autoIncrement: true
             },
             nombreproducto: {
             type: DataTypes.STRING
             },
             detalleproducto: {
             type: DataTypes.STRING
             },
             precioproducto: {
             type: DataTypes.INTEGER
             },
             foto: {
               type: DataTypes.TEXT,
               allowNull: true,
             },
        },
    {
      timestamps: false
    });

         export { producto }