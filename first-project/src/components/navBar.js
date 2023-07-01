import React from 'react';
import {nav} from '../data/navData';
import styled from 'styled-components';
import {SocialIcon} from '../data/navData';
import {StyledButton} from './Button';
import {FaBars} from 'react-icons/fa';
import SideBar from './sideBar';


const Nav = styled.nav`
background: ${props => props.something ? 'gray' : props.color};
padding: 0 2rem;
height: 0rem;
min-height: 10vh;
position: fixed;
width: 95%;
z-index: 2;
overflow: visible;
transition: background 1s;
`;
const Container = styled.div`
justify-content: space-between;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
height: 100%;
`;
const Brand = styled.div`
font-size: 1.6rem;
padding: 1rem 0;
display: block;
`;
const LinkContainer = styled.ul`
display: flex;
margin: 0;
padding: 0;
list-style-type: none;
align-items: center;

 @media screen and (max-width: 768px) {
     display: none;
 }
`;
const Link = styled.li`
padding: 1.2rem 1rem;
font-size: 1.1rem;
position: relative;

`;
const Social = styled.div`
padding: 1.4rem 0;
display: flex;


  @media screen and (max-width: 768px) {
      display: none;
  }
`;
export const A = styled.a`
text-decoration: none;
color: ${props => props.colorNav};
padding: ${props => props.Padding};
transition : transform 0.5s;
&:hover {
    color : ${props => props.Color};
    transform : ${props => props.primary ? 'scale(1.3)' : 'none'};
}
`;

const MobileIcon = styled.div`
display : none;
  @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0vh;
      right: 0vw;
      font-size: 1.8rem;
      transform: translate(-200%, 30%);
      cursor: pointer;
      color: ${props => props.colorNav};
  }

`;

export const Product = styled(StyledButton)`
text-decoration: none;
`;


class NavBar extends React.Component{
    constructor(props){

        super(props);
        this.state = {
            toogle : false,
            opened : false
        };

        
    }

    componentDidMount() {
        window.addEventListener('scroll', this.BackgroundColor, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.BackgroundColor)
    }

     BackgroundColor = () => {

        const ColoreState = document.body.scrollTop > 300 ? true : false;
        this.setState({ toogle : ColoreState });
        
    }

    open = () => {
        this.setState({opened : true});
        console.log('true');
    }

    close = () => {
        this.setState({opened: false});
        console.log('false');
    }

    render(){
        
        const navLinks = nav.map((items, index) => {
             return(
                 <A href={'/'+ items.link} key={index} primary colorNav={this.props.Color}><Link>{items.title}</Link></A>
                 
             )
        });

        const Icons = SocialIcon.map((item, index) => {
              return (
                <A href={'/'+ item.link} key={index} Padding='0 0.3rem' Color='#a1c4cf' colorNav={this.props.Color}>{item.title}</A>
              )
        });

        

        return(
          <div>
            <SideBar onclick={this.close} displayed={this.state.opened}/>
            <Nav something={this.state.toogle} color={this.props.BackColor}>
               <Container>
                   <A href='/home' primary colorNav={this.props.Color}><Brand>FOOD</Brand></A>
                   <MobileIcon colorNav={this.props.Color}>
                       <FaBars onClick={() => this.open()}/>
                   </MobileIcon>
                   <LinkContainer>
                       {navLinks}
                   </LinkContainer>
                   <Social>
                       {localStorage.getItem('user') ? <Product Display as='a' href='order'>Product</Product> : null}
                        {Icons}
                   </Social>
               </Container>
           </Nav>
          </div>
        );
    }
      
}

export default NavBar;