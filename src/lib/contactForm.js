import React from 'react';
import {Form,Button} from 'react-bootstrap';



const ContactForm = (props) => {
    return ( 
            <div className='bg-dark text-white pb-4 pt-4'>
                <Form.Group className='w-50 mx-auto ' controlId="formBasicEmail">
                    <h1>Contactez-nous</h1>
                    <Form.Label className='float-left'><h5> Adresse email</h5></Form.Label>
                    <Form.Control type='email' placeholder='Enter email'></Form.Control>
                    <Form.Text className="text-muted">Nous ne partagerons pas votre adresse email.</Form.Text>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                    <Button className='bg-dark btn-outline-light mt-2 '>Soumettre</Button>
                </Form.Group> 
            </div>
     );
}
 
export default ContactForm;