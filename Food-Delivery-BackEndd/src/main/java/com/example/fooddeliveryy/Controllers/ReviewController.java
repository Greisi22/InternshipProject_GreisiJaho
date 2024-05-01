package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.DTO.ReviewDTO;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Entities.Review;
import com.example.fooddeliveryy.Mapping.ReviewMapper;
import com.example.fooddeliveryy.Services.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/review")
@RestController
public class ReviewController {

    private final ReviewService reviewService;
    private final ReviewMapper reviewMapper;

    public ReviewController(ReviewService reviewService, ReviewMapper reviewMapper) {
        this.reviewService = reviewService;
        this.reviewMapper = reviewMapper;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createReview(@RequestBody Review reviewTaken) {
        Review review = null;
        try {
            review = reviewService.createReview(reviewTaken);
        } catch (Exception e) {
            System.out.println("Error: " + e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create review, server error");
        }
        if (review != null) {
            return ResponseEntity.status(HttpStatus.OK).body(review);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong!!!");
    }


    @GetMapping("/get")
    public ResponseEntity<?> getAllReviews(){
        try{
            List<Review> reviews = reviewService.getAllReview();
            return ResponseEntity.ok().body(reviews);
        }
        catch (Exception e){
            System.out.println("Error: " + e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong!!!");
        }
    }


    @GetMapping("/get/highest")
    public ResponseEntity<?> getHighestReviews(){
        try{
            List<Review> reviews = reviewService.getReviewsGreaterThanFive();
            return ResponseEntity.ok().body(reviews);
        }
        catch (Exception e){
            System.out.println("Error: " + e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong!!!");
        }
    }
}
