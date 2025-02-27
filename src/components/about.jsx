import * as React from 'react';
import Box from "@mui/material/Box";
import portrait from "../images/portrait.jpg"
import Typography from "@mui/material/Typography";
import content from "../data/content.json"
import {Grow} from "@mui/material";

export default function About() {

    return (
        <Grow in={true} timeout={1500}>
            <Box
                sx={{
                    minHeight: {xs: "100vh", md: "75vh"},
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    overflow: "hidden",
                }}>
                <Box
                    sx={{
                        width: {xs: "100%", md: "50%"},
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                    }}>
                    <Box component="img" src={portrait} alt="Portrait image"
                         sx={{
                             marginTop: {xs: "10%", md: "5%"},
                             width: {xs: "55%", md: "35%"},
                             borderRadius: "5%",
                             boxShadow: 5,
                             height: "auto",
                             maxHeight: "100%",

                         }}/>
                </Box>
                <Box
                    sx={{
                        width: {xs: "100%", md: "50%"},
                        display: "flex",
                        alignItems: {xs: "center", md: "flex-start"},
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: "left",
                        padding: {xs: 2, md: 4},
                    }}
                >

                    <Typography variant="h2" sx={{width: "80%", color: "#C5D86D", marginTop: {xs: "7%", md: "0%"}}}>
                        {content.about.title}
                    </Typography>
                    <Typography variant="h4" sx={{width: "80%", color: "#0D1321", fontSize: {xs: "1.5rem", md: "2rem"} }}>
                        {content.about.presentation}
                    </Typography>
                </Box>
            </Box>
        </Grow>

    );
}