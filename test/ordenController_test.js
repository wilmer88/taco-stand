const { assert, should } = require("chai");
const chai = require("chai");
let chaiHttp = require("chai-http");
let baseurl = "http://localhost:3001"
// const { all } = require("express/lib/application");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
// const mock = require("sinon/lib/sinon/mock");
// const { allOrdens } = require("../controllers/OrdenControllers");
// const { returns } = require("sinon/lib/sinon/fake");
var psc = require('proxy-sinon-chai');
const testOrden = require("../models/Orden")
const ordenController = require("../controllers/OrdenControllers");
const { find, deleteOne } = require("../models/Orden");
const { json } = require("express/lib/response");

const expect = chai.expect;
chai.use(sinonChai);
let token = jwt;
describe("ordenController", () => {
    describe("create", function(){
        const sandbox = sinon.createSandbox();
        afterEach(function () {
          sinon.restore();
          sandbox.restore();
        });
        const req = {
            params: {
              id: 1,
              azada:1,
              total:1,
              precio:3,
              
            },
          };
          const statusJsonSpy = sinon.spy();
          const res = {
            json: sinon.spy(),
            status: sinon.stub().returns({ json: statusJsonSpy }),
          };
        it("Creates new Orden", function () {
            let newTestOrden = new testOrden({name: "chango", azada: 2, pollo:3});
            newTestOrden.save()
            .then(() => {
                deleteOne()
            })
        });
        // describe("orden.addTotal", function (){
            it("adds all tacos together and returns a total", function(){
                function addTotal (newTestOrden) {
                    let total = newTestOrden.azada + newTestOrden.pollo
                    return total
                };
      
            });
            // describe("orden.getPrecio", function () {
                it("adds all the tocos together and multiplies the total by three", function () {
                  
                    function getPrecio (newTestOrden){
                        let alltacos = newTestOrden.azada + newTestOrden.pollo
                        let elPrecio = alltacos * 3;
                        return elPrecio

                    }
                })
            // });
            // describe("db.Orden.create",function(){
                it("creates a new orden and returns a promise resolved",async () => {
                  
       
            
                
                    
                        mongoose.Model.create = sandbox
                          .stub()
                          .returns(Promise.resolve("new orden"));
                            await ordenController.create(req, res);
                
                    expect(statusJsonSpy).to.have.been.calledWith("new orden");
                })
  
                  
              
            // })

          
                // it("shoud throw a error if there is an error", async ()=> {
                //  const sandbox = sinon.createSandbox();
                //  const statusJsonSpy = sinon.spy();
                //  const res = {
                //     json: sinon.spy(),
                //     status: sinon.stub().returns({ json: statusJsonSpy }),
                //   };
                //     mongoose.Model.create = sandbox
                //     .stub()
                //     .returns(Promise.reject("failed to post order/orden dat"));
                //     await testOrden.create();
                //     await console.log("---");
              
                //     expect(res.json).to.have.been.calledWith("failed to post order/orden data");
                //     // expect(statusJsonSpy).to.have.been.calledWith("error message");
                // })

          
            

        // })

        // const sandbox = sinon.createSandbox();
        
        // afterEach(function () {
        //     sinon.restore();
        //     sandbox.restore();
        // });
        
        
         
        // const req = {
        //     query: "changofood",
        //     headers:"authorization"
        // };
        // const statusJsonSpy = sinon.spy();

        // const res = {           
        //     json: sinon.spy(),
            
        // };

            // it("should return the models if found", async () => {
            
                // const mockAllOrdens = { 
                //      authCheck:
                //  function() {
                     
                //      return this .set({'authorization': `Bearer ${token}`})

                //     },
             
                //     find: function () {
                      
                //         return this

                //     },
                //     sort: function (){
                //         return  Promise.resolve("working")

                //     },
                   
                // };
                
            //     mongoose.Model.jwtV = mockAllOrdens.authCheck
            //     mongoose.Model.find = mockAllOrdens.find;
            //    mongoose.Model.sort = mockAllOrdens.sort;
            //    await ordenController.allOrdens(req, res);
            //    expect (res).to.be.Arguments(401)
            // });

        //     it("should check for headers", async () => {
             
        //                const mockAllOrdens = {
        //     find: function () {
        //         return this;
        //     },
        //     sort: function () {
        //         return Promise.reject("error message");
        //     },
        // };
        // mongoose.Model.find = mockAllOrdens.find
        // mongoose.Model.sort = mockAllOrdens.sort
        // await ordenController.allOrdens(req, res);
        // expect(res.json).to.have.been.calledWith({error:true, data: null, message: "bad credentials"});
        // expect(res.status).to.have.been.calledWith(401);
        // expect(statusJsonSpy).to.have.been.calledWith("error message")

        //     })
        // it("should throw error if error occurs", async () => {
        //     const mockAllOrdens = {
        //     find: function () {
        //         return this;
        //     },
        //     sort: function () {
        //         return Promise.reject("error message");
        //     },
        // };
        //     mongoose.Model.find = mockAllOrdens.find;
        //     mongoose.Model.sort = mockAllOrdens.sort;
            
            
        //     await ordenController.allOrdens(req, res);
        //     await console.log("---")
        //     expect(res.status).to.have.been.calledWith(422);
        //     expect(statusJsonSpy).to.have.been.calledWith("error message");

        // })
    });

})



// const sandbox = sinon.createSandbox();
// afterEach(function () {
//     sinon.restore();
//     sandbox.restore();
// });
// const req = {
//     params: {
//         id: 4,
//     authorization:"jjfjf3490890t",
//     },
// };

// const statusJsonSpy = sinon.spy();
// //Arrange
// const res = {
//     authorization:"jjfjf3490890t",
//     json: sinon.spy(),
//     status: sinon.stub().returns({ json: statusJsonSpy }),
// };




// it("should return all collections if model is found", async () => {
//     mongoose.Model.find= sandbox
//         .stub()
//         .returns(Promise.resolve("model was found and promise resolved"));
//     //Act
//     await ordenController.allOrdens(req, res);
//     //Assert
//     //is res.json called and passed the string from Promise.resolve above.
//     expect(res.json).to.have.been.calledWith("model was found and promise resolved");
// });
     
        // it("should return a json object if an error occurs", async () => {
        //     //Arange
        //     mongoose.Model.find = sandbox
        //         .stub()
        //         .returns(Promise.reject({
        //             error: true,
        //             data: null,
        //             message: "faild to get all orders.",
        //           }));
        //     //Act
        //     await ordenController.allOrdens(req, res);
        //     await console.log("---");
        //     //Assert
        //     expect(res.status).to.have.been.calledWith(500);
        //     expect(statusJsonSpy).to.have.been.calledWith({
        //         error: true,
        //         data: null,
        //         message: "faild to get all orders.",
        //       })
