import { Center, Text, Container, SimpleGrid, MediaQuery } from "@mantine/core";
import Profilecard from "../components/Profilecard";

export default function Team() {
    return (
        <Center className="team">
            <Center>
                <h1> Our Team </h1>
            </Center>
            <Center className="pcard-wrap" style={{ display: "block" }}>
                <Center>
                    <h3>
                        Our Instructor ❤️
                    </h3>
                </Center>
                <Profilecard name="Sarishma Dangi" in="true" pos="Assistant Professor" pic="https://geu.acm.org/core/Sarishma%20Dangi.jpeg" />
                <br/><br/>
                <Center>
                    <h3>
                        Our Office Bearers 🤠 
                    </h3>
                </Center>
            </Center>
            <Center className="pcard-wrap">
                <Profilecard name="Diksha Bisht" pos="Chair" pic="https://geu.acm.org/core/Diksha.jpg" />
                <Profilecard name="Ayush Gupta" pos="Vice Chair" pic="https://geu.acm.org/core/profile.jpeg" />
                <Profilecard name="Gaurangi Tripathi" pos="Secretary" pic="https://geu.acm.org/core/Gaurangi%20Tripathi.jfif" />
                <Profilecard name="Harsh Vardhan" pos="Web Master" pic="https://geu.acm.org/core/Harsh%20Vardhan%20Singh%20Rawat.jpg" />
                <Profilecard name="Vaibhav Jain" pos="Treasurar" pic="https://geu.acm.org/core/Vaibhav%20jain.jpg" />
                <Profilecard name="Priyank Gupta" pos="Membership" pic="https://geu.acm.org/core/Priyank%20Gupta.jpg" />
                <Profilecard name="Abhinav Bhatia" pos="Technical Head" pic="https://geu.acm.org/core/ABHINAV%20MOHAN%20BHATIA.jpg" />
                <Profilecard name="Anshul Pandey" pos="Management" pic="https://geu.acm.org/core/Anshul.jpg" />
            </Center>
        </Center>
    )
}