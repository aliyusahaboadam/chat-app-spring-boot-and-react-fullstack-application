import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';


class StompClient extends Client {
    
    WEB_SOCKET_BASE_URL = 'http://localhost:8080/websocket';
    socket =  new  SockJS(this.WEB_SOCKET_BASE_URL);
     
    reconnectDelay = 5000;

    webSocketFactory = () => this.socket;

    debug = (str) => {
        console.log(str);
    }

    onStompError = (frame) => {
        console.error('Broker reported error: ' + frame);
    }

}


export default StompClient;











