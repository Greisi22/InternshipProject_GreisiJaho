package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Entities.Revenue;
import com.example.fooddeliveryy.Configuration.JWT.JwtTokenProvider;
import com.example.fooddeliveryy.Services.RevenueService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/revenue")
@RestController
public class RevenueController {

    private final RevenueService revenueService;

    private final JwtTokenProvider jwtTokenProvider;

    public RevenueController(RevenueService revenueService, JwtTokenProvider jwtTokenProvider) {
        this.revenueService = revenueService;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @PostMapping("/make")
    public ResponseEntity<Revenue> makePayment(@RequestBody Revenue revenue, @RequestHeader("Authorization") String token) {

        String trimmedToken = token.trim();

        if (!jwtTokenProvider.validateToken(trimmedToken)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        if (trimmedToken.startsWith("Bearer ")) {
            trimmedToken = trimmedToken.substring(7);
        }
        Revenue revenue1 = revenueService.createReview(revenue);
        return ResponseEntity.status(HttpStatus.CREATED).body(revenue1);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Revenue> getRevenueById(@PathVariable Long id, @RequestHeader("Authorization") String token) {

        String trimmedToken = token.trim();

        if (!jwtTokenProvider.validateToken(trimmedToken)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        if (trimmedToken.startsWith("Bearer ")) {
            trimmedToken = trimmedToken.substring(7);
        }

        Revenue revenue = revenueService.getRevenueById(id);
        if (revenue == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(revenue);
    }

    @GetMapping("/calculate")
    public ResponseEntity<Double> calculateTotalRevenue(@RequestHeader("Authorization") String token) {

        String trimmedToken = token.trim();

        if (!jwtTokenProvider.validateToken(trimmedToken)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        if (trimmedToken.startsWith("Bearer ")) {
            trimmedToken = trimmedToken.substring(7);
        }

        double totalRevenue = revenueService.calculateTotalRevenue();
        return ResponseEntity.status(HttpStatus.OK).body(totalRevenue);
    }
}
