

import {Container, Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailID, setemailID] = useState("");
  const [password, setPassword] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorEmailID, setErrorEmailID] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const navigate = useNavigate();

  const signUp = () => {
    const customerData = { firstName, lastName, emailID, password };
  
    fetch("http://localhost:8081/Customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customerData),
    }).then(() => {
      console.log("Added new customer.");
      navigate("/login");
    });
  };

  const validateForm = () => {
    let isValidated = true;
    if (firstName === "") {
      setErrorFirstName("You must enter your First Name");
      isValidated = false;
    } else {
      setErrorFirstName("");
    }

    if (lastName === "") {
      setErrorLastName("You must enter your Last Name");
      isValidated = false;
    } else {
      setErrorLastName("");
    }

    if (emailID === "") {
      setErrorEmailID("You must enter a valid email");
      isValidated = false;
    } else {
      setErrorEmailID("");
    }

    if (password === "") {
      setErrorPassword("You must enter the password");
      isValidated = false;
    } else {
      setErrorPassword("");
    }
    return isValidated;
  };

  return (
    <div>
      
      <div className="form-container">
        <div className="app-wrapper">
          <div>
            <br/>
            <h3 className="title"> <h3> Create a Account </h3></h3>
          </div>
          <hr/>
          <form className="form-wrapper">
            <div className="name">
            <Form.Label>First Name</Form.Label>
              <br/>
              <input
                className="input"
                type="text"
                name="firstName"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <span className="error">{errorFirstName}</span>
            </div>
         <br/>
            <div className="name">
            <Form.Label>Last Name</Form.Label>
              <br/>
              <input
                className="input"
                type="text"
                name="lastName"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
              <span className="error">{errorLastName}</span>
            </div>
          <br/>
            <div className="email">
            <Form.Label>Email address</Form.Label>
              <br/>
              <input
                className="input"
                type="email"
                name="email"
                value={emailID}
                onChange={(event) => {
                  setemailID(event.target.value);
                }}
              />
              <span className="error">{errorEmailID}</span>
            </div>
       <br/>
            <div className="password">
            <Form.Label>Password</Form.Label>
              <br/>
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <span className="error">{errorPassword}</span>
            </div>
            <hr/><br/>
            <div>
              <Button variant="primary"  type="submit"
                className="submit"
                onClick={(e) => {
                  e.preventDefault();
                  if (validateForm()) {
                    signUp();
                  } else {
                    alert("There are errors: Please fill all the fields");
                  }
                }}
              >
                Register
                </Button>
              <br/><br/>
            </div>
          </form>
        </div>
      </div>
     
    </div>
  );
};

export default SignUpForm;
