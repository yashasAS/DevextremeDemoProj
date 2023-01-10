import {Button, Container,Nav,Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from "react-router-dom"
export function Navbar() {
    return (
        <NavbarBs className="bg-info shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link  to="/"  as={NavLink}> Home  </Nav.Link>
                    <Nav.Link  to="/Registration"  as={NavLink}> Registration  </Nav.Link>
                    <Nav.Link  to="/Login"  as={NavLink}> Login </Nav.Link>
                </Nav>
                <Button style={{width:"3rem",height:"3rem"}} >
                
                    user
                </Button>
            </Container>
        </NavbarBs>
    )
}