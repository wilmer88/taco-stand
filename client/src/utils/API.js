import axios from "axios";

export default {


    deleteOrden: function(id) {
        return axios.delete("/api/orden/" + id)
    },
    saveOrden: function(ordenData) {
        return axios.post("/api/orden", ordenData);
    },
    getOrdens: function() {
        return axios.get("/api/orden")
    },
    getOrden: function() {
        return axios.get("/api/orden/"+ id)
    },
  
    putOrden: function(id,ordenData) {
        return axios.put("/api/orden/" + id, ordenData);
      }
}