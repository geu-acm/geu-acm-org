import React from "react";

import verify from "./verify";
import download from "./download";
import "./certpage.css"

export default function Certificate() {
  return (
    <div>
      <div className="header">
        <a href='/'>
          <img src="https://geu.acm.org/images/ACM%20GEU%20logo%20gas.png" width="80vw" />
        </a>
        <div className="header__center">

        </div>
        <div className="header__right">
          <h2>Events</h2>
        </div>
      </div>

      <div style={{ paddingLeft: "20px" }}>
        <center>
          <h3>DOWNLOAD VERIFY CERTIFICATE</h3>
        </center>
        <br /><br /><br />
        <center>
          {/* <hr size="20px" width="200px" /> */}

          <form action="" onSubmit={verify} id="certform">
            <i>
              <input type="hidden" id="cert_yo" />
              <label htmlFor="sid">Student ID: </label>
              <br />
              <input type="text" id="cert_sid" name="stuid" style={{ width: "200px" }} />
              <br /><br />
              <label htmlFor="cert_event">Select Event:</label>
              <br />
              <select id="cert_event" name="eventlist" form="certform">
                <option value="GSWA-Oct22">Getting Started with AWS [Oct '22]</option>
              </select>
            </i>
            <br /><br /><br />
            <input type="submit" style={{ height: "30px", width: "100px" }} />
          </form>
          <br /><br /><br />
          <hr size="20px" width="200px" />
          <br />
          <p id="cert_error">
            ⚠️ Certificate Not Found
          </p>
          <p id="cert_success">
            Verified 🆗 <br /><br />
            This certificate belongs to <b id="cert_resName">Binod</b>
            <br /><br />
            <button onClick={download}>Download Now</button>
          </p>
        </center>
      </div>
    </div >
  )
}