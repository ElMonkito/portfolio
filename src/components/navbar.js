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

function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = ["Accueil", "À propos", "Contact"];

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: "#42daba", padding: 1 }}>
                    <Toolbar>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1.5rem",
                                color: "black",
                            }}
                        >
                            Valentin Roth
                        </Typography>

                        <Box sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}>
                            <IconButton onClick={handleDrawerToggle} sx={{ color: "black" }}>
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Box sx={{ display: { xs: "none", md: "block" }, ml: "auto" }}>
                            {menuItems.map((item) => (
                                <Button key={item} variant="text" sx={{
                                    color: "black",
                                    fontWeight: "bold",
                                    "&:hover": { transform: "scale(1.1)" }
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
                    sx={{ "& .MuiDrawer-paper": { bgcolor: "#42daba" }}}
                >
                    <List sx={{ width: 250 }}>
                        {menuItems.map((item) => (
                            <ListItem button key={item} onClick={handleDrawerToggle}>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
        </ThemeProvider>
    );
}

export default Navbar;
