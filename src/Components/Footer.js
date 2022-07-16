import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <div className='footer' variant="dark">
        <Container>
        <Row className="footer-text" >
            <p className="text-xs-center text-white">
                &copy;{new Date().getFullYear()} Cochabamba - Bolivia
            </p>
        </Row>
        </Container>
    </div>
  )
}
