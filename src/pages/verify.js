import React from "react";

import verify from "./withDownload";
import download from "./download";
import { getName } from "./eventDetails"
import "./certpage.css"

export default function Verify(props) {

  var cdata = props.loc?.split("certi/")[1]
  // cdata = cdata + "-" 
  console.log(getName("21021913","GSWA_Oct22"))
  // const cb64 = btoa(cdata)

  // console.log(cb64)

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
          <h3>VERIFY</h3>
        </center>
        <br /><br /><br />
        <center>
          {/* <hr size="20px" width="200px" /> */}

          <br /><br />
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
    </div>
  )
}