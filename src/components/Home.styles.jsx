import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
	flex: ${props => props.scalar ? props.scalar : 1};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify}
`; 
export const Background = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;	
  justify-content: center;
`;
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1250px;
  margin: 5% auto;
`;
export const Container = styled.div`
	width: 100%;
  max-width: 1250px;

  margin-top: 30px;
`;