import React from 'react';
import Img from '../components/ResImage';
import Documentation from '../components/documentation';
import {Res} from '../data/AboutDoc';
import {ChefOne} from '../data/ChefData';
import {ChefTwo} from '../data/ChefData';
import {ChefThree} from '../data/ChefData';

class AboutMain extends React.Component {

    render(){

        return(
            <main>
                <Img />
                <div style={{display: 'flex',justifyContent:'center'}}><h1 style={{borderBottom:'2px solid gray'}}>Who Are We</h1></div>
                <Documentation Reverse={false} Src={Res.src} foodName={Res.ResName} foodDoc={Res.ResDoc} display={false} zbla={true}/>
                <div style={{display: 'flex',justifyContent:'center'}}><h1 style={{borderBottom:'2px solid gray'}}>Our Chef</h1></div>
                <Documentation Reverse={true} Src={ChefOne.src} foodName={ChefOne.Name} foodDoc={ChefOne.Doc} display={false} zbla={true}/>
                <Documentation Reverse={false} Src={ChefTwo.src} foodName={ChefTwo.Name} foodDoc={ChefTwo.Doc} display={false} zbla={true}/>
                <Documentation Reverse={true} Src={ChefThree.src} foodName={ChefThree.Name} foodDoc={ChefThree.Doc} display={false} zbla={true}/>
            </main>
        );
    }
}

export default AboutMain;