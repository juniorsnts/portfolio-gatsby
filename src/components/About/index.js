import React from 'react'
import { Container, Header, Body, DescriptionBox, DetailBox, ButtonGroup } from './styles'
import photo from '../../assets/about.png';
function About() {
    return (
        <Container>
            <Header>
                <p>INFORMAÇÃO</p>
                <strong>SOBRE_</strong>
            </Header>
            <Body>
                <div>
                    <img src={photo}/>
                </div>
                <DescriptionBox>
                    <p>SOBRE MIM</p>
                    <strong>I'm José Barbosa & Freelancer</strong>
                    <p id="description">
                        Hi, My name is José Barbosa. I am a Web Developer, and asellus tempus
                        porttitor estnecer intiorer. Nulla facilisi. Nulla cursus velit et faucibus
                        lobortis. In tincider diam metus tincede mollis aryi egestas quis. Nunc
                        vitae felis lectus. Pellentesque imperdiet augue erat aliquer interdume
                        turpis congue. Aliquam euismod turpis.
                    </p>
                    <DetailBox>
                        <p>Idade: <span>22</span></p>
                        <p>Website: <span>www.jbarbosa.dev</span></p>
                        <p>Contato: <span>+55 (96) 99119-0883</span></p>
                        <p>Grau: <span>Pleno</span></p>
                        <p>Email: <span>santosjsdev@gmail.com</span></p>
                        <p>Linkedin: <span>@juniorsantos</span></p>
                    </DetailBox>
                    <ButtonGroup>
                        <button>CONTRATE-ME</button>
                        <a href="https://drive.google.com/open?id=1i4vAtvyMO9ec8p75WIvqnHV1m_Efxozh" target="_blank"><button id="cv">DOWNLOAD CV</button></a>                        
                    </ButtonGroup>
                </DescriptionBox>
            </Body>
        </Container>
    )
}

export default About
