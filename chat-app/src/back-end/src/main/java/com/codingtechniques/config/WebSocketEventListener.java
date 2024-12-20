package com.codingtechniques.config;

import java.lang.management.MemoryType;
import java.util.logging.Logger;

import org.springframework.context.event.EventListener;
import org.springframework.messaging.core.MessagePostProcessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import com.codingtechniques.model.Message;
import com.codingtechniques.model.Status;
import com.codingtechniques.util.MessageTime;

import lombok.experimental.var;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class WebSocketEventListener {
	
	private Logger logger = Logger.getLogger(WebSocketEventListener.class.getName());
	
	private final SimpMessageSendingOperations sendingOperations;
	
	public WebSocketEventListener(SimpMessageSendingOperations sendingOperations) {
		super();
		this.sendingOperations = sendingOperations;
	}

	// listen for when a websocket session disconnect
	
	@EventListener
	public void handleWebSocketDisconnectListener(SessionDisconnectEvent disconnectEvent) {
		
		StompHeaderAccessor stompHeaderAccessor = StompHeaderAccessor.wrap(disconnectEvent.getMessage());
		
		String user = (String) stompHeaderAccessor.getSessionAttributes().get("user");
	    
		if (user != null) {
			Message message = new Message(user, Status.LEFT);
		    sendingOperations.convertAndSend("/topic/messages", message);
		}
		
		
		
	}

}
