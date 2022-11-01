

import e1 from "./events/GSWA-Oct22.json"

function verify(e) {
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

export default verify