import React from 'react';
import NavBar from '../components/navBar.js';
import Order from '../components/Order';
import { Redirect } from "react-router-dom";

class OrderPage extends React.Component {

    render(){

        if(localStorage.getItem('user')){
            return(
                <div>
                    <NavBar Color='black' BackColor='white'/>
                    <Order />
                </div>
            );
        }

        return <Redirect to="/login" />
    }
}

export default OrderPage;