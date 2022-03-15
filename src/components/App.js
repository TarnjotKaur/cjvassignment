import "../assets/css/App.css"
import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {useState,useEffect} from 'react' 


import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import PropertyDescPage from "../pages/PropertyDescPage";
import PropertyTypePage from "../pages/PropertyTypePage"
import PropertyListingPage from "../pages/PropertyListingPage";

const App = () => {
 

useEffect(()=>{
    fetch('http://localhost:5000/properties')   
    .then(response=>response.json())          
    .then(json=>{                                   
      setProperties(json);                                   
    }).catch(err=>{
      console.log(`Error ${err}`);
    })  


    fetch('http://localhost:5000/propertyType')   
    .then(response=>response.json())          
    .then(json=>{                                   
      setPropertyType(json);                                   
    }).catch(err=>{
      console.log(`Error ${err}`);
    })  
    
    
  
},[]);


const [properties , setProperties] = useState([{
      id: 0, 
      title: "", 
      price: "",
      img:null,
      type:"",
      location:"",
      bestseller:false,
      desc:"",
      rules:"",
      amenties:"" 
}])

const [propertyType , setPropertyType] = useState([{
  id:0,
  typeName:"",
  img:null
}]) 




  return (

<BrowserRouter>

<Routes>


  <Route path="/" element={<HomePage propertyType={propertyType} properties={properties} />} />
  <Route path="login" element={<LoginPage />} />
  <Route path="signup" element={<SignUpPage />} />
  <Route path="properties" element={<PropertyListingPage properties={properties}/>} />
  <Route path="propertyType/:type" element={<PropertyTypePage properties={properties} />} />
  <Route path="property/:title" element={<PropertyDescPage properties={properties} />} />


</Routes>

</BrowserRouter>
);

  
};

export default App
