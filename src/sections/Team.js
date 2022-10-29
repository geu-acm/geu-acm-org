import { Center, Text, Container, SimpleGrid, MediaQuery } from "@mantine/core";
import Profilecard from "../components/Profilecard";
import p1 from '../assets/team/acm/1.png'
import p2 from '../assets/team/acm/2.png'
import p3 from '../assets/team/acm/3.png'
import p4 from '../assets/team/acm/4.png'
import p5 from '../assets/team/acm/5.png'
import p6 from '../assets/team/acm/6.png'

import pw1 from '../assets/team/acmw/1.png'
import pw2 from '../assets/team/acmw/2.png'
import pw3 from '../assets/team/acmw/3.png'
import pw4 from '../assets/team/acmw/4.png'
import pw5 from '../assets/team/acmw/5.png'
import pw6 from '../assets/team/acmw/6.png'
import pw7 from '../assets/team/acmw/7.png'

export default function Team() {
    return (
        <Center className="team" id="team">
            <Center>
                <h1> Our Team </h1>
            </Center>
            <Center>
                <h3>
                    Our Instructors ❤️
                </h3>
            </Center>
            <Center className="pcard-wrap">
                <Profilecard name="Harsh Vardhan" pos="Mentor ACM" pic={p6} />
                <Profilecard name="Sarishma Dangi" in="true" pos="CHAPTER HEAD" pic="https://geu.acm.org/core/Sarishma%20Dangi.jpeg" />
                <Profilecard name="Diksha Bisht" pos="Mentor ACMW" pic={pw6} />
                <Profilecard name="Gaurangi Tripathi" pos="Mentor ACMW" pic={pw7} />
            </Center>
            <br /><br />
            <Center>
                <h3>
                    Our Office Bearers [ACM] 🤠
                </h3>
            </Center>
            <Center className="pcard-wrap">
                <Profilecard name="Shivam Gupta" pos="Chair" pic={p5} />
                <Profilecard name="Md Amanullah" pos="Vice Chair" pic={p4} />
                <Profilecard name="Arnav Garg" pos="Secretary" pic={p3} />
                <Profilecard name="Shivyanshu Saini" pos="Web Master" pic={p1} />
                {/* <Profilecard name="Vaibhav Jain" pos="Treasurar" pic="https://geu.acm.org/core/Vaibhav%20jain.jpg" /> */}
                <Profilecard name="Shivang Yadav" pos="Membership" pic={p2} />
                {/* <Profilecard name="Abhinav Bhatia" pos="Technical Head" pic="https://geu.acm.org/core/ABHINAV%20MOHAN%20BHATIA.jpg" /> */}
                {/* <Profilecard name="Anshul Pandey" pos="Management" pic="https://geu.acm.org/core/Anshul.jpg" /> */}
            </Center><br />
            <Center>
                <h3>
                    Our Office Bearers [ACMW] 👮🏼‍♀️
                </h3>
            </Center>
            <Center className="pcard-wrap">
                <Profilecard name="Pranjal Trivedi" pos="Chair" pic={pw5} />
                <Profilecard name="Anushka Rawat" pos="Vice Chair" pic={pw4} />
                <Profilecard name="Shreya Agrawal" pos="Secretary" pic={pw3} />
                <Profilecard name="Taha Ali" pos="Web Master" pic={pw1} />
                <Profilecard name="Aakriti Raj" pos="Membership" pic={pw2} />
            </Center>
        </Center>
    )
}