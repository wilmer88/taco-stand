import axios from "axios";
const clientApiCalls =
{
getOrdens: function() {
    return axios.get("/api/orden");
  },
  saveOrden: function(ordenData) {
    return axios.post("/api/orden", ordenData);
  },
  getOrden: function(id) {
    return axios.get("/api/orden/" + id);
  },
  deleteOrden: function(id) {
    return axios.delete("/api/orden/" + id);
  },
  updateOrden: function(id, ordenData) {
    return axios.put("/api/orden/" + id, ordenData);
  },
  login: function(userData) {
    return axios.post("/api/login/", userData);
  },
  signup: function(userData) {
    return axios.post("/api/signup/", userData);
    },
    makeTacoPayment: function(token, addresses){
      return axios.post("/api/payment/", token, addresses);
         },
        paidUpdate: function(id,paidData){
          return axios.put("/api/payment/" + id, paidData)
        },

        apiSearch: function(nombreDeOrden){
          return axios.get("/api/searcho", nombreDeOrden)
        },
};

export default  clientApiCalls
 // http://localhost:3001
