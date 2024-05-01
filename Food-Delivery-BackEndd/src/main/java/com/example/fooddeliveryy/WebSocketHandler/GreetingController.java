package com.example.fooddeliveryy.WebSocketHandler;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GreetingController {

    @MessageMapping("/broadcast")
    @SendTo("/topic/reply")
    public String broadcastMessage(@Payload String message) {
        return "You have received a message: " + message;
    }
}