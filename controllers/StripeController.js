const uuid = require("uuid").v4;
const dotenv = require("dotenv"); 
dotenv.config();
const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY)
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

})    

    } 
 
};
    

        // const customer = stripe.customers.create({
        //     email: req.body.email,
        //     source: req.body.id,

        // })

        
      
        // const session = stripe.checkout.sessions.create({
        //     payment_method_types: ['card'],
        //     line_items: [{
        //       price_data: {
        //         product: '{{PRODUCT_ID}}',
        //         unit_amount: 1500,
        //         currency: 'usd',
        //       },
        //       quantity: 1,
        //     }],
        //     mode: 'payment',
        //     success_url: 'https://example.com/success',
        //     cancel_url: 'https://example.com/cancel',
        //   });
  
        // const orderOfTacos = new Map([
        //     [req._id, {priceInCents: req.orderTotal * 100}]
        // ])