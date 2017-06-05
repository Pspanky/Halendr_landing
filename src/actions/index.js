import axios from 'axios';
// keys for actiontypes
export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

const ROOT_URL = 'http://localhost:9090';
// const ROOT_URL = 'https://hlp-api.herokuapp.com';


export function sendEmail(email) {
  console.log('got em');
  return (dispatch) => {
    axios.post(`${ROOT_URL}/`, email).then((response) => {
      console.log('email was sent');
    }).catch((error) => {
      console.log(error);
    });
  };
}
