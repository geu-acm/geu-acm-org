import React, { useState } from "react";

import { Alert, Button } from "@mantine/core";
import { useClipboard } from '@mantine/hooks';

import e1 from "./events/GSWA_Oct22.json"

import download from "./download";
import "./certpage.css"
import { getName } from "./events/eventDetails";
import { encode } from "../helpers/encDec";


function update(e) {
  e.preventDefault()
  const sid = document.querySelector("#cert_sid").value;
  const yo = document.querySelector("#cert_yo");
  // const event = document.querySelector("#cert_event").value;

  const errorText = document.querySelector('#cert_error').style
  const successText = document.querySelector('#cert_success').style

  const resName = document.querySelector('#cert_resName')

  if (sid in e1.sid) {
    errorText.display = "none"
    successText.display = "block"
    resName.innerHTML = e1.sid[sid]
    yo.value = e1.yo ? e1.yo : 500
  }
  else {       // if NOT FOUND
    errorText.display = "block"
    successText.display = "none"
  }
}

const processDownload = () => {    // update data in dom
  const resName = document.querySelector('#cert_resName')
  const yo = document.querySelector("#cert_yo");

  download(resName.innerHTML, yo.value)

}


export default function Certificate() {

  const clipboard = useClipboard({ timeout: 500 });

  const [state, setState] = useState(['', ''])    // state = [name, yo]

  return (
    <div>
      <div className="header">
        <a href='/'>
          <img src="https://geu.acm.org/images/ACM%20GEU%20logo%20gas.png" width="80vw" />
        </a>
        <div className="header__center">

        </div>
        <div className="header__right">
          <h2 style={{ position: "relative", left: "-40px" }}>Events</h2>
        </div>
      </div>

      <div style={{ paddingLeft: "20px" }}>
        <center>
          <h3>DOWNLOAD VERIFY CERTIFICATE</h3>
        </center>
        <br /><br /><br />
        <center>
          {/* <hr size="20px" width="200px" /> */}

          <form action="" onSubmit={update} id="certform">
            <i>
              <input type="hidden" id="cert_yo" />
              <label htmlFor="sid">Student ID: </label>
              <br />
              <input type="text" id="cert_sid" name="stuid" style={{ width: "200px" }} />
              <br /><br />
              <label htmlFor="cert_event">Select Event:</label>
              <br />
              <select id="cert_event" name="eventlist" form="certform">
                <option value="GSWA_Oct22">Getting Started with AWS [Oct '22]</option>
              </select>
            </i>
            <br /><br /><br />
            <input type="submit" style={{ height: "30px", width: "100px" }} />
          </form>
          <br /><br />
          <hr size="20px" width="200px" />
          <br />
          <p id="cert_error">
            ⚠️ Certificate Not Found
          </p>
          <div id="cert_success">
            Verified 🆗 <br /><br />
            This certificate belongs to <b id="cert_resName">Binod</b>
            <br /><br />
            <Button color={"blue"} onClick={processDownload}> DOWNLOAD
            </Button>
            <br /><br /><br />

            <Alert icon="🚀" color="red" style={{ width: "250px" }}>
              You can verify this certificate <br />

              <a href="#/certi"
                color={clipboard.copied ? 'blue' : 'blue'}
                onClick={() => {
                  const sid = document.querySelector("#cert_sid").value;
                  const evCode = 'GSWA_Oct22'
                  let vurl = window.location.host
                  vurl = vurl + '/#/certi/' + encode(sid, evCode)
                  clipboard.copy(vurl)
                }} >
                {clipboard.copied ? 'Copied verifiable link' : 'Copy verifiable link'}
              </a>
            </Alert>

          </div>
        </center>
      </div>
    </div >
  )
}