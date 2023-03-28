import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div>
      
      <Card border="secondary" style={{ width: "18rem", borderWidth: "3px" , marginTop:"10px"}}>
        <Card.Header>{user.name}</Card.Header>
        <Card.Img variant="top" src="https://glenfarrow.co.uk/wp-content/uploads/User-icon.png" />
        <Card.Body>
          <Card.Title>{user.username}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Link to={`/details/${user.id}`}><Button variant="primary">More Details</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
