package com.example.fooddeliveryy.Controllers;


import com.example.fooddeliveryy.DTO.OrderDTO;
import com.example.fooddeliveryy.Entities.Order;
import com.example.fooddeliveryy.Mapping.OrderMapper;
import com.example.fooddeliveryy.Repositories.OrderRepo;
import com.example.fooddeliveryy.Services.OrderService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/order")
@RestController
public class OrderController {

    private final OrderService orderService;
    private final OrderRepo orderRepo;
    private final OrderMapper orderMapper;

    public OrderController(OrderService orderService, OrderRepo orderRepo, OrderMapper orderMapper) {
        this.orderService = orderService;
        this.orderRepo = orderRepo;
        this.orderMapper = orderMapper;
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
    public ResponseEntity<List<?>> getAllOrders() {
        List<Order> order = orderService.getAllOrders();
//        List<OrderDTO> orderDTOS = orderMapper.ordersToOrderDTOs(order);
        return ResponseEntity.ok().body(order);
    }

    @GetMapping("/get/amout")
    public ResponseEntity<Integer> getAllOrdersAmout() {
        List<Order> order = orderService.getAllOrders();
        return ResponseEntity.ok().body(order.size());
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateOrder(@RequestBody Order order) {
        try {
            Order updatedOrder = orderRepo.save(order);
            return ResponseEntity.ok().body(updatedOrder);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Server Error!");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{orderId}/totalPriceWithDiscount")
    public ResponseEntity<?> calculateTotalPriceWithDiscount(@PathVariable long orderId) {
        try {
            Order order = orderService.getOrderById(orderId);
            double totalPriceWithDiscount = orderService.calculateTotalPriceWithDiscount(order);
            return ResponseEntity.ok().body(totalPriceWithDiscount);
        } catch (Exception e) {
            System.out.println("Error: " + e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to calculate total price with discount!");
        }
    }



}
