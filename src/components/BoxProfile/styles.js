import styled from 'styled-components';
import background from '../../assets/backgroundone.jpg'
import profile from '../../assets/perfil.png'

export const BoxProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
`;
export const ImageProfile = styled.div`
    background-image: url(${profile});
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    width: 200px;
`;

export const Name = styled.h2`
    font-size: 32px;
    color: #FFF;
    margin: 0;
    padding: 0;
    margin-top: 26px;
    margin-bottom: 26px;
    font-family: oswald;
    font-weight: bold;
`;

export const Description = styled.h3`
    color: #fff;
    font-size: 26px;
    margin: 0;
    padding: 10px;
    margin-bottom: 15px;
    font-family: oswald;
    text-align: center;
`;

export const BoxIcons = styled.div`
    display: flex;
    flex-direction: row;

    img {
        margin: 20px;
        cursor: pointer;
        :hover {
            transform: scale(1.1);
            transition: all 0.2s linear;
        }
    }
`;