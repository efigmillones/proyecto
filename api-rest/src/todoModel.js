'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;
// Segenera el esquema base
const TodoSchema = new Schema({
    CATEGORIA: String,
    CodIDProveedor: String,
    CODIGO: String,
    COSTO_FINANCIERO: String,
    DESCRIPCION: String,
    ESTADO: String,
    IDCATEGORIA: String,
    IDLINEA: String,
    'IMAGEN 150': String,
    'IMAGEN 450': String,
    LINEA: String,
    MARCA: String,
    NOMBRE: String,
    NUMERO_PARTE: String,
    'PRECIO MINIMO': String,
    'PRECIO VENTA': String,
    TIPOFABRICANTE: String,
    UEN: String,
    UNITID: String
});

// const TodoSchema = new Schema({
//     edad   : String,
//     nombre : String
//     });

// create and export model
module.exports = mongoose.model("todoModel", TodoSchema);

