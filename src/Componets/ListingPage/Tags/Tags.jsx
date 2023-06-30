import React from 'react'
import { Col, Row } from 'react-bootstrap'

import './tags.css'

const Tags = ({categorias, filterItems}) => {
  return (
    <Row className='tags gap-1'>
        {categorias.map((categoria, index) => {
            return <button className='col-auto tag mt-1 border-0 fs-5' key={index} onClick={() => filterItems(categoria)}>{categoria}</button>
        })}
    </Row>
  )
}

export default Tags
{/* <Col className='col-auto tag mt-1'><p className='m-0'>{categoria}</p></Col> */}