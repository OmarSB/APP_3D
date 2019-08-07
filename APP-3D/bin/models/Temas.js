const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemasSchema = new Schema({
    id_tema: String,
    nombre: String,
    contenido: String,
    id_asignatura: String
});

var Temas = mongoose.model("Tema", TemasSchema);
module.exports = Temas;