import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';


const Container = styled.div`
display: ${props => props.Display ? 'flex' : 'none'};
justify-content: center;
align-items: center;
position: fixed;
bottom: 0;
width: 100%;
background: white;
height: 5rem;
z-index: 10;
`;

const A = styled.a`
text-decoration: none;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
`;


class ShopBar extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            toogle : false
        };

        this.lastScroll = 0;

        
    }

    componentDidMount() {
        window.addEventListener('scroll', this.ScrollDetect, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.ScrollDetect)
    }

     ScrollDetect = () => {
         var st = document.body.scrollTop;
         const scrollState = st < this.lastScroll ? true : false;
         this.setState({ toogle : scrollState });
         this.lastScroll = document.body.scrollTop;
        
    }

    render(){

        let button = this.props.A === true ? <A href={this.props.src}><Button display={true} >{this.props.name}</Button></A> : <Button display={true} onClick={this.props.onclick}>{this.props.name}</Button>;
        return(
            <Container Display={this.state.toogle}>
                <p style={{position: 'absolute', left: '2%', display: this.props.display === true ? 'block' : 'none'}}>Total: 233$</p>
                {button}
            </Container>
        );
    }
}

export default ShopBar;