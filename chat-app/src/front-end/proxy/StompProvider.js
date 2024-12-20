
import React, {useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addMessageAction } from "../redux/action";
import StompClient from './stomp';
import { createContext, useContext } from 'react';

 const MessageContext = createContext();
 export const useMessageContext = () => useContext(MessageContext);


export function StompProvider({ children }) {

    const clientRef = useRef(null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        const client =  new StompClient();
        dispatch(addMessageAction(client)); 
        clientRef.current = client;
        client.activate();
        return () => {
            client.deactivate();
        };
   
    }, []);



    function publishMessage (destination, message){
        const client = clientRef.current;
         if (client && client.connected) {
           console.log('Sending message:', message);
           client.publish({
               destination: destination,
               body: JSON.stringify(message),
           });
           
       } else {
           console.error('Stomp client is not connected');
       }
    }


    return(

        <MessageContext.Provider value={{ publishMessage }}>
            { children }
        </MessageContext.Provider>
    );

}

