package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByRestaurantId(long restaurantId);
}
