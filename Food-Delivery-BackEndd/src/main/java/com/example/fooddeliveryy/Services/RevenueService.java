package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Repositories.RestaurantPaymentRepo;
import com.example.fooddeliveryy.Repositories.RevenueRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RevenueService {

    @Autowired
    private final RevenueRepo revenueRepo;
    private final RestaurantPaymentRepo restaurantPaymentRepo;

    public RevenueService(RevenueRepo revenueRepo, RestaurantPaymentRepo restaurantPaymentRepo) {
        this.revenueRepo = revenueRepo;
        this.restaurantPaymentRepo = restaurantPaymentRepo;
    }

}
