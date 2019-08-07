const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadSchema = new Schema({
    id_actividad: String,
    nombre: String,
    recurso: String,
    descripcion: String,
    fecha_inicio: String,
    ficha_final: String,
    id_temas: String
});

var Actividad = mongoose.model("Actividad", ActividadSchema);
module.exports = Actividad;