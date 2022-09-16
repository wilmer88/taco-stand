import axios from "axios";

export default {
  // Gets all ordens
  getOrdens: function() {
    return axios.get("http://localhost:3001/api/orden");
  },
  // Gets the orden with the given id
  getOrden: function(id) {
    return axios.get("http://localhost:3001/api/orden/" + id);
  },
  // Deletes the orden with the given id
  deleteOrden: function(id) {
    // return axios.delete("api/orden/" + id);
    return axios.delete("localhost:3001/api/orden/" + id);

  },
  // Saves a orden to the database
  saveOrden: function(ordenData) {
    return axios.post("localhost:3001/api/orden", ordenData);
  },
  updateOrden: function(id, ordenData) {
    return axios.put("localhost:3001/api/orden/" + id, ordenData);
  },
  login: function(userData) {
    return axios.post("localhost:3001/api/login/", userData);
  },
  signup: function(userData) {
    return axios.post("localhost:3001/api/signup/", userData);
  }

 
};
 // http://localhost:3001
