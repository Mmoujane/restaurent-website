import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Index  from './pages/homePage';
import About  from './pages/About';
import Contact  from './pages/contact';
import Food  from './pages/food';
import Shop from './pages/Shop';
import { GlobalStyle } from './components/GlobalStyle';
import MapComponent from './pages/Map';
import Payment from './pages/Payment';
import LoginPage from './pages/Loging';
import OrderPage from './pages/OrderPage';


class App extends React.Component {

render() {

  return(
    <Router>
      <div>
      <GlobalStyle />
      <Route path='/home' exact component={Index}/>
      <Route path='/about-us' exact component={About}/>
      <Route path='/contact-us' exact component={Contact}/>
      <Route path='/our-food' exact component={Food}/>
      <Route path='/Shop' exact component={Shop}/>
      <Route path='/location' exact component={MapComponent}/>
      <Route path='/payment' exact component={Payment}/>
      <Route path='/login' exact component={LoginPage}/>
      <Route path='/order' exact component={OrderPage}/>
      </div>
    </Router>
  );
}


}

export default App;