import React from 'react'

import { Container, CardGroup } from 'react-bootstrap'
import {Row , Col} from 'react-bootstrap'


import PropertyItem from '../components/PropertyItem'

const PropertyList = (props) => {

  if(props.from==="HomePage")
  {
    return (
    <div> 
    <Container>
    <CardGroup>
    <h1> Bestsellers : </h1><br/>
    <div className="container">
      <div className="row">
      <div  className='grid grid-gap-1 grid-row-gap-2 grid-col-5'>
       {props.properties.map((properties)=>{ return properties.bestseller===true ?<PropertyItem title={properties.title} imgPath={properties.imgPath} price={properties.price}/>:""})} 
       </div>
      </div>
    </div>
    </CardGroup>
    <br/>
    </Container>
    <br/>
  </div>
    )
  }
  else if(props.from==="PropertyTypePage")
  {
    return (
    <div> 
    <Container>
    <CardGroup>
    <h1> {props.propertyTypeTitle} : </h1>
    <div className="container">
      <div className="row">
      <div  className='grid grid-gap-1 grid-row-gap-2 grid-col-4'>
      {props.properties.map((properties)=>{ return properties.type===props.propertyTypeTitle ?<PropertyItem title={properties.title} imgPath={properties.imgPath} price={properties.price}/>:""})} 
        </div>
      </div>
    </div>
    </CardGroup>
    <br/>
    </Container>
    <br/>
  </div>
    )
  }
  else if(props.from==="PropertyListingPage")
  {

    return (
      <div> 
      <Container>
      <CardGroup>
      <h1> Properties : </h1>
      <div className="container">
        <div className="row">
        <div  className='grid grid-gap-1 grid-row-gap-2 grid-col-4'>
        {props.properties.map((properties)=>{ return <PropertyItem title={properties.title} imgPath={properties.imgPath} price={properties.price}/>})} 
          </div>
        </div>
      </div>
      </CardGroup>
      <br/>
      </Container>
      <br/>
    </div>
      )
  }

}

export default PropertyList
