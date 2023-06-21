import React from 'react'

import limpSvg from '../../Assets/imgs/limp-svg.webp'
import { Container, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

import './mainPage.css'


const MainPage = () => {
  return (
    <Container className='cont ps-5' fluid>
        <Row className='info d-flex align-items-center pt-5 '>
            <Col md={5}  className='company-info mb-auto mt-5'>
                <h1>ADVEM LIMP</h1>
                <h3>Soluções em limpeza</h3>
                <p className='w-75'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam eaque minima quisquam, ullam repudiandae quos.</p>
            </Col>
            <Col md={5} className='img-col'>
                <img src={limpSvg} alt="" />
            </Col>
        </Row>
    </Container>

    // <div className="container">
    //     <div className="info">
    //         <div className="title">

    //         </div>
    //         <div className="info-text">

    //         </div>
    //     </div>
    //     <div className="img-col">
    //         <img src={limpSvg} alt="" />
    //     </div>
    // </div>
  )
}

export default MainPage