import React from 'react';
import AboutMain from '../components/AboutMain';
import Footer from '../components/Footer';
import NavBar from '../components/navBar.js';

class About extends React.Component {

    render(){

        return(
            <div>
                <NavBar Color='white' BackColor='transparent'/>
                <AboutMain />
                <Footer display />
            </div>
        );
    }
}

export default About;