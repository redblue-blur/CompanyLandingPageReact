import '../componentsCss/footer.css';
import Dropdown from 'react-bootstrap/Dropdown';
const Footer = () => {
    return (
    <>
    <footer>
        <div className="container-fluid bg-gray fheight">
            <Dropdown>
                <br/>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" value="English">
                    Language
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Marathi</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </footer>
    </>
    )
};

export default Footer;