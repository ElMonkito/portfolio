import { Box, Typography, Link, IconButton } from "@mui/material";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#0D1321",
                color: "#FFEDDF",
                textAlign: "center",
                py: 3,
                mt: "auto",
            }}
        >
            <Typography variant="h6" sx={{ mb: 1 }}>Retrouvez-moi sur :</Typography>

            <Box>
                <IconButton href="https://github.com/ElMonkito" target="_blank" sx={{ color: "#C5D86D" }}>
                    <GitHub />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/valentin-roth-b05764251/" target="_blank" sx={{ color: "#C5D86D" }}>
                    <LinkedIn />
                </IconButton>
                <IconButton href="valentin.roth05@gmail.com" sx={{ color: "#C5D86D" }}>
                    <MailOutline />
                </IconButton>
            </Box>

            <Typography variant="body2" sx={{ mt: 2 }}>
                <Link href="/mentions-legales" color="#C5D86D" sx={{ textDecoration: "none", mx: 1 }}>
                    Mentions Légales
                </Link>
                |
                <Link href="/contact" color="#C5D86D" sx={{ textDecoration: "none", mx: 1 }}>
                    Contact
                </Link>
            </Typography>

            <Typography variant="body2" sx={{ mt: 1 }}>
                © 2025 Valentin Roth | Tous droits réservés
            </Typography>
        </Box>
    );
}
