import React from "react";
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from "@mui/lab";
import {School} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const educationStages = [
    {title: "École Primaire", name: "Attalens", year: "2010 - 2017"},
    {title: "École Secondaire", name: "Cycle d'orientation de la Veveyse", year: "2018 - 2021"},
    {title: "CFC Developpement d'application", name: "Bern, SBB-CFF-FFS", year: "août 2021 - juillet 2024"},
    {title: "CFC Developpement d'application", name: "Puidoux, Reist Telecom AG", year: "août 2024 - juillet 2025"},
];

export default function EducationTimeline() {
    return (
        <Box sx={{
            backgroundColor: "#0D1321",
            height: {xs: "100vh", md: "50vh"},
            display: "flex",
            marginTop: {xs: "10%", md: "3%"},
            flexDirection: {xs: "column", md: "row"},
            overflow: "hidden",
        }}>
            <Timeline position="alternate" sx={{marginTop: {xs: "15%", md: "3%"} }}>
                {educationStages.map((stage, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <School/>
                            </TimelineDot>
                            {index < educationStages.length - 1 && <TimelineConnector/>}
                        </TimelineSeparator>
                        <TimelineContent sx={{color: "white"}}>
                            <Typography variant="h6" sx={{color: "#C5D86D"}}>{stage.title}</Typography>
                            <Typography color="textSecondary" sx={{color: "#FFEDDF"}}>{stage.name}</Typography>
                            <Typography color="textSecondary" sx={{color: "#FFEDDF"}}>{stage.year}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </Box>
    );
}
