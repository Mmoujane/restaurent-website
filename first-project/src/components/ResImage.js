import React from 'react';
import styled from 'styled-components';
import { ImgData } from '../data/AboutData';

const StyledSection = styled.section`
height : 100vh;
width : 100%;
max-height : 1100px;
position : relative;
overflow : hidden;
background-image: url(${props => props.Src});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
`;

const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
color: white;
`;
class Img extends React.Component {

    render(){

        return(
            <StyledSection Src={ImgData.src}>
                <Container>
                    <Text>
                        <h1 style={{fontSize: '3rem'}}>{ImgData.h1}</h1>
                        <p style={{fontSize: '2rem'}}>{ImgData.p}</p>
                    </Text>
                </Container>
            </StyledSection>
        );
    }
}

export default Img;