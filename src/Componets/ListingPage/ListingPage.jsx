import React, { useState } from 'react'
import Produtos from './Produtos/Produtos'
import itemsData from '../../Assets/data/produtos'
import Tags from './Tags/Tags'

import { Container, Row, Col } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

import './listingPage.css'

const allCategories = ['todos',...new Set(itemsData.map((item) => item.categoria))]

const ListingPage = () => {
  const [items, setItems] = useState(itemsData)
  const [categorias, setCategorias] = useState(allCategories);
  console.log(categorias);

  const filterItems = (categoria) =>{
    if(categoria === 'todos'){
      setItems(itemsData);
      return
    }
    const novosItems = itemsData.filter((item) => item.categoria === categoria)
    setItems(novosItems);
  }

  return (
    <Container className='cont px-5' fluid>
      {/* <Row><h1 className='text-center'>Conheça nossos produtos</h1></Row> */}
      <Row>
        <Col md={3}>
          <h5 className='text-center mb-4'>Tags</h5>
          <Tags categorias={categorias} filterItems={filterItems}></Tags>
        </Col>
        <Col className='listingSection px-2 px-md-5 mt-5 mt-md-0'>
          <Row className='mb-5'>
            <Col className='position-relative search p-0'>
              <input type='text' className='searchbar py-2 ps-5 m-0 border-0 w-100' placeholder='Desinfetante, prendedores, cloro...' />
              <FaSearch className='position-absolute icon'/>
            </Col>
          </Row>
          <Produtos items={items}/>
        </Col>
      </Row>
    </Container>
  )
}

export default ListingPage