import express from "express";
import cors from 'cors';
import db from "./database/db.js"
import userRoutes from './routes/route.js'
const app= express()
const port=9833


app.use(cors())

app.use(express.json())
app.use('/expedientes',userRoutes)


try {
    await db.authenticate()
    console.log('Coneccion exitosa a la DB' )
    app.listen(
        port,()=>{
       
    })
} catch (error) {
    console.log(`No se conecto!`)
   
}

        
   


