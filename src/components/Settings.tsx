import {
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Switch,
} from "@mui/material";
import {useContext} from "react";
import SettingsContext, {ISettingsContext} from "../context/SettingsContext";

export default function Settings() {
    const {showNames, toggleShowNames} =
        useContext<ISettingsContext>(SettingsContext);
  
    return (
        <div className="settings">
            <h2>Settings</h2>
            <FormControl>
                <FormLabel>Change settings</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={showNames} onChange={toggleShowNames}/>}
                        label="Show names"
                    />
                </FormGroup>
            </FormControl>
        </div>
    );
}
