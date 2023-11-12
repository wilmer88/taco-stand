import axios from "axios";
const clientApiCalls =
{
  findUser: function(userName) {
    return axios.get("/api/myorders/"+ userName);
  },
  adminOrdens: function() {
    return axios.get("/api/adminDash");
  },
kitchenOrders: function() {
    return axios.get("/api/kitchen");
  },
  create: function(ordenData) {
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
    return axios.post("/api/login", userData);
  },
  signup: function(userData) {
    return axios.post("/api/signup", userData);
  },
  makeTacoPayment: function(token, addresses){
    return axios.post("/api/payment/", token, addresses);
  },
  paidUpdate: function(id,paidData){
    return axios.put("/api/payment/" + id, paidData)
  },
  apiSearch: function(nombreDeOrden){
    return axios.get("/api/searcho/" + nombreDeOrden)
  },
  apiChangeToPaid: function(id, paidBoolean){
    return axios.put("/api/payment/" + id, paidBoolean)

  },

  apiUnprepared: function(preparadaBoolean){
    return axios.get("/api/unprepared/" + preparadaBoolean)

  }
};

export default  clientApiCalls

