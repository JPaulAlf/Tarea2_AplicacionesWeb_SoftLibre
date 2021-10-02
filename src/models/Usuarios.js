const mongoose = require('mongoose');

const Usuarios = mongoose.model(
    "Usuarios", 
    new mongoose.Schema({
        Nombre: String,
        Apellidos: String,
        Fec_nacimiento:{
            type: Date,
            default: Date.now,
        },
        Email: String,
        Estado: Number,
        Fec_creacion:{
            type: Date,
            default: Date.now,
        },
        Fec_modificacion:{
            type: Date,
            default: Date.now,
        }
    })
);

module.exports = Usuarios;