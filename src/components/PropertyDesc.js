import React from 'react'

import { Card , ListGroup, ListGroupItem , Badge} from 'react-bootstrap'

const PropertyDesc = (props) => {

  const p = props.properties.filter(property=>property.title===props.propTitle)


  return (
    <div>
    <br/>
      <hr/>
       {/*  <h1>{p[0].title}</h1>
      <hr/>
      <Card.Img variant="top" src={p[0].img} />
      <hr/>*/}
      <br/> 

      <Card >
  <Card.Img variant="top" src={p[0].imgPath} />
  <Card.Body>
  {p[0].bestseller===true? <Badge bg="success">BestSeller</Badge> : ""}
    <Card.Title><h1>{p[0].title}</h1>
    </Card.Title>
    <Card.Text>
      {p[0].description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><b>{p[0].price}</b></ListGroupItem>
    <ListGroupItem>{p[0].type}</ListGroupItem>
    <ListGroupItem>{p[0].amenities}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">{p[0].location}</Card.Link>
  </Card.Body>
</Card>


    </div>
  )
}

export default PropertyDesc
