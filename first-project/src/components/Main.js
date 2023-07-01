import React from 'react';
import Slider from './imageSlider';
//import { SliderData } from '../data/Slider';
import Documentation from '../components/documentation';
//import { DocData } from '../data/DocumentationData';
//import { DocDataTwo } from '../data/DocumentationData
import Waiting from './watingPage';


class Main extends React.Component {
constructor(props){

    super(props);
    this.state = {
        index : 0,
        foods: [],
        //bestFoods: [],
        display: true
    };
    this.change = 0;
    this.isEven = this.isEven.bind(this);
    this.componentNum = 0;
}

foods = () => {
    fetch('http://localhost:3001/api/product/get-product',{credentials: 'include'})
    .then(response => response.json())
    .then((data) => {
        this.setState({foods: data.data});
        //console.log(data);
    })
}

//bestFoods = () => {
   // fetch('http://localhost:3001/api/product/get-product?nature=best')
   // .then(response => response.json())
  //  .then((data) => {
   //     this.setState({bestFoods: data.data});
        //console.log(data);
  //  })
//}

isEven = (number) => {
    if(number % 2 === 0){
        return true;
    }

    return false;
}


render(){

    const bestFood = this.state.foods.map((items, index) => {
        if(items.bestFood){
        this.componentNum++;
        return(
            <Documentation Reverse={this.isEven(this.componentNum) ? true : false} Src={'http://localhost:3001/api/static/media/' + items.url} foodName={items.foodName} foodDoc={items.foodDoc} display={true} zbla={false} key={index}/>
        );
       }
    })

    return(
        <div>
        <Waiting Display={this.state.display}/>
        <main>
            <Slider src={this.state.foods.length > 0 ? 'http://localhost:3001/api/static/media/' + this.state.foods[this.state.index].url : ''} foodName={this.state.foods.length > 0 ? this.state.foods[this.state.index].foodName: ''} price={this.state.foods.length > 0 ? this.state.foods[this.state.index].foodPrice : ''}/>
            <div style={{display: 'flex',justifyContent:'center'}}><h1 style={{color:'black', borderBottom:'2px solid gray'}}>Our Best Food</h1></div>
            {bestFood}
        </main>
        </div>
    );
}
componentDidMount() {
    const twoSecond = 2000;
    this.foods();
    setTimeout(() => {
        this.setState({display: false})
    }, 4000);
    //setTimeout(() => this.bestFoods(), 4000);
    setInterval(() => {
       this.setState({ index:  this.change++});
    }, twoSecond); 

  }

  componentDidUpdate() {
        if(this.change > this.state.foods.length - 1){
             this.change = 0;
        }
  }

}

export default Main;