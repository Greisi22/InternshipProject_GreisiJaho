package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.RestaurantPayment;
import com.example.fooddeliveryy.Entities.Revenue;
import com.example.fooddeliveryy.Repositories.RestaurantPaymentRepo;
import com.example.fooddeliveryy.Repositories.RevenueRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RevenueService {

    @Autowired
    private final RevenueRepo revenueRepo;
    private final RestaurantPaymentRepo restaurantPaymentRepo;

    public RevenueService(RevenueRepo revenueRepo, RestaurantPaymentRepo restaurantPaymentRepo) {
        this.revenueRepo = revenueRepo;
        this.restaurantPaymentRepo = restaurantPaymentRepo;
    }
    public Revenue createReview(Revenue revenue) {
        if (revenue != null) {
            return revenueRepo.save(revenue);
        }
        return null;
    }

    public double calculateTotalRevenue() {
        List<RestaurantPayment> restaurantPayments = restaurantPaymentRepo.findAll();
        double totalRevenue = 0.0;
        for (RestaurantPayment payment : restaurantPayments) {
            totalRevenue += payment.getPaymentAmount();
        }
        Revenue revenue = new Revenue();
        revenue.setTotalRevenue(totalRevenue);
        revenueRepo.save(revenue);
        return totalRevenue;
    }

    public Revenue getRevenueById(Long id) {
        return revenueRepo.findById(id).orElse(null);
    }
}
