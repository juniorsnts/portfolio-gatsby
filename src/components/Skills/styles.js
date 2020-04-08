import styled from 'styled-components';

export const Container = styled.div`
  align-self: flex-start;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #F8F9FA;
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
