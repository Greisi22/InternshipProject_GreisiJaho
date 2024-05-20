// OrderController.java
package com.example.fooddeliveryy.WebSocketHandler;

import com.example.fooddeliveryy.Entities.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/orders")
public class OrderControllerr {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/orders")
    public ResponseEntity<?> placeOrder(@RequestBody Order order) {
        System.out.println("Order: " + order);
        long restaurantId = order.getRestaurant().getId();

        String notification = "New order received: Order ID " + order.getId() + " from User ID " + order;
        System.out.println("Notification: "+ notification);
        messagingTemplate.convertAndSend("/topic/restaurant-" + 1 + "-orders", order);


        return ResponseEntity.ok().build();
    }
}