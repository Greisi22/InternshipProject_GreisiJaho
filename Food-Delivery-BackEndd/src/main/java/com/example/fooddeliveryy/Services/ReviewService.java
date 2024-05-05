package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Review;
import com.example.fooddeliveryy.Repositories.ReviewRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public Review createReview(Review review) {
        if (review != null) {
            return reviewRepository.save(review);
        }
        return null;
    }


    public List<Review> getReviewsGreaterThanFive() {
        List<Review> reviewsGreaterFive = reviewRepository.findReviewsGreaterThanFiveWithLimit();
        if (reviewsGreaterFive.size() <= 20) {
            return null;
        }
        return reviewsGreaterFive;
    }

    public List<Review> getAllReview() {

        return reviewRepository.findAll();
    }


    public List<Review> getReviewsByDate(int year, int month, int day) {
        LocalDate date = LocalDate.of(year, month, day);
        return reviewRepository.findByDate(date);
    }

    public List<Review> getReviewsForRestaurant(long restaurantId) {
        return reviewRepository.findByRestaurantId(restaurantId);
    }


    public Map<Integer, Long> getReviewCountsByRatingAndDateRange(LocalDate startDate, LocalDate endDate) {
        Map<Integer, Long> ratingCounts = new HashMap<>();

        for (int rating = 1; rating <= 5; rating++) {
            long count = reviewRepository.countByRatingAndDateBetween(rating, startDate, endDate);
            ratingCounts.put(rating, count);
        }

        return ratingCounts;
    }


    public Map<Integer, Long> getReviewCountsByRating() {
        Map<Integer, Long> ratingCounts = new HashMap<>();
        for (int rating = 1; rating <= 5; rating++) {
            long count = reviewRepository.countByRating(rating);
            ratingCounts.put(rating, count);
        }

        return ratingCounts;
    }
}


