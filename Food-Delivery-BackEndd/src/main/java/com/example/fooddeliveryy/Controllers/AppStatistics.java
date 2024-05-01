package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Entities.Review;
import com.example.fooddeliveryy.Services.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;


@RequestMapping("statistic")
@RestController
public class AppStatistics {

    private final ReviewService reviewService;

    public AppStatistics(ReviewService reviewService) {
        this.reviewService = reviewService;
    }


    @GetMapping("/get/reviews/{year}/{month}/{day}")
    public ResponseEntity<?> getReviewsByDate(
            @PathVariable int year,
            @PathVariable int month,
            @PathVariable int day) {
        try {
            System.out.println("prova");
            List<Review> reviews = reviewService.getReviewsByDate(year, month, day);
            return ResponseEntity.ok().body(reviews);
        } catch (Exception e) {
            System.out.println("Error: " + e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong!!!");
        }
    }


    @GetMapping("/get/review-counts/{startDate}/{endDate}")
    public ResponseEntity<?> getReviewCountsByDateRange(
            @PathVariable String startDate,
            @PathVariable String endDate) {
        try {
            LocalDate start = LocalDate.parse(startDate);
            LocalDate end = LocalDate.parse(endDate);

            Map<Integer, Long> reviewCounts = reviewService.getReviewCountsByRatingAndDateRange(start, end);
            return ResponseEntity.ok().body(reviewCounts);
        } catch (Exception e) {
            System.out.println("Error: " + e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong!!!");
        }
    }

    @GetMapping("/get/review-counts")
    public ResponseEntity<?> getReviewCounts() {
        try {
            Map<Integer, Long> reviewCounts = reviewService.getReviewCountsByRating();
            return ResponseEntity.ok().body(reviewCounts);
        } catch (Exception e) {
            System.out.println("Error: " + e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong!!!");

        }

    }
}
