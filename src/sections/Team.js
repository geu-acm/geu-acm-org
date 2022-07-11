import { Center, Text, Container } from "@mantine/core";
import Profilecard from "../components/Profilecard";

export default function Team() {
    return (
        <Center className="team">
            <Center class="profile-card">
                <Profilecard />
            </Center>
        </Center>

    )
}