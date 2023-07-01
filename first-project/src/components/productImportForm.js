import React from 'react';
import styled from 'styled-components';
import {Form, Input, TextArea, H1} from './MainContact';
import Button from './Button';

const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
`;

class ProductImport extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            file: null,
            name: null,
            price: null,
            doc: null
        };
        this.OnchangeFile = this.OnchangeFile.bind(this);
        this.OnchangeDoc = this.OnchangeDoc.bind(this);
        this.OnchangeName = this.OnchangeName.bind(this);
        this.OnchangePrice = this.OnchangePrice.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    OnchangeFile = (event) => {
        this.setState({file: event.target.files[0]})
    }

    OnchangeDoc = (event) => {
        this.setState({doc: event.target.value})
    }

    OnchangePrice = (event) => {
        this.setState({price: event.target.value})
    }

    OnchangeName = (event) => {
        this.setState({name: event.target.value})
    }

    onClick = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('foodImg', this.state.file);
        formData.append('foodName', this.state.name);
        formData.append('foodDoc', this.state.doc);
        formData.append('foodPrice', this.state.price);

        fetch("http://localhost:3001/api/product/add-product", {method: 'POST',
      headers: { 'x-access-token': JSON.parse(localStorage.getItem('user')).accessToken},
      body: formData})
      .then(result => result.json())
      .then(data => {
          console.log(data);
          window.location.reload();
        });
    }

    render() {

        if(localStorage.getItem('user')){
         return(
            <Container>
                <H1 style={{color: 'black'}}>Add Product</H1>
                <Form onSubmit={this.onClick}>
                    <label for="fname">Food Name</label>
                    <Input type="text" id="fname" name="foodName" placeholder="Your food name.." onChange={this.OnchangeName}/>
                    <label for="fPrice">Food Price</label>
                    <Input type="text" id="fPrice" name="foodPrice" placeholder="Your food price.." onChange={this.OnchangePrice}/>
                    <label for="fImage">Food Image</label>
                    <Input type="file" id="fImage" name="FoodImage" onChange={this.OnchangeFile}/>
                    <label for="fDoc">Food Documentation</label>
                    <TextArea id="fDoc" name="foodDocumentation" placeholder="Write you Documentation.." onChange={this.OnchangeDoc}></TextArea>
                    <Button type='submit' display={true}>Add Product</Button>
                </Form>
            </Container>
          );
        }

        return null;
    }
}

export default ProductImport;