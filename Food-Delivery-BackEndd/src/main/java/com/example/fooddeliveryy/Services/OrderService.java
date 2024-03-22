package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Order;
import com.example.fooddeliveryy.Entities.Product;
import com.example.fooddeliveryy.Repositories.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final OrderRepo orderRepo;

    @Autowired
    public OrderService(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    public Order saveOrder(Order order) {
        return orderRepo.save(order);
    }

    public void calculateTotalPrice(Order order) {
        double totalPrice = 0.0;


        for (Product product : order.getProducts()) {
            totalPrice += product.getPrice();
        }

        order.setTotalPrice(totalPrice);
    }
}
