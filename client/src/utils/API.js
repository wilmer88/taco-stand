import axios from "axios";
export default {
  
    
      
    deleteOrden: function(id) {
        return axios.delete("/orden/" + id)
    },
    

    getOrden: function(id) {
        return axios.get("/orden/"+ id)
    },
    putOrden: function(id,ordenData) {
        return axios.put("/api/orden/" + id, ordenData);
      },

    logUser: function(NnP){
        return axios.post("/login", NnP);
    },
    saveUser: function(userNamepassword) {
        return axios.post("/api/signup", userNamepassword);
    },
    saveOrden: function(ordenData) {
        return axios.post("/api/orden", ordenData);
    },
    getOrdens: function() {
        return axios.get("/api/orden")
    },
};
// http://localhost:3001