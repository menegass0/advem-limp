import React from 'react'
import { Col } from 'react-bootstrap'

import produto1 from '../../../Assets/imgs/produto1.png'

import './produto.css'


const Produto = () => {
  return (
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
  )
}

export default Produto