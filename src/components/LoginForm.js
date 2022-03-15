import React from 'react'

import {Container, Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

import {Link} from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <br/><br/>
      <Container>
        <Form>
          <h3> Log In </h3>
          <hr/>
        <Form.Group className="mb-3" controlId="signUpEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signmeinauto">
        <Form.Check type="checkbox" label="Sign me in automatically next time." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="signUpPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
        <a href="./forgetPassword">Forget your password?</a>
        </Form.Text>
        </Form.Group>

       <Button variant="primary" type="submit">
        Log In
        </Button>
        <br/><br/>
        <Form.Label>Don't have an account? <Link to="/signUp">Sign Up</Link></Form.Label>

        </Form>
        </Container>
        <br/><br/>
    </div>
  )
}

export default LoginForm
