import Sequelize from "sequelize";
const sequelize = new Sequelize ("davidfruver", "root","", {
    host: "localhost",
    dialect: "mysql"
});
export { sequelize }