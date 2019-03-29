import axios from 'axios';
//const base_url = CAMBIAR POR URL CUANDO EL PROYECTO ESTE DEPLOYADO
const base_url = "http://localhost:3000";

export const login = (auth, history) => {
    axios.post(`${base_url}/auth/login`, auth)
        .then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            history.push("/")
        })
        .catch(err => {
            console.error(err);
        })
};

export const signup = (auth, history) => {
  axios.post(`${base_url}/auth/signup`, auth)
      .then(res => {
          console.log("res",res)
          history.push("/login")
      })
      .catch(err => {
          console.error("+++>", err.response.data.msg);
      })
};

export const getPosts = (token) => {
    return axios.get(`${base_url}/posts/`,{
        headers: {
            "x-access-token": token
        }
    })
};

export const updateUser = (id, form) => {
    console.log(form);
    let formData = new FormData();
    Object.keys(form).forEach(key => {
        formData.append(key, form[key]);
    });
    axios.patch(`${base_url}/auth/${id}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
        .then(user => {
            console.log(user);
        })
};

export const addProyect = (auth, history) => {
    axios.post(`${base_url}/auth/newProyecto`, auth)
        .then(res => {
            console.log("res",res)
            history.push("/main/admin")
        })
        .catch(err => {
            console.error("+++>", err.response.data.msg);
        })
  };


  export const addInquery = (auth, history) => {
    axios.post(`${base_url}/auth/newIncidencia`, auth)
        .then(res => {
            console.log("res",res)
            history.push("/incidencia")
        })
        .catch(err => {
            console.error("+++>", err.response.data.msg);
        })
  };