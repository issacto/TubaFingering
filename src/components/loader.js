import React from 'react';
import "../stylesheet.css";

function ShowDetail() {
  return (
    <div className="main">
        <div className="loader center">
        <i className="fa fa-cog fa-6x fa-spin fa-fw" style={{color:"rgb(112,128,144)"}} />
        </div>
        <p style={{color:"rgb(112,128,144)", fontSize:"7vh",marginLeft:"1vh"}}> loading...</p>
    </div>
  );
}

export default ShowDetail;
