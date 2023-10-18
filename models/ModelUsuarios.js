import db from "../database/db.js";

import { DataTypes } from "sequelize";

const ModelUsuarios = db.define('usuarios',{
    pass:{type:DataTypes.STRING},
    apellido:{type:DataTypes.STRING},
    nombre:{type:DataTypes.STRING},
    identificacion:{type:DataTypes.STRING},
    destino:{type:DataTypes.STRING},
    nivel:{type:DataTypes.STRING},
    estado:{type:DataTypes.BOOLEAN},
    
})

export default ModelUsuarios