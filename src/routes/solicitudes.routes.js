import { Router } from "express";
// importacion de los controladores
import {updateReservas,anularReservas,pendienteReservas,ElimiReserva,getSolicitudes} from '../controllers/solicitudes.controller.js'

const router=Router();

router.get("/solicitudes", getSolicitudes)

//update
router.put("/update", updateReservas);
// anular reservas
router.put("/anular", anularReservas);

router.put("/pendiente", pendienteReservas);

router.delete("/eliminar", ElimiReserva);

export default router;