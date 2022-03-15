import React from 'react'

import {Container, Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

import { useState } from 'react'

const SignUpForm = () => {




  const [email, setEmail] = useState("");         
  const [pass, setPass] = useState("");   
  const [firstName, setFirstName] = useState("");         
  const [lastName, setLastName] = useState(""); 
  const [errorEmail, setErrorEmail] = useState("");         
  const [errorPass, setErrorPass] = useState("");   
  const [errorFirstName, setErrorFirstName] = useState("");         
  const [errorLastName, setErrorLastName] = useState("");


  const validateForm = (props)=>{      


    let isValidated = true;

    if(email==="")
    {
      setErrorEmail("Email ID cannot be blank!")
        isValidated = false;
    }
    else
    {
      setErrorEmail("");
    }


    if(pass === "")
    {
      setErrorPass("Password cannot be blank")
        isValidated = false;
    }
    else{
      setErrorPass("");
    }

    if(firstName==="")
    {
      setErrorFirstName("First Name cannot be blank!")
        isValidated = false;
    }
    else
    {
      setErrorFirstName("");
    }


    if(lastName === "")
    {
      setErrorLastName("Last Name cannot be blank")
        isValidated = false;
    }
    else{
      setErrorLastName("");
    }

    return isValidated;
}






  return (
    <div>
      <br/><br/>
      <Container>
        <Form>
          <h3> Create a Account </h3>
          <hr/>
      
        <Form.Group className="mb-3" controlId="signUpEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="signUpPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
        6 to 20 letters with atleast 1 number
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="signUpFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signUpLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="keepmesignedin">
        <Form.Check type="checkbox" label="Keep me signed in" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="coupons">
        <Form.Check type="checkbox" label="Email me exclusive coupons, deals and travel information from Rest Inn" /> 
        </Form.Group>
        
        <Form.Label>By signing up you accept the Terms and Conditions and Privacy Statement.</Form.Label>
        <br/><br/>
        <Button variant="primary" type="submit" onClick={()=>{
          if(!validateForm())
          {
              alert("Validation Failed")
          }
        }}>
        Create account
        </Button>
        </Form>
        </Container>
        <br/><br/>
    </div>
  )
}

export default SignUpForm
