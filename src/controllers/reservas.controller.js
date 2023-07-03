import { pool } from "../db.js"; //conexion  a la base de datos

export const getReservas = async (req, res) => {
  console.log(req.params.id);

  try {
    const [rows] = await pool.query(
      `SELECT * from Reservas where Alumno like '%${req.params.id}%' `
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
};

export const crearReservas = async (req, res) => {
  try {
    const { alumno, fecha, estado } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    console.log("router", alumno, fecha, estado);
    const [rows] = await pool.query(
      "INSERT INTO Reservas (Alumno,Fecha,Estado) VALUES (?, ?, ?)", //creamos el script para cargar los datos
      [alumno, fecha, estado]
    );
    res.status(201).json({ alumno, fecha, estado }); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "error al tratar de guardar" });
  }
};

export const eliminarReserva = async (req, res) => {
  try {
    const { id } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian

    const [rows] = await pool.query(
      "DELETE FROM Reservas WHERE id_reserva=?", //creamos el script para cargar los datos
      [id]
    );
    res.status(201).json({ id }); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "Dato Elimminado" });
  }
};

//actualizar

export const updateReservas = async (req, res) => {
  try {
    const { alumno, fecha, estado, id } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    //console.log("update", alumno, fecha, estado, id);

    let otraf = fecha;
    console.log("otra fecga", otraf);

    const [rows] = await pool.query(
      `UPDATE Reservas SET Alumno="${alumno}",Fecha="${fecha}",Estado="${estado}" WHERE id_reserva="${id}"; ` //creamos el script para cargar los datos
    );
    res.status(201).json({ alumno, fecha, estado, id }); //Enviamos el estado al cliente
  } catch (error) {
    return res.status(500).json({ message: "error al tratar de actualizar" });
  }
};

export const infrome = async (req, res) => {
  try {
    const { carrera, fechad, fechah, estado } = req.body; //el body req es lo que obtenemos del cliente osea los datos que se envian
    //console.log("update", alumno, fecha, estado, id);

    console.log("first", carrera, fechad, fechah,estado);
    const [rows] = await pool.query(
      ` 
      SELECT CASE i.estado 
WHEN 1 THEN 'De vuelto' 
when 2 then 'No devueto'end as estado,
CASE i.carrera WHEN 1 THEN 'Ingenieria Informatica'
when 2 then 'Derecho'
when 3 then 'Contabilidad'
end as carrera,
 DATE_FORMAT( i.fechah, '%d/%m/%Y') as FechaSTR 
FROM informe i WHERE i.carrera="${carrera}" and i.fechad<="${fechad}" and i.fechah>="${fechah}" and i.estado="${estado}";
      
      ` //creamos el script para cargar los datos
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "error para obtener" });
  }
};
