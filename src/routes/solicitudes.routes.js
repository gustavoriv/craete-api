

import { Router } from "express";
// importacion de los controladores
import {getSolicitudes,updateReservas,anularReservas,pendienteReservas,eliminarReserva} from '../controllers/solicitudes.controller.js'

const router=Router();

router.get("/solicidutes", getSolicitudes)

//update
router.put("/update", updateReservas);
// anular reservas
router.put("/anular", anularReservas);

router.put("/pendiente", pendienteReservas);

router.put("/eliminar", eliminarReserva
);

export default router;