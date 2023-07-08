import { pool } from "../db.js";

export const index = (req, res) =>
  res.json({ message: "Api de prueba para la biblioteca" });

export const ping = async (req, res) => {
  const [result] = await pool.query("SELECT * from reservas");
  res.json(result);
};
