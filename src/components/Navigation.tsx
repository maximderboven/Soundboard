import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import BoardsIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/SettingsApplications";
import AboutIcon from "@mui/icons-material/InfoOutlined";

interface NavigationProps {
    isOpen: boolean;
    onClose: () => void
}

export function Navigation({isOpen, onClose}: NavigationProps) {
    return (
        <div>
            <Drawer open={isOpen} onClose={onClose}>
                <List sx={{width: 200}}>
                    {[
                        {label: "Boards", link: "/", icon: <BoardsIcon/>},
                        {label: "Settings", link: "/settings", icon: <SettingsIcon/>},
                        {label: "About", link: "/about", icon: <AboutIcon/>},
                    ].map((menuItem) => (
                        <ListItem disableGutters key={menuItem.link}>
                            <ListItemButton component="a" href={menuItem.link}>
                                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                <ListItemText primary={menuItem.label}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
