const mongoose = require('mongoose');
const db = require("./models");

mongoose.connect("mongodb://localhost/db-tarea-prueba").
     then(() => console.log('Conexion a la base de datos exitosa'))
    .catch(err => console.log('Salto ERROR en la conexion', err));


const crearUsuario = function(entradaId, usuario) {
     return db.Usuarios.create(usuario).then(docUsuario => {
          return db.Entradas.findByIdAndUpdate(
               entradaId,
               { $push: { FK_usuario: docUsuario._id } },
               { new: true, useFindAndModify: false }
          );
     });
};

const getEntradaWithPopulate = function(id) {
     return  db.Entradas.findById(id).populate("FK_usuario");
   };

const run = async function() {
     var entrada = await db.Entradas.create({
          Titulo: "Ingeniería en Software",
          Descripcion: "Desarrollador de aplicaciones web y moviles",
          Detalle: "Nivel de Bachillerato",
          Estado: 1,
     });
   
     entrada = await crearUsuario(entrada._id, {
          Nombre: "John Paul", 
          Apellidos: "Alfaro Carballo" ,
          Fec_nacimiento: Date.parse("Aug 1, 1995"),
          Email: "jalfaroca@est.utn.ac.cr",
          Estado: 1,
     });
   
     entrada = await crearUsuario(entrada._id, {
          Nombre: "Juan ",
          Apellidos: "Santamaria" ,
          Fec_nacimiento: Date.parse("Aug 20, 1895"),
          Email: "santamaria@est.utn.ac.cr",
          Estado: 1,
     });

     entrada = await getEntradaWithPopulate(entrada._id);
     console.log("\n>> Populated Entrada:\n", entrada);
   };

run(); 