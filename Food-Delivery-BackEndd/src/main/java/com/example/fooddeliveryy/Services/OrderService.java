package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Order;
import com.example.fooddeliveryy.Entities.Product;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Repositories.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepo orderRepo;
    private final ProductService productService;

    @Autowired
    public OrderService(OrderRepo orderRepo, ProductService productService) {
        this.orderRepo = orderRepo;
        this.productService = productService;
    }

    public Order saveOrder(Order order) {
        List<Product> managedProducts = new ArrayList<>();
        for (Product product : order.getProducts()) {
            Product managedProduct = productService.getProductById(product.getId());
            if (managedProduct == null) {
                throw new IllegalArgumentException("Product not found with ID: " + product.getId());
            } else {
                managedProducts.add(managedProduct);
            }
        }
        order.setProducts(managedProducts);
        return orderRepo.save(order);
    }


    public Order getOrderById(long id){
        Optional<Order> menuOptional = orderRepo.findById(id);
        return menuOptional.orElse(null);
    }
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }

    public Order updateMenu(long id, Order order) {
        if (orderRepo.existsById(id)) {
            order.setId(id);
            return orderRepo.save(order);
        } else {
            return null;
        }
    }

    public void deleteOrder(long id) {
        orderRepo.deleteById(id);
    }

    public void calculateTotalPrice(Order order) {
        double totalPrice = 0.0;


        for (Product product : order.getProducts()) {
            totalPrice += product.getPrice();
        }

        order.setTotalPrice(totalPrice);
    }

    public double calculateTotalPriceWithDiscount(Order order) {
        Rastaurant restaurant = order.getRestaurant();
        double totalPrice = order.getTotalPrice();
        double discount = restaurant.getDiscount() / 100.0; // Convert percentage to decimal
        double discountedPrice = totalPrice - (totalPrice * discount);
        return discountedPrice;
    }


}
