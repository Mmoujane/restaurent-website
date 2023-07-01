import React from 'react';
import ShopCart from '../components/ShopCart';

class MainShopCart extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            DATA: [],
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:3001/api/product/get-client-product',{credentials: 'include'})
        .then(response => response.json())
        .then((data) => {
            this.setState({DATA: data.data});
            console.log(data);
        })
    }

    render(){

        const Carts = this.state.DATA.map((items, index) => {
            return(
                <ShopCart url={items.URL} name={items.foodname} price={items.price} size={items.size} quantity={items.quantity} id={items._id}/>
            );
        })

        return(

            <main>
                {Carts}
            </main>
        );
    }
}

export default MainShopCart;