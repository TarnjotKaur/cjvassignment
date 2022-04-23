import React from 'react'

import { useParams } from 'react-router-dom';

import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyList from '../components/PropertyList'

const PropertyTypePage = (props) => {

  const params = useParams();

  const propType = params.typeName;

  return (
    <div className="container">
    <Header/>
   <PropertyList propertyTypeTitle={propType} properties={props.properties} from="PropertyTypePage"/>
    <Footer/>
</div>
  )
}

export default PropertyTypePage
