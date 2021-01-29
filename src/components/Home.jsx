import React from 'react';

import Header from './Header';
import { 
  Background, 
  MainContainer 
} from './Home.styles';
import Table from './Table';

const Home = (props) => {

  return (
    <Background>
      <MainContainer>
        <Header />
        <Table />
      </MainContainer>
    </Background>
  )
};

export default Home;