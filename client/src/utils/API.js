import axios from "axios";

export default {
    saveOrden: function(ordenData) {
        return axios.post("/api/orden", ordenData);
    },
    getOrdens: function() {
        return axios.get("/api/orden/")
    },
    getOrden: function(id) {
        return axios.get("/api/orden/" + id)
    },
    deleteOrden: function(id) {
        return axios.get("/api/orden" + id)
    },
    putOrden: function(id,ordenData) {
        return axios.put("/api/orden/" + id, ordenData);
      }
}