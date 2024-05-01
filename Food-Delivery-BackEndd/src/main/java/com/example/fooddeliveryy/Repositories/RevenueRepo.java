package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.Revenue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RevenueRepo extends JpaRepository<Revenue, Long> {
    Revenue findByRestaurantId(Long restaurantId);
}
