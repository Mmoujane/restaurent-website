import React from 'react';
import NavBar from '../components/navBar.js';
import PaymentForm from '../components/PaymentForm';
import Success from '../components/SuccessMessage';

class Payment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Success: false
        }
    }

    CloseSuccess = () => {
        this.setState({
            Success: false
        });
    }

    successMessage = () => {
        this.setState({
            Success: true
        });

        setTimeout(this.CloseSuccess, 5000);
    }

    render(){

        return(
            <div>
                <NavBar Color='white' BackColor='transparent'/>
                <Success display={this.state.Success}/>
                <PaymentForm Success={this.successMessage}/>
            </div>
        );
    }
}

export default Payment;