import styled from 'styled-components';
import background from '../../src/assets/backgroundone.jpg'
import profile from '../../src/assets/perfil.png'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LeftContainer = styled.div`
    width: 600px;
    background-color: black;
    position: relative;
    
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        margin-top: 50px;
        /* height: 110px; */
    }
    
    ul {
        list-style: none;
        align-self: flex-start;

        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
        margin-left: 24px;
        li {
            font-family: 'oswald';
            color: #9F9D9D;
            font-size: 16px;
            cursor: pointer;
            ::before {
                content: "";
                display: block;
                position: absolute;
                border-top: 1px solid #343434;
                width: 80%;
                margin-top: 35px;
                left: 55px;
            }
            &:hover {
                color: #fff;
            }
        }
    }
`;
export const RightContainer = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const BoxProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    height: ${window.innerHeight}px;
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
    padding: 0;
    margin-bottom: 15px;
    font-family: oswald
`;

export const BoxIcons = styled.div`
    display: flex;
    flex-direction: row;

    img {
        margin: 20px;
        cursor: pointer;
    }
`;