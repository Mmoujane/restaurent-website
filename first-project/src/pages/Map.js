import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/navBar.js';
import Map from '../components/Map';
import HowToPay from '../components/HowToPay';
import ShopBar from '../components/ShopBar';
import Success from '../components/SuccessMessage.js';






class MapComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            Display: false,
            Success: false,
            message: ''
        };
        this.popUp = this.popUp.bind(this);
        this.close = this.close.bind(this);
        this.successMessage = this.successMessage.bind(this);
        this.CloseSuccess = this.CloseSuccess.bind(this);
    }

    popUp() {
        this.setState({
            Display: true
        });

        
    }

    close() {
        this.setState({
            Display: false
        });
    }

    CloseSuccess() {
        this.setState({
            Success: false
        });
    }

    successMessage() {
        fetch('http://localhost:3001/api/product/add-client-product', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({home: true})
        })
        .then(response => response.json())
        .then((data) => {
            this.setState({
                Success: data.inserted,
                message: data.message
            });
            setTimeout(this.CloseSuccess, 5000);
        })

    }

    render(){

        return(
            <div>
                <NavBar Color='black' BackColor='transparent'/>
                <Success display={this.state.Success} message={this.state.message} color='rgb(226, 255, 222)'/>
                <Map display={!this.state.Display}/>
                <HowToPay display={this.state.Display} onClick={this.close} Success={this.successMessage}/>
                <ShopBar name='payment' display={false} src='' onclick={this.popUp} A={false}/>
                <Footer display={!this.state.Display}/>
            </div>
        );
    }
}

export default MapComponent;