const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    descripcion: {
        type: String
    },
    status: {
        type: Boolean
    }
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("RolesUsuarios", postSchema);