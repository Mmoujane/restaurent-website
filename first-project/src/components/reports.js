import React from 'react';
import styled from 'styled-components';


const ReportContainer = styled.div`
diplay: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
border-left: 6px solid black;
background-color: lightgrey;
margin: 2rem 0;
@media screen and (max-width: 768px) {
    align-items: center;
`;

const Feild = styled.div`
display: flex;
align-items: center;
  @media screen and (max-width: 768px) {
     flex-direction: column;
     justify-content: center;
}
`;

const H2 = styled.h2`
width: 15%;
@media screen and (max-width: 768px) {
    width: 100%;
`;

const Span = styled.span`
width: 85%;
@media screen and (max-width: 768px) {
    width: 100%;
`;

const P = styled(Span)``;

class Reports extends React.Component{


    render() {
        return(
            <ReportContainer>
                <Feild>
                    <H2>Reporter:</H2>
                    <Span>{this.props.reporter}</Span>
                </Feild>
                <Feild>
                    <H2>Email:</H2>
                    <Span>{this.props.email}</Span>
                </Feild>
                <Feild>
                    <H2>Report:</H2>
                    <P>{this.props.report}</P>
                </Feild>
            </ReportContainer>
        )
    }
}

export default Reports;