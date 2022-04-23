import axios from "axios";

export default {
  // Gets all books
  getOrdens: function() {
    return axios.get("/api/orden");
  },
  // Gets the book with the given id
  getOrden: function(id) {
    return axios.get("/api/orden/" + id);
  },
  // Deletes the book with the given id
  deleteOrden: function(id) {
    return axios.delete("/api/orden/" + id);
  },
  // Saves a book to the database
  saveOrden: function(ordenData) {
    return axios.post("/api/orden", ordenData);
  },
  upDateOrden: function(ordenData) {
    return axios.put("/api/orden/", ordenData);
  },
  logIn: function(userData) {
    return axios.post("/api/user/", userData);
  },
  signup: function(userData) {
    return axios.post("/api/signup/", userData);
  }


};
