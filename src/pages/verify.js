import e1 from "./events/GSWA-Oct22.json"

function verify(e) {
    e.preventDefault()
    const sid = document.querySelector("#cert_sid").value;
    const event = document.querySelector("#cert_event").value;
    console.log(e1)
  }

  export default verify