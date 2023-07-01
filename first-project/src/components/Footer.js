import styled from 'styled-components';
import React from 'react';


const StyledFooter = styled.footer`
background: gray;
display: ${props => props.display === true ? 'flex' : 'none'};
justify-content: center;
`;

const Container = styled.div`
color: white;
text-align: center;
padding: 2rem;
`;
class Footer extends React.Component{

    render(){

        return(
            <StyledFooter display={this.props.display}>
                <Container>
                    <p>
                    In eu mattis mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nec consequat purus. Nunc in sapien hendrerit, vulputate dui eu, lacinia odio. Aliquam lacinia in enim vitae sagittis. Fusce consequat sem felis. Duis porta, nibh sit amet porttitor consequat, turpis urna vulputate urna, nec lobortis mauris augue et eros. Aliquam mollis a lectus ultrices aliquet.
                    </p>
                    {!localStorage.getItem('user') ?  <a href='/login' style={{display: this.props.login ? 'inline' : 'none', textDecoration: 'none', color: 'white', borderBottom: '2px solid white'}}>Login</a> : <span style={{display: this.props.login ? 'inline' : 'none', color: 'white', borderBottom: '2px solid white', cursor: 'pointer'}} onClick={() => {
                        localStorage.removeItem("user");
                        window.location.reload();
                        }}>Logout</span>}
                </Container>
            </StyledFooter>  
        );
    }
}

export default Footer;