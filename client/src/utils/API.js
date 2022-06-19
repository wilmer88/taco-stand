import axios from "axios";

export default {
  // Gets all ordens
  getOrdens: function() {
    return axios.get("/api/orden");
  },
  // Gets the orden with the given id
  getOrden: function(id) {
    return axios.get("/api/orden/" + id);
  },
  // Deletes the book with the given id
  deleteOrden: function(id) {
    return axios.delete("api/orden/" + id);
  },
  // Saves a book to the database
  saveOrden: function(ordenData) {
    return axios.post("/api/orden", ordenData);
  },
  updateOrden: function(id, ordenData) {
    return axios.put("/api/orden/" + id, ordenData);
  },
  login: function(userData) {
    return axios.post("/api/login/", userData);
  },
  signup: function(userData) {
    return axios.post("/api/signup/", userData);
  }

  // http://localhost:3001
};
