* `wilmer88.github.io/blast-porfolio`
### pitch
       // debugger
Leave in the past waiting in line waisting time, missed information when placing an order, polluting noise when ordering thru a phone, a food truck window on a busy street or a noisy restaurant.
Would it be helpfull when taking lunch to pre order your meal for a quick and easy pick up?
For that this app was created, built to help the food truck industry, caters and restaurant businessess by smoothening and automate the ordering process for both customer and client without holding back production or making an expensive investment
 
### taco-Stand
MERN Stack, Api driven, mobile responsive cloud based (SaaS) for food service trucks or restaurant businessess. The aplication helps customers and buisness owner save time by allowing the customer to place a order at the business location or pre ordering at customer home or current location, helping businessess by not slowing down and/or stoping any order preparation process and by not needing to have someone there when a order is being placed. 
On a submited order the app calculates the amount due saves the order details to a database and instantly places the the order to be seen by the business. The App informs amount due and place in line if the signed in to the app athorization; Using athorization authentication process. allows users to create, edit, view all, and delete orders.
### technoligies/libraries/development
Working React Stripe checkout payment option, Visual Studio Code, MongoDB Atlas ran on Amazon Web Service, Postman, Studio 3T, Google Chrome Dev Tools, ES6, Bulma,React, JSX, Axios, NODE, Mongoose, Express, Bcrypt, jwt, JavaScript,process.env, Heroku, Mocha and Nyc for testing covarage.
 Front end Is built with Reacts version 18.0.0  and Bulma CSS framework library, uses react-router-dom for Route rendering. Implemented with web development best practices. Designed and is mobile responsive on all mobile devices. With react handling the web webpacks. 

 The backend is Node, NPM package Morgan for logging errors; nth-check for parseing and compiling; Axios for making API calls; svgo for optimizing files. MongoDB was chosen as a nosql data platform/database; Mongoose for the data models. Express middleware  is used as server software communicating the frontend with the backend.
 
 For security and restricting some application access; .env file with environment variables protecting and storing sensitive data after deployment. bcrypt is used for hashing passwords, json web tokens when using headers. The Aplication is currently in production and hosted at Github and Heroku.
 
[this is the link to the page](https://taco-stand.herokuapp.com/)
![screenshot](/client/public/images/casa.png)
![screenshot](/client/public/images/ordenar.png)
![screenshot](/client/public/images/auth.png)
![screenshot](/client/public/images/alloredens.png)
![screenshot](/client/public/images/edit.png)

### Documentation
- Deleted unused code in client/public/manifest.json file to solve console error 'error while trying to use the following icon from the manifest' referring to favicon.ico in icons array. 
```
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }

 ```


