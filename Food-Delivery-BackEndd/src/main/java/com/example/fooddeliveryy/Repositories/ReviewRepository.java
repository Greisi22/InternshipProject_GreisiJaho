package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByRestaurantId(long restaurantId);

    @Query("SELECT r FROM Review r WHERE r.rating = 5")
    List<Review> findReviewsGreaterThanFiveWithLimit();

    List<Review> findByDate(LocalDate date);

    long countByRatingAndDateBetween(int rating, LocalDate startDate, LocalDate endDate);


    long countByRating(int rating);
}
