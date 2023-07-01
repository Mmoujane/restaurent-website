import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100vw;
height: 100vh;
z-index: 2;
display: ${props => props.display ? 'flex' : 'none'};
justify-content: center;
align-items: center;
position: relative;
background-color: gray;
top: 0;
right: 0;
`;


class Waiting extends React.Component {
    render(){
        return(
            <Container display={this.props.Display}>
                <h1 style={{color: 'white'}}>just wait a second</h1>
            </Container>
        );
    }
}

export default Waiting;