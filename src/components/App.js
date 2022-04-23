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
    const url = "mongodb+srv://tarnjotkaur:M0ng0db123@cluster0.lzrlb.mongodb.net/CJVRestInn?retryWrites=true&w=majority"
    fetch('http://localhost:8081/Property')   
    .then(response=>response.json())          
    .then(json=>{                                   
      setProperties(json);                                   
    }).catch(err=>{
      console.log(`Error ${err}`);
    })  


    fetch('http://localhost:8081/PropertyType')   
    .then(response=>response.json())          
    .then(json=>{                                   
      setPropertyType(json);                                   
    }).catch(err=>{
      console.log(`Error ${err}`);
    })  
    
    
    // PropertyService.getProperty()
    // .then(response=>{
    //   setProperties(response.data);
    // }).catch(err=>{
    //   console.log(`Error ${err}`);
    // }) 


  
},[]);


const [properties , setProperties] = useState([{
      id: 0, 
      title: "", 
      price: "",
      imgPath:"",
      type:"",
      location:"",
      bestseller:false,
      description:"",
      rules:[],
      amenties:[]
}])

const [propertyType , setPropertyType] = useState([{
  id:0,
  typeName:"",
  imgPath:null
}]) 



  return (

<BrowserRouter>

<Routes>


  <Route path="/" element={<HomePage propertyType={propertyType} properties={properties} />} />
  <Route path="login" element={<LoginPage />} />
  <Route path="signup" element={<SignUpPage />} />
  <Route path="Property" element={<PropertyListingPage properties={properties}/>} />
  <Route path="Property/Type/:typeName" element={<PropertyTypePage properties={properties} />} />
  <Route path="Property/:title" element={<PropertyDescPage properties={properties} />} />


</Routes>

</BrowserRouter>
);

  
};

export default App
