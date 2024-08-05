import React from "react";
import { Card } from "react-bootstrap";
import '../styles/card.css'
 

const PlayerCard = ({ imageUrl,name,team,age,nationality,jerseyNumber }) => {
  return (
    <div>
    <Card className="custom-card">
      <Card.Img variant="top" src={imageUrl} className="custom-card-img" /> <hr/>
      <Card.Body className="custom-card-body">
        <Card.Title className="custom-card-title">{name}</Card.Title>
        <Card.Text className="custom-card-text">{`Team : ${team}`}</Card.Text>
        <Card.Text className="custom-card-text">{`Nationality : ${nationality}`}</Card.Text>
        <Card.Text className="custom-card-text">{`Age : ${age}`}</Card.Text>
        <Card.Text className="custom-card-text">{`Number : ${jerseyNumber}`}</Card.Text>
      </Card.Body>
    </Card>
  </div>
  );
};



PlayerCard.defaultProps = {
    imageUrl: "defaultImageUrl.jpg",
    name: "Default Name",
    team: "Default Team",
    nationality: "Default Nationality",
    age: "Default Age",
    jerseyNumber: "Default Number"}
export default PlayerCard;
