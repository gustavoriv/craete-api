import { Router } from "express";
import {
  getReservas,
  crearReservas,
  eliminarReserva,
  updateReservas,
  infrome,
  pendienteReservas,
  anularReservas,
  
} from "../controllers/reservas.controller.js";

const router = Router();

// GET todas las reservas
router.get("/reservas/:id", getReservas);

router.post("/ingresar", crearReservas); //Roteo de los metodo -> dicho metodo llama a una funcion

router.delete("/ingresar", eliminarReserva)
router.post("/informe", infrome)

//update
router.put("/update", updateReservas);

// rutas de reservas
router.delete("/eliminar", eliminarReserva);
//update
router.put("/update", updateReservas);
// anular reservas
router.put("/anular", anularReservas);

router.put("/pendiente", pendienteReservas);



export default router;
