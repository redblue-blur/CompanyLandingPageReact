import '../componentsCss/homenav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const HomeNav = () => {
    return (  
    <>
    <Navbar expand="lg" className="mb-0 navColor navHeight">
        <Container fluid>
        <Navbar.Brand href="#">
            <img className='cLogo' src="assets/cname.jpg" alt="AGENCY" />
        </Navbar.Brand>
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
            <Nav className="justify-content-end flex-grow-1 pe-3 navText">
                <Nav.Link className="navText" href="#action1">WHY US</Nav.Link>
                <Nav.Link className="navText" navText href="#action1">ABOUT</Nav.Link>
                <Nav.Link className="navText" href="#action2">SERVICES</Nav.Link>
                <Nav.Link className="navText" href="#action2">CONTACT US</Nav.Link>
            </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
    </Navbar>
    </>
    );
}

export default HomeNav