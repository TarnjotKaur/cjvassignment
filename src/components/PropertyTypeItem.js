import React from 'react'

import { Card, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'


const PropertyTypeItem = (props) => {
  return (
          <div className="col-md-3 col-sm-6">
            
            <Container>
              
              <Card border="dark" style={{ width: '16rem', height: '230px'}}>
              <Link to = {`/Property/Type/${props.typeName}`}> 
              <Card.Img variant="top" src={props.img} style={{  height: '180px'}} />
              </Link>
              <Card.Body>
              <Card.Title>{props.typeName}</Card.Title>
              <Card.Text>
                {props.price}
              </Card.Text>
              </Card.Body>

              {/* <Card.Footer>
              <small className="text-muted">Footer</small>
              </Card.Footer> */}
            </Card>
           
          </Container>
          </div>
  )
}

export default PropertyTypeItem
