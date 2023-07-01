import React from 'react';
import NavBar from '../components/navBar.js';
import MainFood from '../components/MainFood';
import ShopBar from '../components/ShopBar.js';
import ProductImport from '../components/productImportForm.js';

class Food extends React.Component {

    render(){

        return(
            <div>
                <NavBar Color='black' BackColor='white'/>
                <MainFood />
                <ShopBar name='Shop' display= {false} src='/Shop' A={true}/>
                <ProductImport />
            </div>
        );
    }
}

export default Food;