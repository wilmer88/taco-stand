import AuthContext from '../context/AuthContext';
import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import API from "../utils/API";
import alertContext from '../context/alertContext';
import { Link } from "react-router-dom";

const ULog = () => {
  const styles = {
    font: {
      fontSize: "27px",
      background: "lightyellow"
    },
    logPad: {
      padding: "20px"
    }
  };

  const navigate = useNavigate();
  const { setAlert } = useContext(alertContext);
  const [userNameHolder, setUserNameHolder] = useState("");
  const [passwordHolder, setPasswordHolder] = useState("");
  const { setJwt, setUserName, setUserRole } = useContext(AuthContext);

  const formSubmit = (e) => {
    e.preventDefault();
    API.login({ userName: userNameHolder, password: passwordHolder })
      .then((response) => {
        setJwt(response.data.data);
        setUserName(response.data.userName);
        setUserRole(response.data.userRole);

        setTimeout(() => {
          navigate("/");
          alert("Welcome, you are logged in");
        }, 1500);
      }).catch((err) => {
        console.error(err);
        setAlert({ message: "Failed to login", type: "is-danger" });
      });
  };

  return (
    <>
      <div className="column is-two-fifth" />
      <div className="column is-full-mobile mt-6">
        <div className='box'>
          <h3 className="label has-text-centered" style={styles.font}>Log In / Iniciar Sesión</h3>
          <form onSubmit={formSubmit}>
            <h3 className="label has-text-centered">Nombre De Usuario / User Name</h3>
            <input 
              onChange={(e) => setUserNameHolder(e.target.value)}
              name="userName"
              className="input"
              value={userNameHolder}
              type="text"
              placeholder="email or username"
              autoComplete="username"
            />
            <h3 className="label has-text-centered">Contraseña / Password</h3>
            <input 
              onChange={(e) => setPasswordHolder(e.target.value)}
              name="password"
              className="input"
              value={passwordHolder}
              type="password"
              placeholder="password"
              autoComplete="current-password"
            />
            <br/><br/>
            <button type="submit" className="button is-info">Login</button>
            <button type="button" className="button">
              <Link to="/">Back</Link>
            </button>
          </form>
        </div>
      </div>
      <div className="column is-two-fifth" />
    </>
  );
};

export default ULog;
