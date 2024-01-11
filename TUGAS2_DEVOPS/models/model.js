import {Sequelize, DataTypes} from 'sequelize';
const sequelize = new Sequelize("crud_db", "root", "password", {
    host: 'db',
    dialect: 'mysql'
});
export {sequelize, DataTypes};