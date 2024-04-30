package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.RestaurantPayment;
import com.example.fooddeliveryy.Repositories.RestaurantPaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RestaurantPaymentService {

    @Autowired
    private final RestaurantPaymentRepo restaurantPaymentRepo;

    public RestaurantPaymentService(RestaurantPaymentRepo restaurantPaymentRepo) {
        this.restaurantPaymentRepo = restaurantPaymentRepo;
    }

    public RestaurantPayment makePayment(RestaurantPayment payment) {
        if (payment != null) {
            return restaurantPaymentRepo.save(payment);
        }
        return null;
    }

    public RestaurantPayment Payment(RestaurantPayment payment) {

        return null;
    }
}
