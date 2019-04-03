const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const upload = require("../helpers/multer");
const auth = require("../helpers/auth");
const Proyectos = require("../models/newProyecto");
const RolesUss = require("../models/Rol");
const Incidencias = require("../models/newIncidencia");

router.post("/login", async (req, res) => {
  const user = await User.findOne({email: req.body.email});
  if(!user) return res.status(404).json({msg: "Email no es valido"});
  let validPassword = bcrypt.compareSync(req.body.password, user.password);
  if(!validPassword) return res.status(500).json({msg:"La contra es incorrecta"});
  const token = jwt.sign(
      {id: user._id},
      process.env.SECRET,
      {
      expiresIn: 8600
  });
  delete user._doc.password;
  console.log(user);
  res.status(200).json({user, token});
});


router.post("/signup", (req, res) => {
  if(req.body.password !== req.body.confirmPassword) return res.status(500).json({msg: "Las contraseñas no coinciden"});
  const salt = bcrypt.genSaltSync(256);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,       
      nombre: req.body.name,
      apellidos: req.body.surname,
      telefono: req.body.telefono,
      userstatus: false,
      usertype: 'Undefined'
  })
      .then(() => {
          res.status(201).json({msg: "Usuario creado con éxito"})
      })
      .catch(err => {
          res.status(500).json({err, msg: "No se pudo crear"})
      })

});

router.post("/newProyecto", (req, res) => {
    Proyectos.create({
        nombre: req.body.nombre,
        representante: req.body.representante,
        telefono: req.body.telefono,
        pais: req.body.pais,
        direccion: req.body.direccion,
        projectstatus: true,
    })
        .then(() => {
            res.status(201).json({msg: "Proyecto creado con éxito"})
        })
        .catch(err => {
            res.status(500).json({err, msg: "No se pudo crear el Proyecto"})
        })
  
  });

  router.post("/newRol", (req, res) => {
    RolesUss.create({
        cons: req.body.id_cons,
        descripcion: req.body.descripcion,        
        status: true,
    })
        .then((datos) => {
            res.status(201).json({msg: "Rol creado con éxito"});
        })
        .catch(err => {
            res.status(500).json({err, msg: "No se pudo crear el Rol"})
        })
    });

  router.post("/newIncidencia", (req, res) => {
    Incidencias.create({
        titulo: req.body.titulo,
        incidencia: req.body.incidencia,
        archivos: req.body.archivos,
        usuario: req.body.usuario,
        consecutivo: req.body.consecutivo,
    })
        .then(() => {
            res.status(201).json({msg: "Incidencia creada con éxito"})
        })
        .catch(err => {
            res.status(500).json({err, msg: "No se pudo crear la Incidencia"})
        })
  
  });

router.get("/viewRol", (req,res) => {
   RolesUss.find({},(err,datos) =>{       
        //console.log(datos);
        res.json(datos);
    });      
   
  });

router.post("/delRol", (req,res)=>{    
    RolesUss.findByIdAndRemove(req.body._id,(err)=>{
        if(!err) res.status(201).json({msg: "Rol eliminado Currectamente"});        
    });       
});

router.post("/statusRol", (req,res)=>{    
    RolesUss.findByIdAndUpdate(req.body._id,{status:req.body.status},(err)=>{
        if(!err) 
            res.status(201).json({msg: "Rol actualizado Currectamente"});        
        else
            res.status(500).json({err, msg: "No se pudo actualizar el Rol"})
    });       
});

module.exports = router;