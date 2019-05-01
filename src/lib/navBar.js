import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavigationBar = (props) => {
    return ( 
        <Navbar className='m-5' bg='light'>
            <Nav>
                <Nav.Link href="#home" active>Acceuil</Nav.Link>
                <div style={{marginTop:7}}>/</div>
                <Nav.Link href="">Maintenance</Nav.Link>
            </Nav>
        </Navbar>
     );
}
 
export default NavigationBar;