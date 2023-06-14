import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{'Ivan Arias'}
        <a className='text-dark' href='https://hcoco1.github.io/hcoco1-site-bootstrap/'>
        
        </a>
      </div>
    </MDBFooter>
  );
}