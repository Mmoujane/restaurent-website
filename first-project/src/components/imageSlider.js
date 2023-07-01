import React from 'react';
import styled from 'styled-components';


const StyledSection = styled.section`
height : 100vh;
width : 100%;
max-height : 1100px;
position : relative;
overflow : hidden;
background-image: url(${props => props.Src});
transition : background-image 1s;
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
`;

const Container = styled.div`
width : 100%;
height : 100%;
display : flex;
overflow : hidden;
position : relative;
color : white;
`;
const PriceContainer = styled.div`
position : relative;
top : 80%;
left : 7%;
overflow : hidden;
`;
class Slider extends React.Component {

render(){

    return(
        
        <StyledSection Src={this.props.src}>
            <Container>
                <PriceContainer>
                    <h1>{this.props.foodName}</h1>
                    <p>{this.props.price}</p>
                </PriceContainer>
            </Container>
        </StyledSection>
        
    );
}
}

export default Slider;