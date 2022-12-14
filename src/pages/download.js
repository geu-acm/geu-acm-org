import { jsPDF } from "jspdf";
import { getGimg } from "../helpers/getEventDetails";
// import p1 from "./events/certs/GSWA_Oct22.jpg"

async function getDim(pic) {
    var img = new Image()
    img.src = pic
    img.onload = () => {
        let iw = iw
        let ih = ih
        return { iw, ih }
    }
}

async function download(name, yo, ecode) {

    console.log(name,yo,ecode)

    // const event = document.querySelector("#cert_event").value;
    var Gimg = await getGimg(ecode)

    var img = new Image()
    img.src = await 'data:image/png;base64,' + Gimg
    img.onload = () => {
        const [iw, ih] = [img.naturalWidth, img.naturalHeight]
        console.log(iw, ih)

        const doc = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [ih, iw]
        });

        var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
        var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();

        doc.addImage(img, 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

        doc.setFontSize(50);
        doc.text(`${name}`, pageWidth / 2, yo, { align: 'center' })
        // doc.text(`${name}`, 40, 250, 'center');

        doc.save(`${name}.pdf`);
    }

}

export default download