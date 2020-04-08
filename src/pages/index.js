import React, { useState, useEffect } from "react"
import { Container, LeftContainer, RightContainer, FixedContainer } from './styles';
import LogoName from '../../src/assets/logobranca.png';
import { BoxComponent, AboutComponent, SkillComponent } from "../components";

function Home() {
    const [description, setDescription] = useState("");
    useEffect(() => {
        let text = "I'm Fullstack Developer And DevOps.";
        let example = "";
        for(let i=0; i<text.length; i++){
            setTimeout(() => {
                example = example.concat(text.charAt(i));
                setDescription(example);
            }, i*100)
        }        
    }, []);
    return (
        <Container>
            <RightContainer>
                <BoxComponent description={description}/>
                <AboutComponent/>
                <SkillComponent/>
            </RightContainer>
        </Container>
    )
}

export default Home

