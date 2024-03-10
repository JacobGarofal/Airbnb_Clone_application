import React from "react";
import './css/Header.css'
import logo from './Images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from "@mui/material";

function Header() {
    return (
        <div className="Header">
            <img className="Header__icon"
            src={logo}
            alt="" 
        />

            <div className="Header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

 export default Header