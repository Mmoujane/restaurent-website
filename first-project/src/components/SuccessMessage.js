import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: ${props => props.Display};
justify-content: center;
align-items: center;
position: fixed;
top: 0;
width: 100%;
background: ${props => props.Color};
height: 5rem;
z-index: 9;
`;


class Success extends React.Component {

    render() {
        return(
            <Container Display={this.props.display ? 'flex' : 'none'} Color={this.props.color}>
                <h1>{this.props.message}</h1>
            </Container>
        );
    }
}

export default Success;