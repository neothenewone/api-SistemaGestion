import db from "../database/db.js";

import { DataTypes } from "sequelize";

const ModelDependencias = db.define('dependencias',{
   
    nombre:{type:DataTypes.STRING},
    descripcion:{type:DataTypes.STRING},
    createdAt:{type:DataTypes.DATE},
    updatedAt:{type:DataTypes.DATE}  
})

export default ModelDependencias