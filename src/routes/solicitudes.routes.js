

import { Router } from "express";
// importacion de los controladores
import {getSolicitudes,updateReservas,anularReservas,pendienteReservas} from '../controllers/solicitudes.controller.js'

const router=Router();

router.get("/solicitudes", getSolicitudes)

//update
router.put("/update", updateReservas);
// anular reservas
router.put("/anular", anularReservas);

router.put("/pendiente", pendienteReservas);

router.put("/eliminar", eliminarReservas);

export default router;