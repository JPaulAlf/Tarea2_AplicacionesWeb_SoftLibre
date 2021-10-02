const mongoose = require('mongoose');

const Entradas = mongoose.model(
    "Entradas", 
    new mongoose.Schema({
        Titulo: String,
        Descripcion: String,
        Detalle: String,
        Estado: Number,
        FK_usuario:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Usuarios',
        }],
        Fec_creacion:{
            type: Date,
            default: Date.now,
        },
        Fec_modificacion:{
            type: Date,
            default: Date.now,
        },
    })
);

module.exports = Entradas;