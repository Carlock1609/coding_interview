import axios from 'axios';

async function fetchPeople() {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=12")
    const people = response.data
    return people.results
  } catch (e) {
    console.log(e)
  }
};

export default fetchPeople;