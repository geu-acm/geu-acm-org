import React from "react";
import lottie from "lottie-web";

import { Text, Button } from "@mantine/core";
import { useClipboard } from '@mantine/hooks';

import verifiedAnim from "../assets/anim/lf30_editor_1g3ijmok"
import download from "./download";
import { getName, getEvents, getEventName, getDate, getEventDate } from "./eventDetails"
import { encode, decode } from "../helpers/encDec";
import "./certpage.css"

var name,id,ecode,evname,evdate

function getData(loc) {
  const cdata = loc?.split("certi/")[1]

  let tmp = decode(cdata)  // Test: MjEwMjE5MTMgR1NXQV9PY3QyMg2
  id = tmp[0]
  ecode = tmp[1]
  
  evname = getEventName(ecode)
  evdate = getEventDate(ecode)
  name=getName(id,ecode)
  console.log(evdate)
}

function updateData() {
  const certEvname = document.querySelector("#verify__cert_evname")
  const certName = document.querySelector("#verify__cert_name")
  const certDate = document.querySelector("#verify__cert_date")

  if(certName) certName.innerHTML = name
  if(certEvname) certEvname.innerHTML = evname
  if(certDate) certDate.innerHTML = evdate
}

function validated() {
  return name!='' && name!=undefined
}

export default function Verify(props) {

  getData(props.loc)

  const clipboard = useClipboard({ timeout: 500 });

  React.useEffect(() => {

    if(validated()) updateData()

    const instance = lottie.loadAnimation({
      container: document.querySelector("#verified-anim"),
      animationData: verifiedAnim,
      renderer: "svg",
      loop: false,
      autoplay: true,
    });
    return () => instance.destroy();
  }, []);

  return (
    <div style={{
      backgroundImage: "linear-gradient(to top, #F4F7FA 0%, white 100%)",
      height: "100vh"
    }}>
      <div className="header" style={{background: "white"}}>
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
        <h1 align="center">
          <Text variant="gradient" c="blue" ta="center" style={{ fontSize: "20px" }}>
            Verification
          </Text>
        </h1>
        <br /><br /><br />

        <center>

          <div id="cert_error">
            ⚠️ <Text>Certificate Not Found</Text>
          </div>

          <div id="cert_successs">
            {/* <hr size="20px" width="200px" /> */}
            <Text variant="gradient" gradient={{ from: 'blue', to: 'pink' }} c="blue" ta="center" style={{ fontSize: "18px" }}>
              <b id="verify__cert_evname">GETTING READY</b>
            </Text>
            <hr size="100px" width="200px" />
            <br />

            <div id="verified-anim" style={{ height: "150px" }}></div>

            <br />
            <Text variant="gradient" gradient={{ from: 'blue', to: 'grey' }} c="blue" ta="center" style={{ fontSize: "20px" }}>
              This certificate was issues to
            </Text>
            <Text variant="gradient" gradient={{ from: 'blue', to: 'blue' }} c="blue" ta="center" style={{ fontSize: "20px" }}>
              <b id="verify__cert_name">Binod</b>
            </Text>
            <br />
            <Text style={{ fontSize: "18px" }}>
              <em id="verify__cert_date">on Jun 20, 20XX</em>
            </Text>
            <br />

            <Button style={{ display: "inline" }}
              color={clipboard.copied ? 'blue' : 'blue'}
              onClick={() => clipboard.copy('Certificate')} >
              {clipboard.copied ? 'Downloading' : 'Download'}
            </Button>
          </div>

        </center>
      </div>
    </div>
  )
}