package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.Message;
import com.example.fooddeliveryy.Entities.RestaurantPayment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantPaymentRepo extends JpaRepository<RestaurantPayment, Long> {
}
