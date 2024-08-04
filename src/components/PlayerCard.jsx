import React from "react";
import { Card } from "react-bootstrap";
import '../styles/card.css'

const PlayerCard = ({ player }) => {
  return (
    <div>
    <Card className="custom-card">
      <Card.Img variant="top" src={player.imageUrl} className="custom-card-img" /> <hr/>
      <Card.Body className="custom-card-body">
        <Card.Title className="custom-card-title">{player.name}</Card.Title>
        <Card.Text className="custom-card-text">{`Team : ${player.team}`}</Card.Text>
        <Card.Text className="custom-card-text">{`Nationality : ${player.nationality}`}</Card.Text>
        <Card.Text className="custom-card-text">{`Age : ${player.age}`}</Card.Text>
        <Card.Text className="custom-card-text">{`Number : ${player.jerseyNumber}`}</Card.Text>
      </Card.Body>
    </Card>
  </div>
  );
};
PlayerCard.defaultProps = {
  player: {
    imageUrl: "defaultImageUrl.jpg",
    name: "Default Name",
    team: "Default Team",
    nationality: "Default Nationality",
    age: "Default Age",
    jerseyNumber: "Default Number"
  }
};

export default PlayerCard;
