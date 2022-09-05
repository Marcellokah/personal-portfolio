import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/me.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Web Developer", "Front - End Developer", "Student"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
        // eslint-disable-next-line
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <span className="tagline">Welcome to my Portfolio!</span>
                                        <h1>{`Hi, I'm Marcell Almási - `} </h1> <h1
                                        className="txt-rotate"><span className="wrap">{text}</span></h1>
                                        <p>As the title mentions, I am a student of University of Szeged, learning at Computer Science Engineering department. Currently on passive status, looking for job opportunities in web development. Besides that, my biggest goal at the moment, is to became a full-time front-end developer.</p>
                                        <HashLink to='#connect'>
                                            <button><span>Let's Connect<ArrowRightCircle size={25} /></span></button>
                                        </HashLink>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>
    )
}