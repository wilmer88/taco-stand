const chai = require("chai");
const { all } = require("express/lib/application");
const jsonwebtoken = require("jsonwebtoken");
const mongoose = require("mongoose");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { allOrdens } = require("../controllers/OrdenControllers");
// const { returns } = require("sinon/lib/sinon/fake");

const ordenController = require("../controllers/OrdenControllers");
const { find } = require("../models/Orden");

const expect = chai.expect;
chai.use(sinonChai);

describe("ordenController", () => {
    describe("allOrdens", () => {
        const sandbox = sinon.createSandbox();
        afterEach(function () {
            sinon.restore();
            sandbox.restore();
        });
        const req = {
            query: "changofood",
            // authorization:"jjfjf3490890t",
            headers:"authorization",
            
            // jwt:"sfjlfjdgjdpjg",
            // SECRET: "chevybaby",
           
        
        };
        const statusJsonSpy = sinon.spy();

        const res = {           
            json: sinon.spy(),
            status: sinon.stub().returns( { json: statusJsonSpy} ),
        };

            it("should return the models if found", async () => {
               
                const mockAllOrdens = { 
                    
                    find: function () {
                      
                        return this;
                    },
                    sort: function (){
                        return  Promise.resolve("foo")

                    },
                };
                mongoose.Model.find = mockAllOrdens.find
               mongoose.Model.sort = mockAllOrdens.sort

       
                
               await ordenController.allOrdens(req, res);
          
                expect(res.json).to.have.been.calledWith("foo")
            });


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
        //     mongoose.Model.find = mockAllOrdens.sort;
        
            
        //     await ordenController.allOrdens(req, res);
         
        //     expect(res.status).to.have.been.calledWith(401);
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
