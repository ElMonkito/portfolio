import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import content from "../data/content.json";


export default function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { label: "Accueil", path: "accueil" },
        { label: "À propos", path: "apropos" },
        { label: "Parcours", path: "parcours" },
    ];

    return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{ backgroundColor: "#C5D86D", padding: 1, minHeight: {xd: "80px", md: "120px"}, justifyContent: "center" }}>
                    <Toolbar>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: {xs: "1.8rem", md:"2.5rem"},
                                color: "#0d1321",
                                cursor: "pointer",
                            }}
                        >
                            {content.navbar.title}
                        </Typography>

                        <Box sx={{ display: { xs: "block", md: "none" }, ml: "auto" }}>
                            <IconButton onClick={handleDrawerToggle} sx={{ color: "#0d1321"}}>
                                <MenuIcon sx={{fontSize: "38px" }} />
                            </IconButton>
                        </Box>

                        <Box sx={{ display: { xs: "none", md: "block" }, ml: "2%" }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-70}
                                    variant="text"
                                    sx={{
                                        fontSize: "1.3rem",
                                        color: "#0d1321",
                                        fontWeight: "bold",
                                        "&:hover": { transform: "scale(1.1)", color: "#0d1321" },
                                        cursor: "pointer",
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    sx={{ "& .MuiDrawer-paper": { bgcolor: "#C5D86D" } }}
                >
                    <List sx={{ width: 250 }}>
                        {menuItems.map((item) => (
                            <ListItem
                                button
                                key={item.label}
                                component={Link}
                                to={item.path}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={handleDrawerToggle}
                                sx={{ cursor: "pointer" }}
                            >
                                <ListItemText primaryTypographyProps={{fontSize: "1.3rem", fontWeight: "bold"}} primary={item.label} sx={{ color: "#0d1321", textAlign: "center"}} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
    );
}
