import React, { useEffect, useState } from "react";

import { Alert, Button } from "@mantine/core";
import { useClipboard } from '@mantine/hooks';

import e1 from "./events/GSWA_Oct22.json"

import download from "./download";
import "./certpage.css"
import { getEventName, getName } from "./events/eventDetails";
import { encode } from "../helpers/encDec";
import { getAllEvents, getCert, getEvents } from "../helpers/getEventDetails";

function setup() {

  var xmonth = document.querySelector('#evmonth')
  var date = new Date();
  xmonth.value = date.getFullYear() + '-' + (date.getMonth() + 1);

}

var name = ""
var yo = 350
var ecode = 0
// var Gimg = ""

async function setEvents(e) {

  const xmonth = document.querySelector("#evmonth").value;
  const dselect = document.querySelector("#dselect");
  const pselect = dselect.parentNode
  var date = new Date(xmonth).toString().split(' ');
  var ymonth = date[1] + ' ' + date[3].slice(2)
  var events = await getEvents(ymonth)
  var ns;
  while (ns = dselect.nextSibling) {
    pselect.removeChild(ns)
  }
  if (events != null) {
    Object.keys(events).forEach(x => {
      let ev = document.createElement("option");
      ev.value = events[x];
      ev.innerHTML = x;
      pselect.appendChild(ev);
    });
  }
  // console.log(events)

}


async function update(e) {
  e.preventDefault()
  const sid = document.querySelector("#cert_sid").value;
  // const event = document.querySelector("#cert_event").value;
  const certyo = document.querySelector("#cert_yo");

  const errorText = document.querySelector('#cert_error').style
  const successText = document.querySelector('#cert_success').style

  errorText.display = "none"
  successText.display = "none"

  const resName = document.querySelector('#cert_resName')

  const certEvent = document.querySelector('#cert_event').value

  const cert = await getCert(certEvent, sid)

  console.log(cert)

  if (cert && cert.name != undefined) {
    errorText.display = "none"
    successText.display = "block"
    resName.innerHTML = cert.name
    certyo.value = cert.cyo ? cert.cyo : 390
    name = cert.name
    yo = cert.cyo
    ecode = cert.ecode
    // Gimg = cert.certificate
  }
  else {       // if NOT FOUND
    errorText.display = "block"
    successText.display = "none"
  }
}

const processDownload = async () => {    // update data in dom
  const resName = document.querySelector('#cert_resName')
  const certyo = document.querySelector("#cert_yo");

  await download(name, yo, ecode)

  // download(resName.innerHTML, yo.value)

}

async function getList(e) {
  e.preventDefault();
  // getAllEvents();
  // getEvents();
  getCert();
}


export default function Certificate() {

  const clipboard = useClipboard({ timeout: 500 });

  // const [state, setState] = useState(['', ''])    // state = [name, yo]

  let date = new Date();
  let cmonth = date.getFullYear() + '-' + (date.getMonth() + 1);
  const [month, setMonth] = useState(cmonth)

  // useEffect(setup, [])

  useEffect(() => setEvents, [month])

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
              <br /><br /><br />
              <input type="month" id="evmonth" name="eventmonth" value={month} onChange={(x) => setMonth(x.target.value)} />
              {/* <label htmlFor="evmonth">Event month: </label> */}
              <br /><br />
              <label htmlFor="cert_event">Select Event:</label>
              <br />
              <select id="cert_event" name="eventlist" defaultValue={'SELECT'} form="certform">
                <option value="SELECT" disabled id="dselect" style={{ minWidth: '500px' }}>Select</option>
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
            This certificate belongs to <b id="cert_resName">Hello</b>
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
                  // const evCode = 'GSWA_Oct22'
                  let vurl = window.location.host
                  vurl = vurl + '/#/certi/' + encode(sid, ecode)
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