package com.codingtechniques.controller;

import java.security.Principal;
import java.util.List;
import java.util.logging.Logger;

import org.apache.logging.log4j.message.SimpleMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.codingtechniques.model.Message;
import com.codingtechniques.model.Status;
import com.codingtechniques.util.MessageTime;


@Controller
public class ChatController {
	
	private Logger logger = Logger.getLogger(ChatController.class.getName());
	
	
	
	// send chat message to the chatroom
	@MessageMapping("/sendMessage")
	@SendTo("/topic/messages")
	public  Message  addMessage(@Payload Message message)  {
	message.setTime(MessageTime.getTime());
	return message;
	}
	
	// send user status to the chatroom
	@MessageMapping("/sendStatus")
	@SendTo("/topic/messages")
	public  Message  addStatus(@Payload Message message, SimpMessageHeaderAccessor headerAccessor)  {
	headerAccessor.getSessionAttributes().put("user", message.getUser()); 
	logger.info("User Status: " message);
	return message;
	}
	

	

}
