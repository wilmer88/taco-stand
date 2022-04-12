import axios from "axios";

export default {
    saveOrden: function(ordenData) {
        return axios.post("http://localhost:3001/api/orden", ordenData);
    },
    getOrdens: function() {
        return axios.get("http://localhost:3001/api/orden")
    },
    getOrden: function(id) {
        return axios.get("http://localhost:3001/api/orden/" + id)
    },
    putOrden: function(id,ordenData) {
        return axios.put("http://localhost:3001/api/orden/" + id, ordenData);
      }
}