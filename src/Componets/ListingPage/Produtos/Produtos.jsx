import React from 'react'
import { Col, Row } from 'react-bootstrap'


import './produtos.css'


const Produtos = ({items}) => {
  return(
    <Row className='gap-2 d-flex justify-content-between float-left'>
      {items.map((item) => {
        return (
          <Col sm={12} md={5} lg={3} key={item.id} className='item p-0 mb-3'>
            <div className="card">
              <img src={item.img} className="card-img-top" alt="..." fluid/>
              <div className="card-body p-2 pt-3">
                <h6 className="card-subtitle mb-1">{item.categoria}</h6>
                <h5 className="card-title">{item.nome}</h5>
                <h6 className="card-text text-end">R${item.preco}</h6>
              </div>
            </div>
          </Col>
          )
      })}
      {items.length % 3 === 2 ? <Col sm={12} md={5} lg={3} key={items.length+1} className='item p-0 mb-3' /> : ''}
    </Row>
  )
}

export default Produtos