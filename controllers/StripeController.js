const uuid = require("uuid").v4;
const dotenv = require("dotenv"); 
dotenv.config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);
const { Orden } = require("../models");
const db = require("../models");
module.exports = {
payOrden: function(req,res){

const {token, paymentObj} = req.body
const idempontecyKey = uuid()

console.log(token);
console.log(paymentObj);

return stripe.customers.create({
    email: token.email,
    source: token.id
}).then(customer => {
    stripe.charges.create({
        amount:paymentObj.ordenTotal * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: customer.email,
        description: paymentObj.nombreDeOrden,
     
    },
    {idempotencyKey:idempontecyKey})
    .then((results) => {
        res.status(200).json(results)
    }).catch(err=>{console.log(err)})

})  },

updatePaidField: function(req, res){
             db.Orden.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
          .then((updatedOrder) => {
            res.json(updatedOrder);
          })
          .catch((err) => {
            console.log(err);
            res.json({
              error: true,
              data: null,
              message: `failed to update order/orden document for ${req.params.id}`,
            });
          });}
};
    

