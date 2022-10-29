import { Center, Text } from "@mantine/core";
import Eventcard from "../components/Eventcard";

export default function Contact() {
    return (
        <div id="contact">
            <Center>
                <h1>
                    Contact Us
                </h1>
            </Center>
            <Center className="contact__connect--head">
                <pre>Connect with us :
                </pre>
            </Center>
            <Center className="contact__connect--body">
                <sub style={{ color: "#0096FF" }}>ACM</sub> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* ik its unethical. But Dont touch it coz it works */}
                <span>
                    <a href="https://www.instagram.com/geuacm/"><icon class="fa-brands fa-instagram" /></a>
                    <a href="https://www.linkedin.com/company/geu-acm"><icon class="fa-brands fa-linkedin" /></a>
                </span>
            </Center>
            <Center className="contact__connect--body">
                <sub style={{ color: "#FF007F" }}>ACMW</sub> &nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                    <a href="https://www.instagram.com/geuacmw/"><icon class="fa-brands fa-instagram" /></a>
                    <a href="https://www.linkedin.com/company/geu-acm-w/"><icon class="fa-brands fa-linkedin" /></a>
                </span>
            </Center>

            <br /><br />
            <Center>
                <div>
                    <Text align="left" color="blue">Location: </Text>Clement Town, Dehradun, UK, India.
                    <br />
                    <Text align="left" color="blue">Phone: </Text>+91-6887-567-897.
                    <br />
                    <Text align="left" color="blue">Mail: </Text>acm@geu.ac.in
                    <br />
                </div>
            </Center><br /><br />
            <Center>
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.3110768594356!2d77.9948196176354!3d30.268635693499743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b9451ae8dfd%3A0xf39c46d34a152faa!2sGraphic%20Era%20(Deemed%20to%20be%20University)!5e0!3m2!1sen!2sin!4v1644316630271!5m2!1sen!2sin"
                    allowfullscreen="" />
            </Center>


        </div>
    )
}