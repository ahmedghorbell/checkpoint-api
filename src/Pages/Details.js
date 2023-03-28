import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./Detail.css"

const Details = () => {
  const navigate = useNavigate();

  const {id} = useParams();

  const [user, setUser] = useState({})

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  }, [id]);



  return (
    <div>
      <Button variant="dark" onClick={() => navigate(-1)} style={{margin:"20px"}}>Back</Button>
<br/>
<div class="image-wrapper">
  <img class="image-1" src="https://richmondo.in/wp-content/uploads/2022/10/man.jpg" alt="profile"/>
  <img class="image-2" src="https://richmondo.in/wp-content/uploads/2022/10/man.jpg" alt="profile"/>
  <img class="image-3" src="https://richmondo.in/wp-content/uploads/2022/10/man.jpg" alt="profile"/>
  <img class="image-4" src="https://richmondo.in/wp-content/uploads/2022/10/man.jpg" alt="profile"/>
</div>

      <>
        {["secondary"].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "48rem" , margin:"40px"}}
            className="mb-2"
          >
            <Card.Header>{user.name}</Card.Header>
            <Card.Body>
              <Card.Text>username:  {user.username}</Card.Text>
              <Card.Text>email:  {user.email}</Card.Text>
              <Card.Text>address:  {user.address?.street} {user.address?.suite} {user.address?.city}</Card.Text>
              <Card.Text>phone:  {user.phone}</Card.Text>
              <Card.Text>website:  {user.website} </Card.Text>
              <Card.Text>company:  {user.company?.name} </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    </div>
  );
};

export default Details;
