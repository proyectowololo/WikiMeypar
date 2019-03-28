const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    numService: {type: Int},
    service: {type: Int},
    proyecto: {type: String},
    representado: {type: String},
    telefono: {type: String},
    direccion: {type: String},
    pais:{type: String},
    tecnico: {type: String},
    lugar: {type: String},
    estado: {type: String},
    inspeccion: {type: Boolean},
    arranqueInicial: {type: Boolean},
    programacion: {type: Boolean},
    serviceEmergencia:{type: Boolean},
    entregaEquipo: {type: Boolean},
    otro:{type:Boolean},
    otroDescripcion: { type:String},
    descripcionFalla : {type: String},
    materiales: {type:String},
    descripcioServicio: {type:String},
    observaciones:{type:String},
    seguimiento:{type:Boolean},
    reparacionMenor:{type:Boolean},
    reparacionMayor:{type:Boolean},
    tiempoTrabajado:{type:String},
    representanteMeypar:{type:String},
    representanteCliente:{type:String}
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Boleta", postSchema);