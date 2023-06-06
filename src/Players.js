import React from "react";
import data from "./Data"

export default function Players (){
    const players = data.map(player => {
        return (
                <div className="player">
                    <h2>{player.name}</h2>
                    <input 
                        type="radio"
                        id={player.id}
                        // checked={}
                        // onChange={}
                        name={player.name}
                        value="in"
                    />
                    <label htmlFor={player.name}>in</label>
                    <br />
                    <input 
                        type="radio"
                        id={player.id}
                        // checked={}
                        // onChange={}
                        name={player.name}
                        value="out"
                     />
                    <label htmlFor={player.name}>out</label>
                    <br />
                </div>
        )
    })
    return players
}