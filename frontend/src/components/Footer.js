import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>Direitos Reservados &copy; Amariss Semijóias</p>
                        <p>Avenida Centenário, 2699, sala 20, Angeloni Center, Criciúma 888011000</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
