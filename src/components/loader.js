import React from 'react';
import "../stylesheet.css";

function ShowDetail() {
  return (
    <div className="main">
        <div className="loader center">
        <i className="fa fa-cog fa-6x fa-spin fa-fw" style={{color:"white"}} />
        </div>
        <p style={{color:"white", fontSize:"7vh",marginLeft:"1vh"}}> loading...</p>
    </div>
  );
}

export default ShowDetail;
