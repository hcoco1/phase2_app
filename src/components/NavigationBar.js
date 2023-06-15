import React from 'react';
import ModalBtnAdd from './ModalBtnAdd';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer>
        
          <MDBNavbarBrand href='#'>
            <img
              src='https://hcoco1.github.io/hcoco1-site-bootstrap/assets/img/profile.jpg'
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
          <h2>Properties for Sale in USA</h2>
          <ModalBtnAdd />
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}