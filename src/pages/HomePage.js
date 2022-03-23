import React from 'react'

import Header from "../components/Header";
import HeroSection from "../components/HeroSection"
import PropertyTypeList from "../components/PropertyTypeList"
import PropertyList from '../components/PropertyList';
import Footer from "../components/Footer"

const HomePage = (props) => {
  return (
    <div className="container">
        <Header/>
        <HeroSection/>
        <PropertyTypeList propertyType={props.propertyType} />
        <PropertyList properties={props.properties} from="HomePage"/>
        <Footer/>
    </div>
  )
}

export default HomePage

// Home Page
