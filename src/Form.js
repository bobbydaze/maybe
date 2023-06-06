import React from "react";
import Players from "./Players";

export default function Form() {
    return(
        <form>
            <fieldset className="playersList">
                <legend>Who is in?</legend>
                <Players />
            </fieldset>
        </form>  
    )
}