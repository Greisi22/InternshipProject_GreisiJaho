package com.example.fooddeliveryy.WebSocketHandler;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class OrderControllerr {

    @MessageMapping("/placeOrder")
    @SendTo("/topic/orders")
    public String placeOrder(String order) {
        System.out.println("Order"+ order);
        return "Order received: " + order;
    }
}
