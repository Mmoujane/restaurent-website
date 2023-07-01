import React from 'react';
import styled from 'styled-components';
import {A, Product} from './navBar'; 
import {nav} from '../data/navData';
import {FaTimes} from 'react-icons/fa';

const StyledSideBar = styled.div`
display: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: ${props => props.displayed ? '100%' : '0'};
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-content: center;
    z-index: 2000;
    position: absolute;
    top: 0;
    right: 0;
    opacity: ${props => props.displayed ? '100%' : '0'};
    transition: opacity 2s, height 2s;
   }
`;

const LinkContainer = styled.ul`
display: ${props => props.displayed ? 'flex' : 'none'};
margin: 0;
padding: 0;
flex-direction: column;
list-style-type: none;
align-items: center;
justify-content: center;
transform: translate(0, 20%);
`;

const Link = styled.li`
padding: 1rem 1.2rem;
font-size: 1.1rem;
color: white;
position: relative;
`;

const ButtonWrapper = styled.div`
padding: 1.4rem 0;
display: ${props => props.displayed ? 'flex' : 'none'};
justify-content: center;
transform: translate(0, 230%);
`;

const MobileIcon = styled.div`
display: ${props => props.displayed ? 'block' : 'none'};
position: absolute;
top: 0vh;
right: 0vw;
font-size: 1.8rem;
transform: translate(0%, 0%);
cursor: pointer;
color: white;
`;



class SideBar extends React.Component{

    render(){

        const navLinks = nav.map((items, index) => {
            return(
                <A href={'/'+ items.link} key={index} primary colorNav={this.props.Color}><Link>{items.title}</Link></A>
                
            )
       }); 


        return(
            <StyledSideBar displayed={this.props.displayed}>
                <LinkContainer displayed={this.props.displayed}>
                    {navLinks}
                </LinkContainer>
                <ButtonWrapper displayed={this.props.displayed}>
                {localStorage.getItem('user') ? <Product Display as='a' href='order'>Product</Product> : null}
                </ButtonWrapper>
                <MobileIcon displayed={this.props.displayed}>
                    <FaTimes onClick={this.props.onclick}/>
                </MobileIcon>
            </StyledSideBar>
        );
    }
}

export default SideBar;