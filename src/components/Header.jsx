import React from 'react';

import {
  Title,
  Input,
  Button,
  HeaderContainer
} from './Header.styles';

import {
  Row
} from './Home.styles';

const Header = (props) => {

  return (
    <HeaderContainer>
      <Row>
        <Title>
          people
        </Title>
      </Row>
      <Row>
        <Input
          placeholder="name search"
        />
        <Button>
          search
        </Button>
      </Row>
    </HeaderContainer>
  )
};

export default Header;