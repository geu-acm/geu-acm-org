import { jsPDF } from "jspdf";
import p1 from "./events/certs/GSWA-Oct22.jpg"

async function getDim(pic) {
    var img = new Image()
    img.src = pic
    img.onload = () => {
        let iw = iw
        let ih = ih
        return { iw, ih }
    }
}

function download(name,yo) {
    
    // const event = document.querySelector("#cert_event").value;

    var img = new Image()
    img.src = p1
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

        doc.addImage(p1, 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

        doc.setFontSize(50);
        doc.text(`${name}`, pageWidth/2, yo, {align: 'center'})
        // doc.text(`${name}`, 40, 250, 'center');

        doc.save(`${name}.pdf`);
    }

}

export default download