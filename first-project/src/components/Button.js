import styled from 'styled-components';
import React from 'react';


export const StyledButton = styled.button`
display: ${props => props.Display ? 'block' : 'none'};
background: linear-gradient(120deg,#a1c4fd 0%,#c2e9fb 100%);
color: white;
width: 80%;
cursor: pointer;
text-align: center;
border-radius: 3rem;
border: none;
padding: 1rem;
transition: color 1s, background 2s, border 2s;
   &:hover {
color : black;
background: transparent;
border: 1px solid black;
}
`;
class Button extends React.Component{

    render(){
        return(
            <StyledButton Display={this.props.display} onClick={this.props.onClick}>{this.props.children}</StyledButton>
        );
    }
}

export default Button;