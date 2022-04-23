
const chai = require("chai");
const mongoose = require("mongoose");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");


const ordenController = require("../controllers/OrdenControllers");
const expect = chai.expect;

chai.use(sinonChai);

describe("ordenController", () => {
    describe("router.put", () => {
        const sandbox = sinon.createSandbox();
        afterEach(function () {
            sinon.restore();
            sandbox.restore();
        });
        const req = {
            params: {
                id: 4,
            },
        };

        const statusJsonSpy = sinon.spy();
        //Arrange
        const res = {
            json: sinon.spy(),
            status: sinon.stub().returns({ json: statusJsonSpy }),
        };

        it("should return a model if found", async () => {
            mongoose.Model.put("/api/orden", (req, res)) = sandbox
                .stub()
                .returns(Promise.resolve("your testing"));
            //Act
            await ordenController.findByIdAndUpdate(req, res);
            //Assert
            //is res.json called and passed the string from Promise.resolve above.
            expect(res.json).to.have.been.calledWith("your testing");
        });
        it("should return and eror message if an error occurs", async () => {
            //Arange
            mongoose.Model.findByIdAndUpdate = sandbox
                .stub()
                .returns(Promise.reject("error message"));
            //Act
            await ordenController.findByIdAndUpdate(req, res);
            await console.log("---");
            //Assert
            expect(res.status).to.have.been.calledWith(404);
            expect(statusJsonSpy).to.have.been.calledWith("error message")
        })
    });

});