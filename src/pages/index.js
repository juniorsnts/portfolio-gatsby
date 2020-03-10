import React from "react"
import { Container, LeftContainer, RightContainer, BoxProfile, ImageProfile, Name, Description, BoxIcons } from './styles';
import LogoGithub from '../../src/assets/git-h.svg';
import LogoLinkedin from '../../src/assets/linkedin.svg';
import LogoFacebook from '../../src/assets/facebook-h.svg';
import LogoInstagram from '../../src/assets/instagram-h.svg';
import LogoName from '../../src/assets/logobranca.png';
export default () => (
    <Container>
        <LeftContainer>
            <img src={LogoName} />
            <ul>
                <li style={{color: '#fff'}}>HOME</li>
                <li>SOBRE</li>
                <li>SERVIÇOS</li>
                <li>PORTFÓLIO</li>
                <li>NOTICIAS</li>
                <li>CONTATO</li>
            </ul>
        </LeftContainer>
        <RightContainer>
            <BoxProfile>
                <ImageProfile/>
                <Name>JOSÉ BARBOSA</Name>
                <Description>I'm Fullstack Developer And DevOps</Description>
                <BoxIcons>
                    <a href="https://github.com/juniorsnts" target="_blank">
                        <img src={LogoGithub} title="Github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/josebdev" target="_blank">
                        <img src={LogoLinkedin} title="Linkedin"/>
                    </a>
                    <a href="https://www.facebook.com/juniorsantoszx" target="_blank">
                        <img src={LogoFacebook} title="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/juniordev.js/" target="_blank">
                        <img src={LogoInstagram} title="Instagram"/>
                    </a>
                </BoxIcons>
            </BoxProfile>
        </RightContainer>
    </Container>
)
