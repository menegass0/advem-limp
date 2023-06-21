import React from 'react'

import limpSvg from '../../Assets/imgs/limp-svg.webp'
import { Container, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

import './mainPage.css'


const MainPage = () => {
  return (
    <Container className='cont ps-5 position-relative' fluid>
        <div className="circle1 position-absolute"></div>
        <div className="circle2 position-absolute"></div>
        <Row className='info d-flex align-items-center pt-5'>
            <Col ls={6} md={5} className='company-info mb-auto mt-5'>
                <h1 className='mb-0'>ADVEM LIMP</h1>
                <h3>Soluções em limpeza</h3>
                <p className='w-75'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam eaque minima quisquam, ullam repudiandae quos.</p>
            </Col>
            <Col lg={5} md={4} className='img-col mt-5'>
                <img src={limpSvg} />
            </Col>
        </Row>
    </Container>

  )
}

export default MainPage