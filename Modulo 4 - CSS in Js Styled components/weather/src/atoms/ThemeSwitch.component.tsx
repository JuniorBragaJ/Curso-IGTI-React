import React from 'react';
import { useAtom } from 'jotai';
import Switch from 'react-switch';
import { themeAtom } from '../global';
import { IconContext } from 'react-icons';
import {IoMoon, IoSunny} from 'react-icons/all';


const ThemeSwitch = () => {
    const [theme, setTheme] = useAtom(themeAtom);
    const handleChange = () => setTheme(theme === "dark" ? "light" : "dark");
    return (
        <IconContext.Provider value={{color: 'yellow'}}>
            <Switch
            onColor={"#041301"} 
            offColor={"#76c919"}
            onChange= {handleChange}
            checked={theme === 'dark'}
            checkedIcon={<IoMoon size={"1.2rem"} style={{paddingLeft: "8px", paddingTop: "5px"}}/>}
            uncheckedIcon={<IoSunny size={"1.2rem"} style={{paddingLeft: "5px", paddingTop: "5px"}}/>}
            />
        </IconContext.Provider>
    );
}

export default ThemeSwitch