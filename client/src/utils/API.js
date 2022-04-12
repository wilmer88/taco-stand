import axios from "axios";

export default {
    // getOrden: function(id) {
    //     return axios.get("http://localhost:3000/api/orden/") + id)
    // },

    deleteOrden: function(id) {
        return axios.delete("/api/orden/" + id)
    },
    saveOrden: function(ordenData) {
        return axios.post("/api/orden", ordenData);
    },
    getOrdens: function() {
        return axios.get("/api/orden")
    },
  
    putOrden: function(id,ordenData) {
        return axios.put("/api/orden/" + id, ordenData);
      }
}