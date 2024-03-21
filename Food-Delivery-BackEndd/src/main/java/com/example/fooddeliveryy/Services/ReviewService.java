package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Review;
import com.example.fooddeliveryy.Repositories.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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

    //we need to add a llogic, to return like a specific number like 10
    //to get reviews with hiegher rate and has more text
    public List<Review> getBestReviews(long restaurantId){
        return reviewRepository.findByRestaurantId(restaurantId);
    }
}
