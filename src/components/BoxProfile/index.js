import React from 'react'
import { BoxProfile, ImageProfile, Name, Description, BoxIcons } from './styles';
import LogoGithub from '../../assets/git-h.svg';
import LogoLinkedin from '../../assets/linkedin.svg';
import LogoFacebook from '../../assets/facebook-h.svg';
import LogoInstagram from '../../assets/instagram-h.svg';
function BoxComponent({ description }) {
    return (
        <BoxProfile>
            <ImageProfile/>
            <Name>JOSÉ BARBOSA</Name>
            <Description>{description}</Description>
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
    )
}

export default BoxComponent
