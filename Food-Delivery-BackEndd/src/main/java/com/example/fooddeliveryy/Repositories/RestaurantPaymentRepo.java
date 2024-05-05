package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.RestaurantPayment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantPaymentRepo extends JpaRepository<RestaurantPayment, Long> {
    List<RestaurantPayment> findByRestaurantId(Long restaurantId);
}
