import React from 'react';
import { Input, Form, Container, H1 } from "./MainContact";
import Button from '../components/Button'; 
import Success from '../components/SuccessMessage.js';


class Map extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      number: null,
      address: null,
      show: false,
      message: ''
    };
    this.onchangeAdd = this.onchangeAdd.bind(this);
    this.onchangeNumber = this.onchangeNumber.bind(this);
  }

  onchangeAdd = (e) => {
    this.setState({address: e.target.value});
  }

  onchangeNumber = (e) => {
    this.setState({number: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/api/product/add-client-product', {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({phone: this.state.number ,address: this.state.address})
        })
        .then(response => response.json())
        .then((data) => {
          this.setState({show: data.inserted, message: data.message});
          setTimeout(() => {
            this.setState({show: false})
          }, 5000);
        })
  }
    
    render() {

        return(
            <div>
            <Success display={this.state.show} message={this.state.message} color='rgb(226, 255, 222)'/>
            <main style={{height: '100vh', display: this.props.display === true ? 'flex' : 'none',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <H1 style={{color: 'black'}}>Address Form</H1>
                <Container>
                  <Form onSubmit={this.handleSubmit}>
                    <label for="add">Your Address</label>
                    <Input type="text" id="add" name="address" placeholder="Your Address.." onChange={this.onchangeAdd}/>
                    <label for="phone">Your Number Phone</label>
                    <Input type="text" id="phone" name="number" placeholder="Your Number Phone.." onChange={this.onchangeNumber}/>
                    <Button display={true}>Submit</Button>
                  </Form>
                </Container>
            </main>
            </div>
        );
    }
}

export default Map;