import axios from "axios";

export default {
    saveUser: function(userNamepassword) {
        return axios.post("/api/signup", userNamepassword);
    },
 
    putOrden: function(id,ordenData) {
        return axios.put("/api/orden/" + id, ordenData);
      },

    deleteOrden: function(id) {
        return axios.delete("/api/orden/" + id)
    },
    getOrden: function(id) {
        return axios.get("/api/orden/"+ id)
    },

    saveOrden: function(ordenData) {
        return axios.post("/api/orden", ordenData);
    },
    getOrdens: function() {
        return axios.get("/api/orden")
    },
};
// http://localhost:3001