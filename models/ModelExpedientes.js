import db from "../database/db.js";

import { DataTypes } from "sequelize";

const ModelUsuarios = db.define('expedientes',{
   
    usuarioID:{type:DataTypes.STRING},
    fechaEntro:{type:DataTypes.STRING},
    fechaSalio:{type:DataTypes.STRING},
    descripcion:{type:DataTypes.STRING},
    esMesaGeneral:{type:DataTypes.BOOLEAN},
    createdAt:{type:DataTypes.DATE},
    updatedAt:{type:DataTypes.DATE}  
})

export default ModelUsuarios