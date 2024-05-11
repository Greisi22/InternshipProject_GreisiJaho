package com.example.fooddeliveryy.WebSocketHandler;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatCOntroller {
    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public ChatMessage sendMessages(@Payload ChatMessage chatMessage) throws Exception {
       
        return chatMessage;
    }
}
