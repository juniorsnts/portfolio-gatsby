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
    /* height: 100vh; */

    img {
        margin-top: 50px;
        /* height: 110px; */
    }
    
    ul {    
        height: 100vh;
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
    /* display: none; */
    @media(max-width: 900px){
        display: none;
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
