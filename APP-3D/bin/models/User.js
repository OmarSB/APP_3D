const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    nickname1: String,
    nickname2: String,
    lastname1: String,
    lastname2: String,
    password: String,
    t_actividades: [
        {
            type: Schema.Types.ObjectId,
            ref:"Actividad"
        }
    ],
    t_asignaturas:[
        {
            type: Schema.Types.ObjectId,
            ref:"Asignaturas"
        }
    ]

});


var User = mongoose.model("User", UserSchema);
module.exports = User;

