package com.example.fooddeliveryy.Controllers;


import com.example.fooddeliveryy.Entities.Order;
import com.example.fooddeliveryy.Services.OrderService;
import com.example.fooddeliveryy.Services.RestaurantService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/order")
@RestController
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createOrder(@RequestBody Order order ) {
        System.out.println("Order: " + order);
        return ResponseEntity.status(HttpStatus.OK).body(order);

    }

}
