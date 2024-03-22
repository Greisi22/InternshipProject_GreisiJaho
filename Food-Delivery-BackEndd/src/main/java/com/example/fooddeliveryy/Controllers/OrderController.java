package com.example.fooddeliveryy.Controllers;


import com.example.fooddeliveryy.Entities.Order;
import com.example.fooddeliveryy.Services.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/order")
@RestController
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createOrder(@RequestBody Order order ) {
       Order order1 =  orderService.saveOrder(order);
        return ResponseEntity.status(HttpStatus.OK).body(order1);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Order order = orderService.getOrderById(id);
        return ResponseEntity.ok().body(order);
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> order = orderService.getAllOrders();
        return ResponseEntity.ok().body(order);
    }

    @GetMapping("/get/amout")
    public ResponseEntity<Integer> getAllOrdersAmout() {
        List<Order> order = orderService.getAllOrders();
        return ResponseEntity.ok().body(order.size());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order order) {
        Order updatedOrder = orderService.updateMenu(id, order);
        return ResponseEntity.ok().body(updatedOrder);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

}
