import React, { useState } from "react";
import './css/Banner.css';
import { Button } from "@mui/material";
import Search from "./Search";

function Banner(){

    const [showsearch, setshowsearch] = useState(false);

    return (
        <div className="banner">

            <div className="banner__search">
                {showsearch && <Search />}
                <Button onClick={() => 
                setshowsearch(!showsearch)} variant="outlined" className="banner__searchButton">
                    {showsearch
                    ? "Hide" :
                    "Search Dates"}

                </Button>
            </div>

            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>

                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you
                </h5>

                <Button variant='outlined'>Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner;