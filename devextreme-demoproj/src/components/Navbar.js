import { Container,Nav, Navbar  as NavbarBs } from "react-bootstrap"
import {NavLink} from "react-router-dom"

export function Navbar() {
    return (
        <NavbarBs sticky='top'>
            <Container>
                <Nav >
                    <Nav.Link to="/" as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to="/Registration" as={NavLink}>
                        Registration
                    </Nav.Link>
                    <Nav.Link to="/Login" as={NavLink}>
                        Login
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}