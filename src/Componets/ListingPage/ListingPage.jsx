import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

import produto1 from '../../Assets/imgs/produto1.png'

import './listingPage.css'

const ListingPage = () => {
  const imgPath = '../../Assets/imgs/';
  return (
    <Container className='cont px-5' fluid>
      {/* <Row><h1 className='text-center'>Conheça nossos produtos</h1></Row> */}
      <Row>
        <Col md={3}>
          <Row>
            <h5 className='text-center'>Tags</h5>
          </Row>
          {/* componente tag */}
          <Row className='tags gap-1'>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste muito maior pra caralho</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste maior</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste maior</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste maior</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste maior</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0'>teste</p></Col>
            <Col className='col-auto tag mt-1'><p className='m-0 d-flex'>teste</p></Col>
          </Row>
        </Col>
        <Col className='listingSection px-2 px-md-5 mt-5 mt-md-0'>
          <Row className='mb-5'>
            <Col className='position-relative search p-0'>
              <input type='text' className='searchbar py-2 ps-5 m-0 border-0 w-100' placeholder='Desinfetante, prendedores, cloro...' />
              <FaSearch className='position-absolute icon'/>
            </Col>
          </Row>
          {/* componente item */}
          <Row className='gap-2 d-flex justify-content-between'>
            <Col sm={12} md={5} lg={3} className='item p-0 mb-3'>
              <div className="card">
                <img src={produto1} className="card-img-top" alt="..." fluid/>
                <div className="card-body p-2 pt-3">
                  <h6 class="card-subtitle mb-1">Desinfetante</h6>
                  <h5 className="card-title">Algas Marinhas</h5>
                  <h6 className="card-text text-end">R$15,00</h6>
                </div>
              </div>
            </Col>

            <Col sm={12} md={5} lg={3} className='item p-0 mb-3'>
              <div className="card">
                <img src={produto1} className="card-img-top" alt="..." fluid/>
                <div className="card-body p-2 pt-3">
                  <h6 class="card-subtitle mb-1">Desinfetante</h6>
                  <h5 className="card-title">Algas Marinhas</h5>
                  <h6 className="card-text text-end">R$15,00</h6>
                </div>
              </div>
            </Col>

            <Col sm={12} md={5} lg={3} className='item p-0 mb-3'>
              <div className="card">
                <img src={produto1} className="card-img-top" alt="..." fluid/>
                <div className="card-body p-2 pt-3">
                  <h6 class="card-subtitle mb-1">Desinfetante</h6>
                  <h5 className="card-title">Algas Marinhas</h5>
                  <h6 className="card-text text-end">R$15,00</h6>
                </div>
              </div>
            </Col>

            <Col sm={12} md={5} lg={3} className='item p-0 mb-3'>
              <div className="card">
                <img src={produto1} className="card-img-top" alt="..." fluid/>
                <div className="card-body p-2 pt-3">
                  <h6 class="card-subtitle mb-1">Desinfetante</h6>
                  <h5 className="card-title">Algas Marinhas</h5>
                  <h6 className="card-text text-end">R$15,00</h6>
                </div>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ListingPage