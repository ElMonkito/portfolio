import React from "react";
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from "@mui/lab";
import WorkIcon from '@mui/icons-material/Work';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {createTheme, ThemeProvider} from "@mui/material";

const educationStages = [
    {title: "École Primaire", name: "Attalens", year: "2010 - 2017"},
    {title: "École Secondaire", name: "Cycle d'orientation de la Veveyse", year: "2018 - 2021"},
    {title: "CFC Developpement d'applications", name: "Bern, SBB-CFF-FFS", year: "août 2021 - juillet 2024"},
    {title: "CFC Developpement d'applications", name: "Puidoux, Reist Telecom AG", year: "août 2024 - juillet 2025"},
];

export default function EducationTimeline() {
    const theme = createTheme({
        typography: {
            fontFamily: "Rubik",
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                backgroundColor: "#0D1321",
                height: {xs: "120vh", md: "65vh"},
                display: "flex",
                marginTop: {xs: "10%", md: "3%"},
                flexDirection: {xs: "column", md: "row"},
                overflow: "hidden",
                paddingBottom: {xs: "0%", md: "3%"}
            }}>
                <Timeline position="alternate" sx={{marginTop: {xs: "15%", md: "3%"}}}>
                    {educationStages.map((stage, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <WorkIcon sx={{ color: "#C5D86D"}}/>
                                </TimelineDot>
                                {index < educationStages.length - 1 && <TimelineConnector sx={{ height: {xs: "100px", md: "180px"} }}/>}
                            </TimelineSeparator>
                            <TimelineContent sx={{color: "white"}}>
                                <Typography variant="h6" sx={{color: "#C5D86D", fontSize: {xs: "1.3rem", md: "1.5rem"} }}>{stage.title}</Typography>
                                <Typography color="textSecondary" sx={{color: "#FFEDDF", fontSize: {xs: "0.9rem", md: "1.2rem"} }}>{stage.name}</Typography>
                                <Typography color="textSecondary" sx={{color: "#FFEDDF"}}>{stage.year}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </ThemeProvider>
    );
}
