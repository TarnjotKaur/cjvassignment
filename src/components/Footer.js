import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer className = "main-footer">
      <div className = "footer-middle">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <h4>Support</h4>
          <ul className = "list-unstyled">
            <li>Health Center</li>
            <li>Safety Information</li>
            <li>Cancellation Options</li>
            <li>Our Covid-19 response</li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h4>Community</h4>
          <ul className = "list-unstyled">
            <li><a href="/">Disaster Relief Housing</a></li>
            <li><a href="/">Visit our community forum</a></li>
            <li><a href="/">Newsroom</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h4>About</h4>
          <ul className = "list-unstyled">
            <li>Learn about new features</li>
            <li>Letter from our founders</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <h4>Community Services</h4>
          <ul className = "list-unstyled">
            <li>Support Afghan Refugees</li>
            <li>Support Palestine</li>
            <li>Support Ukraine People</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
      <p className="text-xs-center">
      <hr/>
        &copy; {new Date().getFullYear()} City Guide App - All Rights Reserved
      </p>
      </div>
      </div>
    </div>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
 background: var(--mainDark);
 padding-top: 3rem;
 color: var(--mainWhite);
}

.footer-bottom{
  padding-top: 3rem;
  padding-bottom: 2rem;
}

ul li a{
  color: var(--mainGrey);
}

ul li a:hover{
  color: var(--mainLightGrey);
}

`;




