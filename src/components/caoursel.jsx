import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img from "../images/mui.png"
import imgExtractor from "../images/data-extractor.png"

export default function Carousel() {
    const projects = [
        {
            title: "Data Extractor",
            image: imgExtractor,
            link: "https://data-extractor-exemple.streamlit.app/"
        },
        {
            title: "Material UI",
            image: img,
            link: "https://mui.com/material-ui/all-components/"
        },
        {
            title: "Material UI temp",
            image: img,
            link: "https://mui.com/material-ui/all-components/"
        }
    ]
    return (
        <Box sx={{ width: "80%", margin: "auto", alignContent: "center" }}>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                style={{ borderRadius: "10px", overflow: "hidden" }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            component="a"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                display: "block",
                                position: "relative",
                                width: "100%",
                                height: {xs: "30vh", md: "40vh"},
                                overflow: "hidden",
                                borderRadius: "10px",
                                cursor: "pointer"
                            }}
                        >
                            <Box
                                component="img"
                                src={project.image}
                                alt={project.title}
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.05)"
                                    }
                                }}
                            />

                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    width: "100%",
                                    bgcolor: "#0D1321",
                                    opacity: "0.6",
                                    color: "white",
                                    textAlign: "center",
                                    py: 2
                                }}
                            >
                                <Typography variant="h5" sx={{ color: "#FFEDDF"}}>{project.title}</Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}