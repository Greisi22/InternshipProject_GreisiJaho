package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Entities.Review;
import com.example.fooddeliveryy.Services.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/review")
@RestController
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
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

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getBestReviews(@PathVariable Long id){

      try{
          List<Review> reviewList =  reviewService.getBestReviews(id);
          return ResponseEntity.status(HttpStatus.OK).body(reviewList);
      }
        catch (Exception e){
            System.out.println("Error: " + e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Smth went wrong");
        }
    }
}
