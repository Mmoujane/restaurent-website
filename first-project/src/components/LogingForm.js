import React from 'react';
import { Input, Form, Container, StyledSection, H1 } from "./MainContact";
import Button from './Button';
//import auth from '../reqFunctions/login';




class Login extends React.Component {

    constructor(props){
      super(props);
      this.onchangeName = this.onchangeName.bind(this);
      this.onchangePass = this.onchangePass.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
      this.state = {
        user: '',
        pass: '',
        message: ''
      };
    }

    onchangeName = (e) => {
      this.setState({user : e.target.value});
    }

    onchangePass = (e) => {
      this.setState({pass: e.target.value});
    }

    handleLogin = (e) => {
      e.preventDefault();
      fetch("http://localhost:3001/api/auth/signin", {method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({ user: this.state.user,  hash_password: this.hash(this.state.pass)})})
      .then(res => res.json())
      .then(data => {
        if(data.login){
          localStorage.setItem("user", JSON.stringify(data));
          window.location.reload();
          
      }
      this.setState({message: data.message})
      })
      .catch(err => console.log(err));
    }

    hash = (pass) => {

      let arr = [];
      for(let i = 0; i < pass.length; i++){
          arr[i] = String(pass.charCodeAt((pass.length - 1) - i).toString(16)) + String(Math.cos(parseInt(pass.charCodeAt((pass.length - 1) - i).toString(16))).toFixed().toString(16));
      }
      let reversed_hex =  arr.join('');
      let secret = (Math.sqrt(pass.length) * parseInt(pass.charCodeAt(pass.length - 2).toString(16)) * parseInt(pass.charCodeAt(pass.length - 1).toString(16))) % parseInt(pass.charCodeAt(0).toString(16));
      return reversed_hex + String(secret.toFixed(4));
  }
    
    render(){
        return(
            <main>
            <StyledSection>
                <H1>Login</H1>
                <Container>
                  <Form onSubmit={this.handleLogin}>
                    <label for="name">Name</label>
                    <Input type="text" id="name" name="name" placeholder="Your name.." onChange={this.onchangeName}/>
                    <label for="pass">Password</label>
                    <Input type="password" id="pass" name="password" placeholder="Your password.." onChange={this.onchangePass}/>
                    <Button type='submit' display={true}>login</Button>
                    <h1>{this.state.message}</h1>
                  </Form>
                </Container>
            </StyledSection>
            </main>
        );
    }
}

export default Login;