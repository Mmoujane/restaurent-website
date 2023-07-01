import React from 'react';
import Footer from '../components/Footer';
import Main from '../components/Main';
import NavBar from '../components/navBar.js';


class Index extends React.Component {

render() {

  return(
    <div>
      <NavBar Color='white' BackColor='transparent'/>
      <Main />
      <Footer display login/>
    </div>
    
  );
}


}

export default Index;