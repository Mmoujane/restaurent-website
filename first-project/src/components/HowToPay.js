import React from "react";
import styled from 'styled-components';
//import creditCard from '../images/credit-card.png';
//import Home from '../images/home.png';
import Button from './Button';
import {FaTimes} from 'react-icons/fa';
import {FaCreditCard} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa';

const StyledContainer = styled.div`
height : 100vh;
width : 100%;
max-height : 1100px;
position : relative;
overflow : hidden;
background: rgba(0, 0, 0, 0.2);
display: ${props => props.Display};
justify-content: center;
align-items: center;
z-index: 1000;
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #f2f2f2;
height: 70vh;
width: 70vw;
`;

const Payment = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 50%;
`;

const A = styled.a`
text-decoration: none;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;


class HowToPay extends React.Component {

    render(){
        return(

        <StyledContainer Display= {this.props.display ? 'flex' : 'none'}>
            <Container>
                <FaTimes style={{position: 'absolute', top: '14vh', right: '16vw', cursor: 'pointer', height:'8%', width:'5%', color: 'black'}} onClick={this.props.onClick}/>
                <Payment>
                    <FaCreditCard style={{height:'40%', width:'40%'}}/>
                    <A href='/payment'><Button display={true}>Credit Card</Button></A>
                </Payment>
                <Payment>
                    <FaHome style={{height:'40%', width:'40%'}}/>
                    <Button display={true} onClick={this.props.Success}>Home</Button>
                </Payment>
            </Container>
        </StyledContainer>

        );
    }
}

export default HowToPay;