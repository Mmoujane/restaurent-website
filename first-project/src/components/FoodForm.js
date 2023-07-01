import React from 'react';
import styled from 'styled-components';
//import imgOne from '../images/dan-gold-4_jhDO54BYg-unsplash.jpg';
import {FaStar} from 'react-icons/fa';
import Button from '../components/Button';
import Success from '../components/SuccessMessage.js'; 

export const StyledSection = styled.section`
width : 100%;
height: ${props => props.height};
position : relative;
overflow : hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Container = styled.div`
width: 100%;
height: 100%;
background: #f2f2f2;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
padding: 20px;
margin-top: 4rem;
`;

const Form = styled.form`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
width: 100%;
@media screen and (max-width: 768px) {
    flex-direction: column;
}
`;

const FoodContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 34%;
height: 100%;
@media screen and (max-width: 768px) {
    width: 100%;
    height: ${props => props.primary ? '70%' : '30%'};
    justify-content: ${props => props.primary ? 'flex-start' : 'flex-end'};
}
`;

const DocmContainer = styled(FoodContainer)`
@media screen and (max-width: 768px) {
    display: none;
}
`;

const InputContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Row = styled.span`
width: 12px;
height: 12px;
border-top: 2px solid black;
border-left: 2px solid black;
cursor: pointer;
transform: translateY(-50%) rotate(${props => props.Direction});
`; 

const Input = styled.input`
width: 80%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: none;
border-radius: 25px;
box-sizing: border-box;
&:focus {
  outline: none;
}
`;

const ImgContainer = styled.div`
position: relative;
border: none;
height: 60%;
width: 80%;
overflow : hidden;
background-image: url(${props => props.Src});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
@media screen and (max-width: 768px) {
    width: 100%;
    height: 80%;
   }
`;

class Food extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            star: 0,
            index: 0,
            name: this.props.name,
            price: this.props.price,
            url: this.props.URL,
            size: 'small',
            DATA: null,
            show: false,
            message: ''
        };

        this.number = 0;
        this.onchangeSize = this.onchangeSize.bind(this);
    }

    Stars(index){
        this.setState({
            star: index
        });
    }

    Increment = () => {

        this.number++;

        if(this.state.index >= 5){

            this.setState({
                index: 0
            });

            this.number = 0;
        }else{
            this.setState({
                index: this.number,
            });
        }
         
    }

    Decrement = () => {

        this.number--;

        if(this.state.index <= 0){

            this.setState({
                index: 5
            });

            this.number = 5;
        }else{
            this.setState({
                index: this.number
            });
        }
         
    }


    onchangeSize = (e) => {
        this.setState({size: e.target.value})
    }


    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/api/product/add-client-product', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({URL:this.state.url, foodname: this.state.name, price: this.state.price, size: this.state.size, quantity: this.state.index, stars: this.state.star})
        })
        .then(response => response.json())
        .then((data) => {
            this.setState({show: data.inserted, message: data.message});
            setTimeout(() => {
               this.setState({show: false})
            }, 5000);
        })
        
    }

    render(){
        return(
            <div>
            <Success display={this.state.show} message={this.state.message} color='rgb(226, 255, 222)'/>
            <StyledSection height='100vh'>
                <Container>
                  <Form onSubmit={this.handleSubmit}>
                    <FoodContainer primary>
                        <ImgContainer Src={this.props.URL}/>
                        <h1>{this.props.name}</h1>
                        <p>{this.props.price}</p>
                    </FoodContainer>
                    <DocmContainer>
                        <p>{this.props.Doc}</p>
                    </DocmContainer>
                    <FoodContainer>
                        <InputContainer style={{marginTop: '1rem'}}>
                            <input type="radio" id="small" name="food" value="small" onChange={this.onchangeSize} checked={this.state.size === 'small'}/>
                            <label for="small">Small</label>
                            <input type="radio" id="medium" name="food" value="medium" onChange={this.onchangeSize} checked={this.state.size === 'medium'}/>
                            <label for="medium">Medium</label>
                            <input type="radio" id="big" name="food" value="big" onChange={this.onchangeSize} checked={this.state.size === 'big'}/>
                            <label for="big">Big</label>
                        </InputContainer>
                        <InputContainer style={{marginTop: '1rem'}}>
                            <FaStar style={{color: this.state.star > 0 ? 'yellow' : 'black', cursor:'pointer', marginBottom: '1rem'}} onClick={() => this.Stars(1)}/>
                            <FaStar style={{color: this.state.star > 1 ? 'yellow' : 'black', cursor:'pointer', marginBottom: '1rem'}} onClick={() => this.Stars(2)}/>
                            <FaStar style={{color: this.state.star > 2 ? 'yellow' : 'black', cursor:'pointer', marginBottom: '1rem'}} onClick={() => this.Stars(3)}/>
                            <FaStar style={{color: this.state.star > 3 ? 'yellow' : 'black', cursor:'pointer', marginBottom: '1rem'}} onClick={() => this.Stars(4)}/>
                            <FaStar style={{color: this.state.star > 4 ? 'yellow' : 'black', cursor:'pointer', marginBottom: '1rem'}} onClick={() => this.Stars(5)}/>
                        </InputContainer>
                        <InputContainer>
                            <Row Direction='315deg' onClick={this.Decrement}/>
                            <Input type="text" id="num" name="number" value={this.state.index}/>
                            <Row Direction='135deg' onClick={this.Increment}/>
                        </InputContainer>
                        <Button display={true}>Add To Shop</Button>
                    </FoodContainer>
                  </Form>
                </Container>
            </StyledSection>
            </div>
        );
    }
}

export default Food;
