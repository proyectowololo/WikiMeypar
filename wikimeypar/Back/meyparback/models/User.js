const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    email: {
        type: String
    },
    telefono: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    usertype :{
        type: String,
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

module.exports = mongoose.model("User", postSchema);