import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyList from '../components/PropertyList'

const PropertyListingPage = (props) => {
  return (
    <div className="container">
    <Header/>
   <PropertyList properties={props.properties} from="PropertyListingPage"/>
    <Footer/>
    </div>
  )
}

export default PropertyListingPage
