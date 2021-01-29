import styled from 'styled-components';

export const PersonContainer = styled.div`
  width: 360px;
  height: 110px;
  background: #ebe9e9;
  margin: 10px;
`;
export const Image = styled.img`
  width: 110px;
  height: 110px;
`;
export const Text = styled.p`
  font-size: ${props => props.size ? props.size : "16"}px;
  font-weight: ${props => props.bold ? "bold" : "normal"};
  margin-bottom: ${props => props.mb ? props.mb : 0}px;
  color: ${props => props.blue ? "blue" : "black"};
`;
