import * as actionTypes from './actionTypes';

 export function addMessage (message) {
  return {
    type: actionTypes.messageType.ADD_MESSAGES,
    payload: message
  }
 }

 export function addMessageAction(client) {
  return dispatch => {
    client.onConnect = () => {
      console.log('Connected to WebSocket');
      client.subscribe('/topic/messages', (response) => {
          const body = response.body;
          console.log('Recieved Message is: ' +  JSON.stringify(body));
          dispatch(addMessage(JSON.parse(body))); 
      });
  }
  }
 }
















