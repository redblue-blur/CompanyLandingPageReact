import '../componentsCss/homenav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom'

const HomeNav = () => {
    return (  
    <>
    <Navbar expand="lg" className="mb-0 navColor navHeight">
        <Container fluid>
        <NavLink to="/">
            <img className='cLogo' src="assets/cname.jpg" alt="AGENCY" />
        </NavLink>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
        >
            <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-2 navText">
                <NavLink className="link" to="/whyus">WHY US</NavLink>
                <NavLink className="link" to="/about">ABOUT</NavLink>
                <NavLink className="link" to="/signup">SIGN UP</NavLink>
                <NavLink className="link" to="/login">LOGIN</NavLink>
            </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
    </Navbar>
    </>
    );
}

export default HomeNav