import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} className="text-center">
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/marcell-alm%C3%A1si/"><img src={navIcon1} alt="LinkedIn" /></a>
                                <a href="https://www.facebook.com/almasimarcell/"><img src={navIcon2} alt="Facebook" /></a>
                                <a href="https://www.instagram.com/marcell_almasi/"><img src={navIcon3} alt="Instagran" /></a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}