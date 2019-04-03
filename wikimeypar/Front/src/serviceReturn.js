import axios from 'axios';
//const base_url = CAMBIAR POR URL CUANDO EL PROYECTO ESTE DEPLOYADO
const base_url = "http://localhost:3000";

export const verRol = () => {
    var info = axios.get(`${base_url}/auth/viewRol`)
    .then(res =>{
      return res;
    })
    .catch(err => {
      console.log(err);
    });    
    return info;
  };