package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Entities.RestaurantPayment;
import com.example.fooddeliveryy.Entities.Revenue;
import com.example.fooddeliveryy.Repositories.RestaurantPaymentRepo;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Repositories.RevenueRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RestaurantPaymentService {

    @Autowired
    private final RestaurantPaymentRepo restaurantPaymentRepo;

    private final RevenueRepo revenueRepo;
    private final RestaurantRepo restaurantRepo;


    public RestaurantPaymentService(RestaurantPaymentRepo restaurantPaymentRepo, RevenueRepo revenueRepo, RestaurantRepo restaurantRepo) {
        this.restaurantPaymentRepo = restaurantPaymentRepo;
        this.revenueRepo = revenueRepo;
        this.restaurantRepo = restaurantRepo;
    }

    public RestaurantPayment makePayment(RestaurantPayment payment) {
        if (payment != null) {
            updaterevenue(payment.getRestaurant().getId(), payment.getPaymentAmount());
            return restaurantPaymentRepo.save(payment);
        }
        return null;
    }

    private void updaterevenue(long id, double paymentAmount) {
        Revenue revenue = revenueRepo.findByRestaurantId(id);
        if (revenue == null) {
            Optional<Rastaurant> optionalRastaurant = restaurantRepo.findById(id);
            System.out.println(optionalRastaurant.isPresent());
            if (optionalRastaurant.isPresent()) {
                Revenue revenue1 = new Revenue();
                revenue1.setRestaurant(optionalRastaurant.get());
                revenue1.setTotalRevenue(paymentAmount);
                revenueRepo.save(revenue1);
            }
        }
        else{
            double tempRevenue = revenue.getTotalRevenue();
            revenue.setTotalRevenue(tempRevenue + paymentAmount);
            revenueRepo.save(revenue);
        }

    }

    public RestaurantPayment Payment(RestaurantPayment payment) {

        return null;
    }
}
