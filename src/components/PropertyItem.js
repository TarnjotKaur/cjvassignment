import React from 'react'

import { Card, Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'


const PropertyItem = (props) => {
  return (
          <div className="col-md-3 col-sm-6">
            
            <Container i>
            <div className="itemImg">
              <Card border="dark" style={{ width: '16rem' , height: '300px'}}>
            <Link to= {`/property/${props.title}`} >
             
              <Card.Img variant="top" src={props.img} style={{  height: '190px'}}/>
              </Link>
              <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                {props.price}
              </Card.Text>
              </Card.Body>

              {/* <Card.Footer>
              <small className="text-muted">Footer</small>
              </Card.Footer> */}
            </Card>
            </div>
          </Container>
          </div>
  )
}

export default PropertyItem
