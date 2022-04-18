import axios from "axios";

export default {

    saveOrden: function(ordenData) {
        return axios.post("/api/orden", ordenData);
    },
    deleteOrden: function(id) {
        return axios.delete("h/api/orden/" + id)
    },
 
    getOrdens: function() {
        return axios.get("h/api/orden")
    },
    getOrden: function(id) {
        return axios.get("/api/orden/"+ id)
    },

  
    putOrden: function(id,ordenData) {
        return axios.put("/api/orden/" + id, ordenData);
      },

      saveUser: function(userData) {
        return axios.post("/api/signup", userData);
    },
}
// "http://localhost:3001/api/orden"