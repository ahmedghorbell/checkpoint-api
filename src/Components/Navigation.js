import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <Navbar bg="info" variant="info">
        <Container>
          <Navbar.Brand href="#home">USER APP</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={'/'}><Button variant="info" >Home</Button></Link>
            <Link to={'/users'}><Button variant="info">Users</Button></Link>
            <Link to={'/contact'}><Button variant="info">Contact us</Button></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation