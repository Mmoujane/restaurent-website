import React from 'react';
import Food from '../components/FoodForm';
//import imgOne from '';

class MainFood extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            DATA : []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/product/get-product',{credentials: 'include'})
        .then(response => response.json())
        .then((data) => {
            this.setState({DATA: data.data});
            console.log(data);
        })
    }

    render(){

        const FOOD = this.state.DATA.map((items, index) => {
            return(
              <Food URL={'http://localhost:3001/api/static/media/' + items.url}  name={items.foodName} price={items.foodPrice} Doc={items.foodDoc} key={index}/>
            )
        }) 
        return(

            <main>
                {FOOD}
            </main>
        );
    }
}

export default MainFood;