import React from 'react';
import MainShopCart from '../components/MainShopCart';
import NavBar from '../components/navBar.js';
import ShopBar from '../components/ShopBar';

class Shop extends React.Component {

    render(){
        return(
            <div>
                <NavBar Color='black' BackColor='white'/>
                <MainShopCart />
                <ShopBar name='Shose Location' display={true} src='/location' A={true}/>
            </div>
        );
    }
}

export default Shop;