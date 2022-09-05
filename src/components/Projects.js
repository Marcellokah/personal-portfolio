import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import memoryGame from "../assets/img/memory-game.png";
import fightingGame from "../assets/img/fighting-game.png";
import ticTacToe from "../assets/img/tic-tac-toe.png";
import 'animate.css';

export const Projects = () => {

    const projects = [
        {
            title: "Fighting Game",
            description: "Vanilla Javascript with HTML Canvas",
            imgUrl: fightingGame,
        },
        {
            title: "Memory Game",
            description: "React App",
            imgUrl: memoryGame,
        },
        {
            title: "Tic Tac Toe",
            description: "Vanilla Javascript with HTML Canvas",
            imgUrl: ticTacToe,
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>In this section you can find a few of my projects.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Games</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Portfolio</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">GitHub</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>This personal portfolio page is the most precious project that I've worked on. Made with React, Bootstrap, Animate.css and with lots of love of course. </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>On my GitHub profile, you can find all of these project repositories published. Feel free to check them out <a href="https://github.com/Marcellokah"> HERE</a>!</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}