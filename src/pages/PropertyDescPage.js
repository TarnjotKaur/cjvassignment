import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import PropertyDesc from '../components/PropertyDesc'
import { useParams } from 'react-router-dom';

const PropertyDescPage = (props) => {


  const params = useParams();

  const propTitle = params.title;
  


  return (

    <div className="container">
    <Header/>
    <PropertyDesc properties={props.properties} propTitle={propTitle}/>
    <Footer/>
</div>
  )
}

export default PropertyDescPage
