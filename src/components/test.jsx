import React from "react";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { School } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const educationStages = [
    { label: "École Primaire", year: "2005 - 2010" },
    { label: "Collège", year: "2010 - 2014" },
    { label: "Lycée", year: "2014 - 2017" },
    { label: "Université", year: "2017 - 2021" },
    { label: "Master", year: "2021 - 2023" },
];

export default function EducationTimeline() {
    return (
        <Timeline position="alternate">
            {educationStages.map((stage, index) => (
                <TimelineItem key={index}>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <School />
                        </TimelineDot>
                        {index < educationStages.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6">{stage.label}</Typography>
                        <Typography color="textSecondary">{stage.year}</Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}
