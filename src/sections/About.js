import { Center, Text, Container } from "@mantine/core";

export default function About() {
    return (
        <Center>
            <div class="about" id="about">
                <br /><br />
                <Center>
                    <h1> About Us </h1>
                </Center>
                <Center >
                    GEU-ACM is the student chapter organization subsidiary of ACM.
                    It is an organization that provides an opportunity for students to
                    acquire proficiency in not only technical but also non-technical domains.
                    The students can augment their skills, implement their knowledge and gain
                    expertise in the various thought-provoking events, SIGs, workshops, and
                    illustrious contests organized by us.
                    <div className="aboutus-img" />
                </Center>
                <div style={{ height: "20vh" }} />
            </div>
        </Center>
    )
}