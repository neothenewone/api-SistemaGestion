import db from "../database/db.js";

import { DataTypes } from "sequelize";

const ModelUsuarios = db.define('mov_expedientes',{
    expedienteID:{type:DataTypes.STRING},
    usuarioID:{type:DataTypes.STRING},
    createdAt:{type:DataTypes.DATE},
    updatedAt:{type:DataTypes.DATE},
    observacion:{type:DataTypes.STRING}
    
})

export default ModelUsuarios