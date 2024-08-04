import React from "react";
import players from "../players";
import PlayerCard from "./PlayerCard";
 
const PlayersList = () => {
  console.log(players);
  return (
  <div style={{display:'flex' ,justifyContent:'space-around', gap:"20px", flexWrap:"wrap",marginTop:"50px"}}>
    {
players.map((player)=> <PlayerCard player={player} key={player.name}/>)
    }
  </div>
    )
};

export default PlayersList;
