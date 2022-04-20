import axios from "axios";
export default {
  
    putOrden: function(id,ordenData) {
        return axios.put("/api/orden/" + id, ordenData);
      },
      
    deleteOrden: function(id) {
        return axios.delete("/api/orden/" + id)
    },
    

    getOrden: function(id) {
        return axios.get("/api/orden/"+ id)
    },

    logUser: function(NnP){
        return axios.post("/api/login", NnP);
    },
    saveUser: function(userNamepassword) {
        return axios.post("/api/signup", userNamepassword);
    },
    saveOrden: function(ordenData) {
        return axios.post("/api/orden", ordenData);
    },
    getOrdens: function() {
        return axios.get("http://localhost:3001/api/orden")
    },
};
// http://localhost:3001