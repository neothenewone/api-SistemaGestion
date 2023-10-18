import db from "../database/db.js" //importo la db para poder usar el squelice
import base64  from 'base-64'
import { Identidades } from "../routes/things/cosas.js"
import ModelUsuarios from "../models/ModelUsuarios.js"
import ModelDependencias from "../models/ModelDependencias.js"
//**Metodos para el crud **/



const comprueba=(req)=>{
    
   const [version,magicWord] =base64.decode(req.headers.authorization.trim()
    .replace(/Basic\s+/i, '')).split(':');
    
    if(magicWord===Identidades().magicword&& version===Identidades().version){
    return true;}
    else{
        return false

    }

}

export const getAllDependencias=async(req,res)=>{
    try {
        const inscriptos= await ModelDependencias.findAll()
            res.json(inscriptos);}
       
    catch (error) {
        res.json({message:error.message})
        }
    }
// Mostrar todos los registros

export const getAllUser=async(req,res)=>{
try {
    const inscriptos= await ModelUsuarios.findAll()
        res.json(inscriptos);}
   
catch (error) {
    res.json({message:error.message})
    }
}
export const getUser=async(req,res)=>{
    try {
       
        const inscriptos= await ModelUsuarios.findOne({
            where: {identificacion:req.params.identificacion}
           
        })
        if(inscriptos!==null){
            res.json(inscriptos);
        }
        else{
            res.json(false);
        }
    } catch (error) {
        res.json({message:error.message})
        }
    }
    export const createUser=async(req,res)=>{
        let transaction;
       
        try {
            if(comprueba(req)){
           transaction = await db.transaction();
           const inscripto= await ModelUsuarios.create(req.body,{transaction})
           res.json({
            "message":"Registro creado correctamente!!", 
             "ID": inscripto[0]
            })
            await transaction.commit(); 
          
        } else{res.sendStatus(404)}}catch (error) {
            res.json({message:error.message})
            console.log(error)
            if(transaction) {
                await transaction.rollback();
             }
            }
        }
        export const updateUser=async(req,res)=>{
            let transaction;
            try {
               
                transaction = await db.transaction();
            await ModelUsuarios.update(req.body,{
            where: {identificacion:req.params.identificacion}
            },await transaction.commit())
            res.json({
            "message":"Registro actualizado correctamente!!"
            })    
            }catch (error) {
            res.json({message:error.message})
            if(transaction) {
                await transaction.rollback();
             }
                }
            }

