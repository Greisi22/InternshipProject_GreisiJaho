package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Entities.RestaurantPayment;
import com.example.fooddeliveryy.JWT.JwtTokenProvider;
import com.example.fooddeliveryy.Services.RestaurantPaymentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/restaurantPayment")
@RestController
public class RestaurantPaymentController {

    private final RestaurantPaymentService restaurantPaymentService;
    private final JwtTokenProvider jwtTokenProvider;

    public RestaurantPaymentController(RestaurantPaymentService restaurantPaymentService, JwtTokenProvider jwtTokenProvider) {
        this.restaurantPaymentService = restaurantPaymentService;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @PostMapping("/make")
    public ResponseEntity<RestaurantPayment> makePayment(@RequestBody RestaurantPayment payment, @RequestHeader("Authorization") String token) {

        String trimmedToken = token.trim();

        // Validate the JWT token
        if (!jwtTokenProvider.validateToken(trimmedToken)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        if (trimmedToken.startsWith("Bearer ")) {
            // Remove the "Bearer " prefix
            trimmedToken = trimmedToken.substring(7);
        }

        RestaurantPayment newPayment = restaurantPaymentService.makePayment(payment);
        return ResponseEntity.status(HttpStatus.CREATED).body(newPayment);
    }

}
