import React from 'react'

import { Container, CardGroup } from 'react-bootstrap'
import {Row , Col} from 'react-bootstrap'

import PropertyTypeItem from './PropertyTypeItem'


const PropertyTypeList = (props) => {

  

  return (
    <div>
      <Container>
      <CardGroup>
        <div>
          <div >
          <Row>
            <Col>
            <div className='grid grid-gap-1 grid-row-gap-2 grid-col-5'>
            {props.propertyType.map((propertyType)=>(<PropertyTypeItem key={propertyType.id} id={propertyType.id} typeName={propertyType.typeName} img={propertyType.imgPath}/>))}
            </div>
            </Col>
            </Row>
          </div>
        </div>
      </CardGroup>
      </Container>
      <br/>
      <hr/>
    </div>

  )
}

export default PropertyTypeList
