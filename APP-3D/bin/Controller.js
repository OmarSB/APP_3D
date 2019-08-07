const mongoose = require("mongoose");
const User = require("./models/User");
const Asignaturas = require("./models/Asignaturas");
const Tema = require("./models/Temas");
const Actividad = require("./models/Actividad");
class Controller{
    constructor(){
        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect(
                "mongodb+srv://osaucedoborja:@omar1998@cluster0-r5e3c.mongodb.net/APP-3D?retryWrites=true&w=majority",
                {useNewUrlParser:true}
            );
            console.log("conectados a la base de datos")

        }catch(e){
            console.error(e)
        }
    }

    getUsers(res){
        User.find({}, (err, users)=>{
            if(err) throw err;

            res.send( users );
        })
    }

    postUser(user, res){
        const newUser = new User(user)

        newUser.save(function(err,data){
            if (err) throw err;
            if (!data) console.error("error")
            res.send(data)
        })
    }

    updateUser(ids,res){
        User.findByIdAndUpdate(
            ids.user,
            { $push: { "t_actividades": ids.actividad, "t_asignaturas": ids.asignatura } },
            {safe: true, upsert: true, new: true },
            function(err, user) {
                if(err) throw err;
                if(!user) console.log(err);
                res.send(user)
            }
        )
    }

     getUserWithActivity(name, res){
         User.find({nickname1:name}).populate('t_actividades').exec( function(err, user){
            if(err) throw err;
            if(!user) console.log(err);
            res.send(user)
         })
    }

    getUserWithAsignature(id, res){
         User.findById(id).populate('t_asignaturas')
         .select("email nickname1 nickname2 lastname1 lastname2 t_asignaturas -_id")
         .exec( function(err, user){
            if(err) throw err;
            if(!user) console.log(err);
            console.log("the user is", user)
            res.send(user)
         })
    }

    getAsignaturas(res){
        Asignaturas.find({}, (err, asignaturas)=>{
            if(err) throw err;

            res.send( asignaturas );
        })
    }

 postAsignatura(asignatura, res){
        const newAsignatura = new Asignaturas(asignatura)

        newAsignatura.save(function(err,data){
            if (err) throw err;
            if (!data) console.error("error")
            res.send(data)
        })
    }

    updateAsignatura(ids,res){
        Asignatura.findByIdAndUpdate(
            ids.asignatura,
            { $push: { "t_actividades": ids.actividad } },
            {safe: true, upsert: true, new: true },
            function(err, asignatura) {
                if(err) throw err;
                if(!asignatura) console.log(err);
                res.send(asignatura)
            }
        )
    }
    getTemas(res){
        Temas.find({}, (err, temas)=>{
            if(err) throw err;

            res.send( Temas );
        })
    }
     postTema(tema, res){
        const newTema = new Tema(tema)

        newTema.save(function(err,data){
            if (err) throw err;
            if (!data) console.error("error")
            res.send(data)
        })
    }

 postActividad(actividad, res){
         const newActividad = new Actividad(actividad)

        newActividad.save(function(err,data){
            if (err) throw err;
            if (!data) console.error("error")
            res.send(data)
        })
    }

    getActividades(res){
        Actividad.find({}, (err, Actividad)=>{
            if(err) throw err;

            res.send( Actividad );
        })
    }
     updateActividades(ids,res){
        Actividades.findByIdAndUpdate(
            ids.actividades,
            { $push: { "t_actividades": ids.actividad } },
            {safe: true, upsert: true, new: true },
            function(err, actividades) {
                if(err) throw err;
                if(!actividades) console.log(err);
                res.send(actividades)
            }
        )
    }

}

exports.controller = new Controller()