import React from "react";


function DownloadBtn({icon,device}) {
  return (
    <>
      <div className="downld-btn-box">
        <div className="dwnload-icon">
          {icon}
        </div>
        <div className="app">
          <p>Get it on</p>
          <h1>{device}</h1>
        </div>
      </div>
    </>
  );
}

export default DownloadBtn;
