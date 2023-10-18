import express, { request }  from "express";
import { getAllUser,getUser,createUser,updateUser,getAllDependencias} from "../contollers/UserController.js";
import { createExpediente, getAllExpedientes, getOneExpediente, updateExpediente } from "../contollers/ExpedientesController.js";

const router=express.Router();


router.post('/usuarios',getAllUser)
router.post('/usuarios/crea',createUser,)
router.post('/usuarios/:identificacion',getUser)
router.put('/usuarios/actualiza/:identificacion',updateUser)

router.post('/dependencias',getAllDependencias)
router.post('/expedientes/',getAllExpedientes)
router.post('/expedientes/crea',createExpediente,)
router.post('/expedientes/:id',getOneExpediente)
router.post('/expedientes/actualiza/:id',updateExpediente)


/*router.get('/funciones/',getAllfunctions)
router.put('/funciones/:id',updateAllFunctions)

router.post('/',createUser,)
router.put('/:id',updateUser)
router.delete('/:dni',deleteUser);
router.get('/antecedentes/:usuarioId',getAntecedentes)
router.post('/antecedentes',createAntecedentes,)
router.put('/antecedentes/:id',updateAntecedentes)
router.get('/capacitaciones/:usuarioId',getCapacitaciones)
router.post('/capacitaciones',createCapacitaciones,)
router.put('/capacitaciones/:id',updateCapacitaciones)*/
export default router;