import axios from "axios";

export default {
    getOrdens: function() {
        return axios.get("/api/orden")
    },
    getOrden: function(id) {
        return axios.get("/api/orden/"+ id)
    },
    saveOrden: function(ordenData) {
        return axios.post("/api/orden", ordenData);
    },

    deleteOrden: function(id) {
        return axios.delete("/api/orden/" + id)
    },

  
    putOrden: function(id,ordenData) {
        return axios.put("/api/orden/" + id, ordenData);
      },

      saveUser: function(userNamepassword) {
        return axios.post("/api/signup", userNamepassword);
    }
};
// "http://localhost:3001/api/orden"