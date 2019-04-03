const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    titulo: {
        type: String
    },
    incidencia: {
        type: String
    },
    archivos: {
        type: String
    },
    usuario: {
        type: String
    },
    consecutivo: {
        type: Number
    }
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Incidencias", postSchema);