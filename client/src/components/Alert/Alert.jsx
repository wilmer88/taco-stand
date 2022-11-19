import React from "react";

const Alert = ({ message, type }) => {
  return (
    <>
      {message && (
        <div className="container">
          <div className={`notification ${type || "is-info "} is-light`}>
            {message}
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
