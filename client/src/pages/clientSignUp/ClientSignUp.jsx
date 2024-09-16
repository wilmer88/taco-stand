import AuthContext from "../../context/AuthContext";
import React, { useContext, useState } from "react";
import alertContext from "../../context/alertContext";
import { useNavigate } from "react-router-dom";
import API from "../../utils/API";
import { Link } from "react-router-dom";

const ClientSignUp = () => {
  const pxhi = {
    fonte: {
      fontSize: "27px",
      background: "lightyellow",
    },
  };

  const navigate = useNavigate();

  const { setJwt, setUserName, setUserRole } = useContext(AuthContext);
  const { setAlert } = useContext(alertContext);
 

  const [userNameHolder, setSignUpUserNameHolder] = useState("");
  const [userPasswordHolder, setSignUpPasswordHolder] = useState("");
  const [signUpUserRoleHolder, setSignUpUserRoleHolder] = useState("");

  function formSubmit(e) {
    e.preventDefault();

    API.signup({
      userName: userNameHolder,
      password: userPasswordHolder,
      userRole: signUpUserRoleHolder,
    })
      .then((response) => {
        setAlert({
          message: "You successfully signed up!",
          type: "is-success",
        });

        console.log(response.data);
        setJwt(response.data.data);
        setUserName(response.data.userName);
        setUserRole(response.data.userRole);

        setTimeout(() => {
          navigate("/");
          alert("welcome you are signd up");
        }, 1500);
        setSignUpUserNameHolder("");
        userPasswordHolder("");
        setSignUpUserRoleHolder("");
      })
      .catch((err) => {
        setAlert({ message: "Faild to sign up!", type: "is-danger" });
        console.log(err);
      });
  }

  return (
    <>
      <div className="columns is-mobile">
        <div className="column is-two-fifth"></div>

        <br></br>
        <div className="mt-6 box">
          <h3 className="label has-text-centered" style={pxhi.fonte}>
            Signup/ Inscribirse
          </h3>

          <form onSubmit={formSubmit}>
            <h3 className="label has-text-centered">
              (create or use) Email, Phone# or User Name{" "}
            </h3>

            <input
              onChange={(e) => setSignUpUserNameHolder(e.target.value)}
              name="userName"
              className="input"
              value={userNameHolder}
              type="text"
              placeholder="me@gmail.com/ 7063314343/ daddypop"
            />
            <br></br>

            <h3 className="label has-text-centered">Create Password</h3>

            <input
              onChange={(e) => setSignUpPasswordHolder(e.target.value)}
              name="password"
              className="input"
              value={userPasswordHolder}
              type="text"
              placeholder="Password"
            />

            <br></br>

            <h3 className="label has-text-centered">User Role</h3>

            <input
              onChange={(e) => setSignUpUserRoleHolder(e.target.value)}
              name="userRole"
              className="input"
              value={signUpUserRoleHolder}
              type="text"
              placeholder="server"
            />

            <br></br>
            <br></br>
            <button type="submit" value="Submit" className="button is-info">
              Signup/ Inscribirte
            </button>
            <button className="button">
              {" "}
              <Link to="/"> Back</Link>
            </button>
          </form>
        </div>

        <div className="column is-two-fifth"></div>
      </div>
    </>
  );
};

export default ClientSignUp;
