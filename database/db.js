import { Sequelize } from "sequelize";
import { Identidades } from "../routes/things/cosas.js";
const db=new Sequelize(Identidades().base_de_datos,Identidades().usuario,Identidades().password,{
    host:'127.0.0.1',
    dialect:'mysql'
/*
const db=new Sequelize('isepsantafe_ingreso2024','isepsantafe_ingreso2024','Iamneo2112@',{
    host:'127.0.0.1',
    dialect:'mysql'*/
});

export default db;
