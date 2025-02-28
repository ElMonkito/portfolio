import Box from "@mui/material/Box";
import {Slide} from "@mui/material";
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import Carousel from "./caoursel"


export default function LandingPage() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 300);
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: "#0D1321",
                height: {xs: "70vh", md: "100vh"},
                display: "flex",
                flexDirection: {xs: "column", md: "row"},
                overflow: "auto",
            }}
        >
            <Box
                sx={{
                    width: {xs: "100%", md: "50%"},
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 3,
                }}
            >
                <Slide direction="top" in={visible} timeout={800}>
                    <Box sx={{maxWidth: "100%", marginTop: {xs: "20%", md: "0%"}}}>
                        <Typography variant="h1" sx={{color: "#C5D86D", fontSize: {xs: "3.3rem", md: "6rem"}}}>
                            Valentin Roth
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#FFEDDF",
                                textAlign: "right",
                                fontSize: {xs: "1rem", md: "1.5rem"},
                                maxWidth: "100%",
                                overflow: "hidden",
                                wordWrap: "break-word"
                            }}
                        >
                            CFC Développement d'applications
                        </Typography>
                    </Box>
                </Slide>
            </Box>
            <Slide direction="left" in={visible} timeout={800}>
                <Box
                    sx={{
                        width: {xs: "100%", md: "50%"},
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Carousel/>
                </Box>
            </Slide>
        </Box>
    );
}
