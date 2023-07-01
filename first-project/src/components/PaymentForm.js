import React from 'react';
import { Input, Form, Container, StyledSection, H1 } from "./MainContact";
import Button from './Button';


class PaymentForm extends React.Component {
    
    render(){
        return(
            <main>
            <StyledSection>
                <H1>Configure your bank card</H1>
                <Container>
                  <Form action='#'>
                    <label for="fname">First Name</label>
                    <Input type="text" id="fname" name="firstname" placeholder="Your first name.."/>
                    <label for="lname">Last Name</label>
                    <Input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    <label for="CN">Card Number</label>
                    <Input type="text" id="CN" name="Card Number" placeholder="Your card number.."/>
                    <label for="ED">Expiration Date</label>
                    <Input type="text" id="ED" name="Expiration Date" placeholder="Your expiration date.. (MM/AA)"/>
                    <label for="cryptogram">Cryptogram</label>
                    <Input type="text" id="cryptogram" name="cryptogram" placeholder="Your cryptogram.. (CVV)"/>
                    <Button type='submit' display={true} onClick={this.props.Success}>Pay</Button>
                  </Form>
                </Container>
            </StyledSection>
            </main>
        );
    }
}

export default PaymentForm;