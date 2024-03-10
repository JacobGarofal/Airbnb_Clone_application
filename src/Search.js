import React, { useState } from "react";
import "./css/Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { Button } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People"

// DATE PICKER COMPONENENT
function Search(){

    const [startDate, SetStartDate] = useState(new Date());
    const [EndDate, SetEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        EndDate: EndDate,
        key: "selection"

    }

    function handleSelect(ranges){
        SetStartDate(ranges.selection.startDate)
        SetEndDate(ranges.selection.EndDate)
    }


    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]} onChange=
                {handleSelect} />

                <h2>Number of Guests
                    <PeopleIcon />
                </h2>

                <input min={0}
                defaultValue={2}
                type="number" />
                
                <Button>Search Airbnb</Button>
            
        </div>
    )
}

export default Search;