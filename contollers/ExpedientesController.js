import db from "../database/db.js" //importo la db para poder usar el squelice
import base64  from 'base-64'
import { Identidades } from "../routes/things/cosas.js"
import ModelExpedientes from "../models/ModelExpedientes.js"
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
// Mostrar todos los registros
export const getAllExpedientes=async(req,res)=>{

try {
      
   if(comprueba(req)){
    const inscriptos= await ModelExpedientes.findAll()
        res.json(inscriptos);}
   else{
   res.sendStatus(404)
   }
    }
   
catch (error) {
    res.json({message:error.message})
    }
}
export const getOneExpediente=async(req,res)=>{
    try {
       
        const inscriptos= await ModelExpedientes.findOne({
            where: {id:req.params.id}
           
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
    export const createExpediente=async(req,res)=>{
        let transaction;
       
        try {
            if(comprueba(req)){
           transaction = await db.transaction();
           const inscripto= await ModelExpedientes.create(req.body,{transaction})
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
        export const updateExpediente=async(req,res)=>{
            let transaction;
            try {
                if(comprueba(req)){
                transaction = await db.transaction();
            await ModelExpedientes.update(req.body,{
            where: {id:req.params.id}
            },await transaction.commit())
            res.json({
            "message":"Registro actualizado correctamente!!"
            })    
            }else{res.sendStatus(404)}} catch (error) {
            res.json({message:error.message})
            if(transaction) {
                await transaction.rollback();
             }
                }
            }

