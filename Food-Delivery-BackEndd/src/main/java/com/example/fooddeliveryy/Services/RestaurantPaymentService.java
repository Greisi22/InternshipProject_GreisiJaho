package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.RestaurantPayment;
import com.example.fooddeliveryy.Repositories.RestaurantPaymentRepo;
import org.antlr.v4.runtime.misc.LogManager;
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
}
