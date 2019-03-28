const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    nombre: {
        type: String
    },
    representante: {
        type: String
    },
    telefono: {
        type: String
    },
    pais: {
        type: String
    },
    direccion: {
        type: String
    },
    userstatus: {
        type: Boolean
    }
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Proyectos", postSchema);