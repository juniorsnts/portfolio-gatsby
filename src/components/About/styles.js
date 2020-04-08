import styled from 'styled-components';

export const Container = styled.div`
  align-self: flex-start;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
`;

export const Header = styled.div`
    padding-top: 30px;
    padding-left: 80px;
    p {
        color: #6C757D;
        font-size: 22px;
    }
    strong {
        color: #212529;
        font-size: 26px;
    }
`;

export const Body = styled.div`
    padding-left: 80px;
    padding-top: 40px;
    
    display: flex;
    img {
        width: 350px;
    }
`;

export const DescriptionBox = styled.div`
    padding-left: 70px;

    display: flex;
    flex-direction: column;

    p {
        color: #6C757D;
        font-size: 22px;
        margin: 0;
    }
    strong {
        color: #212529;
        font-size: 26px;
        margin-top: 10px;
    }
    #description {
        color: #9B9797;
        margin-top: 10px;
        text-align: justify;
        width: 450px;
        font-size: 18px;
    }
`;

export const DetailBox = styled.div`
    margin-top: 28px; 
    height: 100px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    p { 
        font-weight: bold;
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 16px;
        color: #212529;
        span {
            font-weight: normal;
            color: #6C757D
        }
    }
`;

export const ButtonGroup = styled.div`
    margin-top: 25px;
    height: 35px;
    display: flex;
    /* justify-content: space-around; */
    a {
    }
    button {
        background-color: #34D8BD;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 5px;
        width: 140px;
        cursor: pointer;
        height: 40px;
        /* outline: 1px solid #d3d3d3; */
    }

    #cv {
        background-color: #000;
        margin-left: 40px;
    }
`;