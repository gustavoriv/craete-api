import { Router } from "express";
// importacion de los controladores
import {updateReservas,anularReservas,pendienteReservas,eliminarReserva,index} from '../controllers/solicitudes.controller.js'

const router=Router();

router.get("/solicitudes", index)

//update
router.put("/update", updateReservas);
// anular reservas
router.put("/anular", anularReservas);

router.put("/pendiente", pendienteReservas);

router.delete("/eliminar", eliminarReserva
);

export default router;