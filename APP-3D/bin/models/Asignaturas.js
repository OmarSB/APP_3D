const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AsignaturasSchema = new Schema({
    id_asignatura: String,
    nombre: String,
    int_horaria: String,
    unidades: String,
    user:{
        type: Schema.Types.ObjectId,
            ref:"user"
    }
});

var Asignaturas = mongoose.model("Asignaturas", AsignaturasSchema);
module.exports = Asignaturas;