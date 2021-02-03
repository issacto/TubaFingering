import React from 'react';
import "../stylesheet.css";

function ShowDetail() {
  return (
    <div className="main">
        <div className="loader center">
        <i className="fa fa-spinner fa-spin fa-3x fa-fw" aria-hidden="true" style={{color:"white"}} />
        </div>
        <p style={{color:"white", fontSize:"5vh",marginLeft:"1vh"}}> Checking your answers...</p>
    </div>
  );
}

export default ShowDetail;
