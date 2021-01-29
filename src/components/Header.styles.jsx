import styled from 'styled-components';

export const HeaderContainer = styled.div`
  @media (max-width: 515px) {
    margin: 0 auto;
  }
`;
export const Title = styled.h1`
  margin-bottom: 15px;  
  color: black;
`;

export const Input = styled.input`
  width: 350px;
  padding: 5px 10px;
  border-radius: 0;
`;
export const Button = styled.button`
  width: 130px;
  color: white;
  background-color: black;

  @media (max-width: 515px) {
    width: 374px;
  }
`;