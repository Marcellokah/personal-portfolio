import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmlLogo from "../assets/img/html.svg";
import cssLogo from "../assets/img/css.svg";
import jsLogo from "../assets/img/javascript.svg";
import reactLogo from "../assets/img/react.svg";
import boostrapLogo from "../assets/img/bootstrap.svg";
import threejsLogo from "../assets/img/threejs.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-box wow zoomIn">
                            <h2>
                                Skills
                            </h2>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={htmlLogo} alt="HTML" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={cssLogo} alt="CSS" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={jsLogo} alt="JS" />
                                    <h5>JS</h5>
                                </div>
                                <div className="item">
                                    <img src={reactLogo} alt="React" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={boostrapLogo} alt="Bootstrap" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={threejsLogo} alt="ThreeJS" />
                                    <h5>ThreeJS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}