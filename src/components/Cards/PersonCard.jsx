import React from 'react';

import { 
  Row, 
  Column 
} from '../Home.styles';
import {
  PersonContainer,
  Image,
  Text
} from '../Table.styles';

const PersonCard = (props) => {

  return (
    <PersonContainer>
      <Row>
        <Column 
          scalar={1} 
          align="flex-start"
        >
          <Image src={props.person.picture.thumbnail} />
        </Column>
        <Column 
          scalar={2} 
          justify="flex-end"
        >
          <Text
            bold={true}
            size={25}
          >
            {
              `${props.person.name.first} ${props.person.name.last}`
            }
          </Text>
          <Text
           blue
           >
            {
              props.person.email
            }
          </Text>
          <Text
            mb={10}
          >
            {!props.hidden ?
              props.person.cell
              :
              null
            }
          </Text>
        </Column>
      </Row>
    </PersonContainer>
  )
};

export default PersonCard;