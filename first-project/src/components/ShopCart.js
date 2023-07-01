import React from 'react';
import styled from 'styled-components';
//import imgOne from '../images/dan-gold-4_jhDO54BYg-unsplash.jpg';
import {StyledSection, Container} from './FoodForm';
import Button from '../components/Button';

const Form = styled.form`
display: flex;
height: 100%;
width: 100%;
@media screen and (max-width: 768px) {
    flex-direction: column;
   }

`;

const Exemple02 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30%;
height: 100%;
flex-direction: column;
@media screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: nowrap;
    width: 100%;
    height: 20%;
   }
`;

const Exemple = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 70%;
@media screen and (max-width: 768px) {
    flex-direction: column;
    height: 90%;
    width: 100%;
   }
`;

const ButtContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
height: 100%;
width: 30%;
@media screen and (max-width: 768px) {
    height: 10%;
    width: 100%;
    justify-content: center;
   }
`;

const ImgContainer = styled.div`
position: relative;
border: none;
height: 70%;
width: 60%;
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


class ShopCart extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            show: false,
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/api/product/client-product/" + this.props.id, {
            method: 'DELETE',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' }})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.reload();
            });
    }

    render(){
        return(
            <StyledSection height='70vh'>
                <Container>
                  <Form onSubmit={this.handleSubmit}>
                    <Exemple>
                        <ImgContainer Src={this.props.url}/>
                        <Exemple02>
                           <h1 style={{textAlign: 'center'}}>{this.props.name}</h1>
                           <p>{this.props.price}</p>
                           <p>{this.props.size}</p>
                           <p>{this.props.quantity}</p>
                        </Exemple02>
                    </Exemple>
                    <ButtContainer>
                       <Button display={true}>Remove</Button>
                    </ButtContainer>
                  </Form>
                </Container>
            </StyledSection>
        );
    }
}

export default ShopCart;