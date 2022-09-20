import axios from "axios";
const clientApiCalls =
{
  getOrdens: function() {
    return axios.get("http://localhost:3001/api/orden");
  },
  saveOrden: function(ordenData) {
    return axios.post("http://localhost:3001/api/orden", ordenData);
  },
   // Gets all ordens

  // Gets the orden with the given id
  getOrden: function(id) {
    return axios.get("http://localhost:3001/api/orden/" + id);
  },

  // Deletes the orden with the given id
  deleteOrden: function(id) {
    // return axios.delete("api/orden/" + id);
    return axios.delete("http://localhost:3001/api/orden/" + id);
  },
  // Saves a orden to the database

  updateOrden: function(id, ordenData) {
    return axios.put("http://localhost:3001/api/orden/" + id, ordenData);
  },
  login: function(userData) {
    return axios.post("http://localhost:3001/api/login/", userData);
  },
  signup: function(userData) {
    return axios.post("http://localhost:3001/api/signup/", userData);
    },
 
};

export default  clientApiCalls
 // http://localhost:3001
