import { Router } from "express";
// importacion de los controladores
import {getUsuarios} from '../controllers/Usuarios/RegistrasUsuarios.js'

const router=Router();

router.get("/Usuarios", getUsuarios)

//update
//router.put("/update", updateReservas);
// anular reservas
//router.put("/anular", anularReservas);

//router.put("/pendiente", pendienteReservas);

//router.delete("/eliminar", ElimiReserva);

//router.post("/Agregar", agregaUsuarios);

//router.delete("/consulta/:q", ConsulReserva);

export default router;