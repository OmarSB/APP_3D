const express = require("express");
const app = express();
const { controller } = require("./Controller");
const bodyParser = require("body-parser");
app.use(bodyParser.json())

app.set('json spaces', 2)


app.get("/", (req, res )=>{
    res.send("BIENVENIDO APP 3-D");
})

app.get("/users", (req, res)=>{
    /*let users = [
        {name:"omar", password:"llll"},
        {name:"william", password:"jjjj"},
    ]

    res.send(users);*/
    controller.getUsers(res);
})

app.post("/users", (req, res) =>{
    let user = {
        email: req.body.email,
        nickname1: req.body.nickname1,
        nickname2: req.body.nickname2,
        lastname1: req.body.lastname1,
        lastname2: req.body.lastname2,
        password: req.body.password
    }
    controller.postUser(user, res);
});

app.get("/user/:name", (req, res) =>{
    controller.getUserWithActivity(req.params.name,res)
})

app.get("/usuario/:id", (req, res) =>{
    console.log(req.params.id)
    controller.getUserWithAsignature(req.params.id,res)
})


app.post("/user/:id/:actividad/:asignatura", (req, res) => {

    let ids = {
        user: req.params.id,
        actividad: req.params.actividad === "null" ? null : req.params.actividad,
        asignatura: req.params.asignatura === "null" ? null : req.params.asignatura
    }

   controller.updateUser(ids, res);
})

app.get("/asignaturas",  (req, res)=>{
    controller.getAsignaturas(res)
})

app.post("/asignatura", (req, res)=>{
    var asignatura = {
        id_asignatura: req.body.id_asignatura,
        nombre: req.body.nombre,
        int_horaria: req.body.int_horaria,
        unidades: req.body.unidades,
    }
    controller.postAsignatura(asignatura,res);
})
app.post("/tema", (req,res)=>{
    var tema={
    id_tema:req.body.id_tema,
    nombre: req.body.nombrre,
    contenido: req.body.contenido,
    id_asignatura: req.body.id_asignatura
    }
    controller.postTema(tema, res)

})
app.post("/actividad", (req, res)=>{
    var actividad = {
        nombre: req.body.nombre,
        recurso: req.body.recurso,
        descripcion: req.body.descripcion,
        fecha_inicio: req.body.fecha_inicio,
        fecha_final: req.body.fecha_final
    }
    controller.postActividad(actividad, res);

})
app.post("/temas", (req, res)=>{
    console.log(req, body);
    res.send('ok')
})
app.get("/asignaturas/:sociales", (req, res )=>{
    var sociales = req.params.sociales;
    console.log(sociales)
    res.send("Welcome to Asignature:GEOGRAFIA");
})
app.get("/temas/:mapas", (req, res )=>{
    var mapas = req.params.mapas;
    console.log(mapas)
    res.send("Welcome to Asignature:SOCIALES");
})
app.get("/recurso/:geografia", (req, res )=>{
    var geografia = req.params.geografia;
    console.log(geografia)
    res.send("Welcome to RECURSO");
})
app.get("/users/:nombre", (req, res )=>{
    var nombre = req.params.nombre;
    console.log(nombre)
    res.send("Welcome to APP_3D");
})
app.get("/actividad/:idclima", (req, res )=>{
    var idclima = req.params.idclima;
    console.log(idclima)
    res.send("Welcome to CLIMA");
})
app.get("/actividad/:nombre", (req, res )=>{
    var nombre = req.params.nombre;
    console.log(nombre)
    res.send("Welcome to CLIMA");
})
app.get("/actividades",  (req, res)=>{
controller.getActividades(res)
})

app.get("/temas",  (req, res)=>{
controller.getTemas(res)
})

exports.app = app;