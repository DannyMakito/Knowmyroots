import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import PhoneBook from "./PhoneBook";
import WhatsAppLink from "./WhatsAppLink";
import InstagramLink from "./InstagramLink";
import FacebookLink from "./FacebookLink";

function Footer(){
    return(
        <section className="section footer bg-dark text-white">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h6>Company Infomation</h6>
                            <hr/>
                            <p>
                            "KnowMyCulture" could be envisioned as a comprehensive platform dedicated to promoting and 
                            preserving traditional cultures around the world. Such a platform would serve as a hub for cultural education,
                             engagement, and preservation. Here’s a detailed vision for KnowMyCulture:
                            </p>
                        </Col>

                        <Col md={4}>
                        <h6>SOME LINKS</h6>
                        <hr/>
                            <div><Link to="/">Home</Link></div>
                            <div><Link to="/aboutus">about</Link></div>
                            <div><Link to="/library">contacts</Link></div>
                            <div><Link to="/selection">new</Link></div>
                        </Col>

                        <Col md={4}>
                        <h6>Contacts infomation</h6>
                        <hr/>
                            {/* <div>Sunning hill 64 brookStreet</div> */}
                            <PhoneBook></PhoneBook>
                            <WhatsAppLink/>
                            <InstagramLink/>
                            <FacebookLink/>
                            {/* <div><p>knowmyroot@gmail</p></div> */}
                        </Col>
                    </Row>
                </Container>
        </section>
    );
}


export default Footer;