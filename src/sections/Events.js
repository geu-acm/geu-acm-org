import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import { Center } from "@mantine/core";
import Eventcard from "../components/Eventcard";

export default function Events() {
    return (
        <div class="events">
            <Center>
                <h1>
                    Recent Events
                </h1>
            </Center>
            <Center className="evcards">
                <Eventcard
                    name="Days of DevOps"
                    desc="A month long event where students learn about Github, Docker, Kubernetes, Jenkins, Ansible and more."
                    img="https://geu.acm.org/Aurora/DevOps-poster-final-1.png" />
                <Eventcard
                    name="Exploratory Data Analysis"
                    desc="Learn how to use Python to analyze data."
                    img="https://geu.acm.org/Aurora/EDA.png" />
                <Eventcard
                    name="Data Visualization using Power BI"
                    desc="Workdshop on Data Visualization and analysis with Power BI."
                    img="https://geu.acm.org/Aurora/Power%20BI.png" />

                {/* <Swiper
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper" >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper> */}
            </Center>
        </div>
    )
}