import "./App.css";
import {Soundboard} from "./components/Soundboard";
import {Soundboards} from "./components/Soundboards";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Settings from "./components/Settings";
import SettingsContextProvider from "./context/SettingsContextProvider";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {Navigation} from "./components/Navigation";
import {useState} from "react";
import About from "./components/About";
//import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

axios.defaults.baseURL = "http://localhost:3001";
const queryClient = new QueryClient();

type HeaderProps = {
    onOpenDrawer: () => void;
};

const Header = ({onOpenDrawer}: HeaderProps) => (
    <AppBar position="static" color="transparent">
        <Toolbar sx={{justifyContent: "flex-start"}}>
            <IconButton onClick={onOpenDrawer}>
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6">React Soundboards</Typography>
        </Toolbar>
    </AppBar>
);

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <SettingsContextProvider>
                    <BrowserRouter>
                        <Header onOpenDrawer={handleDrawerToggle}/>
                        <Navigation
                            isOpen={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                        />
                        <Routes>
                            <Route path="/soundboards/:id" element={<Soundboard/>}/>
                            <Route path="/soundboards" element={<Soundboards/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/" element={<Soundboards/>}/>
                        </Routes>
                    </BrowserRouter>
                </SettingsContextProvider>
                {/*     <ReactQueryDevtools initialIsOpen={false}/> */}
            </QueryClientProvider>
        </>
    );
}

export default App;