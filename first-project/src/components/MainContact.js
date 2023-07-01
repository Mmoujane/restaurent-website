//import { response } from 'express';
import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Success from '../components/SuccessMessage.js'; 

export const StyledSection = styled.section`
height : 100vh;
width : 100%;
max-height : 1100px;
position : relative;
overflow : hidden;
background: linear-gradient(135deg,#71b7e6 ,#9b59b6);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Container = styled.div`
height: 70%;
width: 70%;
background: #f2f2f2;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
padding: 20px;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`;

export const Input = styled.input`
width: 90%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 15px;
box-sizing: border-box;
&:focus {
  border: 1px solid #9b59b6;
  border-radius: 25px;
  outline: none;
}
`;



export const TextArea = styled.textarea`
width: 90%;
height: 150px;
padding: 12px 20px;
box-sizing: border-box;
border: 2px solid #ccc;
border-radius: 4px;
background-color: #f8f8f8;
font-size: 16px;
resize: none;
margin: 8px 0;
&:focus {
  border: 2px solid #9b59b6;
  outline: none;
}
`;

export const H1 = styled.h1`
color: white;
border-bottom: 2px solid #71b7e6;
margin-top: 3rem;
`;


class MainContact extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      Fname: '',
      Lname: '',
      email: '',
      report: '',
      show: false,
      message: ''
    }

    this.onchangeName = this.onchangeName.bind(this);
    this.onchangeLname = this.onchangeLname.bind(this);
    this.onchangeEmail = this.onchangeEmail.bind(this);
    this.onchangeReport = this.onchangeReport.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onchangeName = (e) => {
    this.setState({Fname: e.target.value})
  }

  onchangeLname = (e) => {
    this.setState({Lname: e.target.value})
  }

  onchangeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  onchangeReport = (e) => {
    this.setState({report: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/reports/make-report", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({Fname:this.state.Fname, Lname: this.state.Lname, email: this.state.email, report: this.state.report})
    })
    .then(response => response.json())
    .then((data) => {
      this.setState({show: data.inserted, message: data.message});
      setTimeout(() => {
        this.setState({show: false})
      }, 5000);
    })
  }

    render(){
      return(
      <div>
        <Success display={this.state.show} message={this.state.message} color='rgb(226, 255, 222)'/>
        <main>
            <StyledSection>
                <H1>Report</H1>
                <Container>
                  <Form onSubmit={this.handleSubmit}>
                    <label for="fname">First Name</label>
                    <Input type="text" id="fname" name="firstname" placeholder="Your first name.." onChange={this.onchangeName}/>
                    <label for="lname">Last Name</label>
                    <Input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={this.onchangeLname}/>
                    <label for="email">Email Address</label>
                    <Input type="email" id="email" name="email" placeholder="Your email.." onChange={this.onchangeEmail}/>
                    <label for="report">Your Report</label>
                    <TextArea id="report" name="report" placeholder="Write you report.." onChange={this.onchangeReport}></TextArea>
                    <Button display={true}>Send Report</Button>
                  </Form>
                </Container>
            </StyledSection>
        </main>
      </div>
        );
    }
}

export default MainContact;