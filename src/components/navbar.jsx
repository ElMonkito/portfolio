import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, IconButton, Drawer, List, ListItem, ListItemText, createTheme, ThemeProvider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const theme = createTheme({
    typography: {
        fontFamily: "Rubik"
    },
});

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = ["Accueil", "À propos", "Parours", "Projets"];

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "#C5D86D", padding: 1 }}>
                    <Toolbar>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1.5rem",
                                color: "#0d1321",
                            }}
                        >
                            Valentin Roth
                        </Typography>

                        <Box sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}>
                            <IconButton onClick={handleDrawerToggle} sx={{ color: "#0d1321" }}>
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Box sx={{ display: { xs: "none", md: "block" }, ml: "2%" }}>
                            {menuItems.map((item) => (
                                <Button key={item} variant="text" sx={{
                                    color: "#0d1321",
                                    fontWeight: "bold",
                                    "&:hover": { transform: "scale(1.1)", color: "#0d1321" }
                                }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>

                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{ "& .MuiDrawer-paper": { bgcolor: "#C5D86D" }}}
                >
                    <List sx={{ width: 250 }}>
                        {menuItems.map((item) => (
                            <ListItem button key={item} onClick={handleDrawerToggle}>
                                <ListItemText primary={item} sx={{ color: "#0d1321", "&:hover": {transform: "scale(1.1)"} }} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
        </ThemeProvider>
    );
}

