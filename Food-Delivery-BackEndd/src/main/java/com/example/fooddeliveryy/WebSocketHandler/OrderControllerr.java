// OrderController.java
package com.example.fooddeliveryy.WebSocketHandler;

import com.example.fooddeliveryy.Entities.Order;
import com.example.fooddeliveryy.Entities.Product;
import com.example.fooddeliveryy.Repositories.OrderRepo;
import com.example.fooddeliveryy.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/orders")
public class OrderControllerr {
    private final OrderRepo orderRepo;
    private final ProductRepository productRepo;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public OrderControllerr(OrderRepo orderRepo, ProductRepository productRepo) {
        this.orderRepo = orderRepo;
        this.productRepo = productRepo;
    }

    @MessageMapping("/orders")
    public ResponseEntity<?> placeOrder(@RequestBody Order order) {
        System.out.println("Order: " + order.getProducts());
        long restaurantId = order.getRestaurant().getId();
        order.setOrderTime(null);

        // Fetch the latest products from the database
        List<Product> updatedProducts = order.getProducts().stream()
                .map(product -> productRepo.findById(product.getId()).orElseThrow(() -> new RuntimeException("Product not found")))
                .collect(Collectors.toList());
        order.setProducts(updatedProducts);

        Order order1 = orderRepo.save(order);
        String notification = "New order received: Order ID " + order.getId() + " from User ID " + order;
        System.out.println("Notification: " + notification);
        messagingTemplate.convertAndSend("/topic/restaurant-" + 1 + "-orders", order1);

        return ResponseEntity.ok().build();
    }

}