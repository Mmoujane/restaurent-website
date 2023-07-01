import React from 'react';
import NavBar from '../components/navBar.js';
import Login from '../components/LogingForm';
import { Redirect } from "react-router-dom";


class LoginPage extends React.Component {

    render(){

        if(localStorage.getItem('user')){
            return <Redirect to="/order" />
        }

        return(
            <div>
                <NavBar Color='white' BackColor='transparent'/>
                <Login />
            </div>
        );
    }
}

export default LoginPage;