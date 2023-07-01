import React from 'react';
import styled from 'styled-components';
//import {order} from '../data/orders';
import Reports from './reports';

export const StyledSection = styled.section`
width : 100%;
position : relative;
overflow : hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: width 1s;
`;

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
margin-top: 10rem;
@media screen and (max-width: 768px) {
    overflow-x: auto;
}
`;

const Table = styled.table`
border-collapse: collapse;
width: 80%;

`;

const Td = styled.td`
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
`;

const Th = styled(Td)``;

const Tr = styled.tr`
&:nth-child(even) {
background-color: #dddddd;
} 
`;

const ReportContainer = styled.div`
diplay: flex;
flex-direction: column;
padding: 2rem;
justify-content: center;
align-items: center
`;

const Row = styled.span`
width: 12px;
height: 12px;
border-top: 2px solid black;
border-left: 2px solid black;
cursor: pointer;
transform: ${props => props.show ? 'rotate(-45deg)': 'rotate(135deg)'};
transition: transform 1s;
`;


const RowContainer = styled.div`
display: flex;
align-items: center;
height: 3rem;
width: 100%;
margin-left: 3rem;

`;


class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            width: '100%',
            showed: true,
            reports: []
        };
        this.updateCommands = this.updateCommands.bind(this);
        this.updateReports = this.updateReports.bind(this);
        this.eventSource = new EventSource("http://localhost:3001/api/product/get-commands", {withCredentials: true});
    }

    componentDidMount() {
        //const eventSource = new EventSource("http://localhost:3001/api/product/get-commands", {withCredentials: true});
        this.eventSource.addEventListener("command", (e) => {
            //console.log('data');
            this.updateCommands(e.data);
        });

        this.eventSource.addEventListener("report", (e) => {
            this.updateReports(e.data);
        });
    }
    
    componentWillUnmount() {
        this.eventSource.close();
    }

    updateCommands = (data) => {
        const jsonData = JSON.parse(data);
        console.log(jsonData.data.length, jsonData.data);
        this.setState({data: jsonData.data});
        
    }

    updateReports = (data) => {
        const jsonData = JSON.parse(data);
        console.log(jsonData.data.length, jsonData.data);
        this.setState({reports: jsonData.data});
        
    }

   ShowReport = () => {
       if(this.state.showed){
           this.setState({width: '0px', showed: false});
           //console.log('not showed');
       }else{
           this.setState({width: '100%', showed: true});
           //console.log('showed');
       }
   }

    render() {
       const orders = this.state.data.map((items, index) => {
           return(
              <Tr key={index}>
                    <Th>{items.address}</Th>
                    <Th>{items.foodname}</Th>
                    <Th>{items.price}</Th>
                    <Th>{items.size}</Th>
                    <Th>{items.quantity}</Th>
                    <Th>{items.phoneNumber}</Th>
                    <Th>{items.bank}</Th>
                    <Th>{items.home}</Th>
              </Tr>
           )
       });

       const reports = this.state.reports.map((items, index) => {
           return(
               <Reports reporter={items.firstname + items.lastname} email={items.email} report={items.report} key={index}/>
           )
       });

       //{items.map((ITEMS, INDEX) => {
       // return(<Th key={INDEX}>{ITEMS}</Th>)
    //})}

        return(

            <main>
              <StyledSection>
                <Container>
                 <Table>
                    <Tr>
                       <Th>Address</Th>
                       <Th>Food Name</Th>
                       <Th>Price</Th>
                       <Th>Size</Th>
                       <Th>Quantity</Th>
                       <Th>number</Th>
                       <Th>Payed with credit-card</Th>
                       <Th>Payed in home</Th>
                    </Tr>
                    {orders}
                 </Table>
                </Container>
              </StyledSection>
              <div style={{display: 'flex',justifyContent:'center'}}><h1 style={{color:'black', borderBottom:'2px solid gray'}}>REPORTS</h1></div>
              <RowContainer>
                <Row onClick={this.ShowReport} show={this.state.showed}/>
              </RowContainer>
              <StyledSection style={{width: this.state.width}}>
                <ReportContainer>
                   {reports}
                </ReportContainer>
              </StyledSection>
            </main>
        );
    }
}

export default Order;