import styled from 'styled-components';
import React from 'react';
import Button from '../components/Button';



const Section = styled.section`
height: 80vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
@media screen and (max-width: 768px) {
    height: ${props => props.primary ? '105vh' : '150vh'};
   }
`;

const Container = styled.div`
height: 75vh;
width: 95%;
position: relative;

display: flex;
flex-direction: ${props => props.reverse ? 'row' : 'row-reverse'};
justify-content: space-between;
@media screen and (max-width: 768px) {
    height: 95%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
`;

const ImgContainer = styled.div`
position: relative;
box-shadow: 0 15px 20px rgb(0, 0, 0, 0.8);
border: none;
height: 85%;
width: 40%;
overflow : hidden;
background-image: url(${props => props.Src});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
@media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    box-shadow: 0 0 0 rgb(0, 0, 0, 0);
   }
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
width: 40%;
@media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    justify-content: flex-start;
   }
`;


class Documentation extends React.Component{

    render(){
        return(

            <Section primary={this.props.zbla}>
                
                <Container reverse={this.props.Reverse}>
                    <ImgContainer reverse={this.props.Reverse} Src={this.props.Src} />
                    <TextContainer reverse={this.props.Reverse}>
                        <h1 style={{position: 'relative'}}>{this.props.foodName}</h1>
                        <p>{this.props.foodDoc}</p>
                        <a href='#' style={{textDecoration: 'none', display:'flex', alignItems:'center', justifyContent:'center'}}><Button display={this.props.display}>Buy It</Button></a>
                    </TextContainer>
                </Container>
            </Section>
        );
    }
}

export default Documentation;