import React from 'react';
import NavBar from '../components/navBar.js';
import MainContact from '../components/MainContact';

class Contact extends React.Component {

    render(){

        return(
            <div>
                <NavBar Color='white' BackColor='transparent'/>
                <MainContact />
            </div>
        );
    }
}

export default Contact;