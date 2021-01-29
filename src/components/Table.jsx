import React, { useEffect, useState } from 'react';
import fetchPeople from '../helpers/fetchPeople';

import PersonCard from './Cards/PersonCard';

import {
  Row,
  Container
} from './Home.styles';

const Table = (props) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      const response = await fetchPeople();
      if (response) {
        setPeople(response);
      }
    }
    getPeople();
  }, [])

  return (
    <Container>
      <Row>
        {people ? 
          people.map((person, index) => (
            <PersonCard 
              person={person}
              key={index}
            />
          ))
          :
          "Loading..."
        }
      </Row>
    </Container>
  )
};

export default Table;

