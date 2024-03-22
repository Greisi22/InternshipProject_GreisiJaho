package com.example.fooddeliveryy.Controllers;


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

@RequestMapping("order")
@RestController
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/create")
    public ResponseEntity<String> createOrder(@RequestBody Map<String, Object> requestBody) {

        Map<String, Object> restaurant = (Map<String, Object>) requestBody.get("restaurant");
        Map<String, List<Object>> products = (Map<String, List<Object>>) requestBody.get("products");

        Map<String, Object> map = new HashMap<>();

        if (restaurant == null ||products == null  ) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Required fields are missing.");
        }

        String message = orderService.

        if (message == null) {
            map.put("message", "Register was successful!");
            return ResponseEntity.status(HttpStatus.OK).body(map.toString());
        } else {
            map.put("message", message);
            return ResponseEntity.status(HttpStatus.IM_USED).body(map.toString());
        }
    }

}
