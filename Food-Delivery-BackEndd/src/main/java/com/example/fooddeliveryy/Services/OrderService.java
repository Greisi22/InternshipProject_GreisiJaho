package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Order;
import com.example.fooddeliveryy.Entities.Product;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Repositories.OrderRepo;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepo orderRepo;
    private final ProductService productService;
    private final UserRepository userRepository;
    private final RestaurantRepo restaurantRepo;

    @Autowired
    public OrderService(OrderRepo orderRepo, ProductService productService, UserRepository userRepository, RestaurantRepo restaurantRepo) {
        this.orderRepo = orderRepo;
        this.productService = productService;
        this.userRepository = userRepository;
        this.restaurantRepo = restaurantRepo;
    }

    public Order saveOrder(Order order) {

       Optional<User> userOptional = userRepository.findByUserEmail(order.getUser().getUserEmail());
       User user = null;
       if(userOptional.isPresent())
       {
           user = userOptional.get();
       }

        Optional<Rastaurant> rastaurantOptional = restaurantRepo.findById(order.getRestaurant().getId());
        Rastaurant rastaurant = null;
        if(rastaurantOptional.isPresent())
        {
            rastaurant = rastaurantOptional.get();
        }


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
        order.setUser(user);
        order.setRestaurant(rastaurant);
        calculateOrderPrice(order);

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

    private double calculateTotalPrice(Order order) {
        double totalPrice = 0.0;


        for (Product product : order.getProducts()) {
            totalPrice += product.getPrice();
        }

        order.setTotalPrice(totalPrice);

        return totalPrice;
    }

    private void calculateOrderPrice(Order order) {
        double totalPrice = calculateTotalPrice(order);


       double orderPrice = totalPrice+order.getShippingPrice()+ order.getTaxPrice();

        order.setOrderPrice(orderPrice);
    }

    public double calculateTotalPriceWithDiscount(Order order) {
        Rastaurant restaurant = order.getRestaurant();
        double totalPrice = order.getTotalPrice();
        double discount = restaurant.getDiscount() / 100.0; // Convert percentage to decimal
        double discountedPrice = totalPrice - (totalPrice * discount);
        return discountedPrice;
    }


}
