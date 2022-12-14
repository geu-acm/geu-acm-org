import React from "react";
import lottie from "lottie-web";

import { Text, Button } from "@mantine/core";
import { useClipboard } from '@mantine/hooks';

import verifiedAnim from "../assets/anim/lf30_editor_1g3ijmok"
import download from "./download";
import { getName, getEvents, getEventName, getDate, getEventDate } from "./events/eventDetails"
import { encode, decode } from "../helpers/encDec";
import "./certpage.css"
import { getCert } from "../helpers/getEventDetails";

var name, id, ecode, evname, evdate, yo

var verifyNode, perror = 0

async function getData(loc) {     // update in global variables

  const cdata = loc?.split("certi/")[1]

  let tmp = decode(cdata)  // Test: MjEwMjE5MTMgR1NXQV9PY3QyMg2
  id = tmp[0]
  ecode = tmp[1]

  var cert = await getCert(ecode, id);

  try {
    name = cert.name;
    // ecode = cert.ecode;
    yo = cert.cyo;
    evname = cert.event;
    evdate = cert.date;
  }
  catch{
    perror = 1;
  }

  // console.log(evname, evdate)
}

async function updateData() {     // update in dom

  // verifyNode.style.display = 'block';
  let successNode = verifyNode.querySelector("#cert_success")
  successNode.style.display = 'block'

  const certEvname = verifyNode.querySelector("#verify__cert_evname")
  const certName = verifyNode.querySelector("#verify__cert_name")
  const certDate = verifyNode.querySelector("#verify__cert_date")

  if (certName) certName.innerHTML = name
  if (certEvname) certEvname.innerHTML = evname
  if (certDate) certDate.innerHTML = evdate
}

function showFound() {

}

function showNotFound() {
  let errorNode = verifyNode.querySelector("#cert_error")
  errorNode.style.display = 'block'

}

const processDownload = async () => {    // update data in dom
  const resName = document.querySelector('#cert_resName')
  const certyo = document.querySelector("#cert_yo");

  await download(name, yo, ecode)

  // download(resName.innerHTML, yo.value)

}

function validated() {
  return !perror;
  // console.log(name)
  // return name != '' && name != undefined
}

export default function Verify(props) {

  const clipboard = useClipboard({ timeout: 500 });

  React.useEffect(() => {

    verifyNode = document.querySelector("#verify")
    let successNode = verifyNode.querySelector("#cert_success")
    let errorNode = verifyNode.querySelector("#cert_error")
    // successNode.style.display = 'none'
    // errorNode.style.display = 'none'

    getData(props.loc).then(() => {
      validated() ? updateData() : showNotFound();
    })

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
    <div id="verify" style={{
      backgroundImage: "linear-gradient(to top, #F4F7FA 0%, white 100%)",
      height: "100vh"
    }}>
      <div className="header" style={{ background: "white" }}>
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
             <Text size="lg"> ⚠️ Certificate Not Found</Text>
          </div>

          <div id="cert_success">
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
              <b id="verify__cert_name">Xavier</b>
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