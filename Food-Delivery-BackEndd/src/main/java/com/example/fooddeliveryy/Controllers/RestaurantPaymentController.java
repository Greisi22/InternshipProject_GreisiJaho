package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Entities.RestaurantPayment;
import com.example.fooddeliveryy.Repositories.RestaurantPaymentRepo;
import com.example.fooddeliveryy.Services.RestaurantPaymentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/restaurantPayment")
@RestController
public class RestaurantPaymentController {

    private final RestaurantPaymentService restaurantPaymentService;
    private final RestaurantPaymentRepo restaurantPaymentRepo;

    public RestaurantPaymentController(RestaurantPaymentService restaurantPaymentService, RestaurantPaymentRepo restaurantPaymentRepo) {
        this.restaurantPaymentService = restaurantPaymentService;
        this.restaurantPaymentRepo = restaurantPaymentRepo;
    }

    @PostMapping("/makePayment")
    public ResponseEntity<?> makePayment(@RequestBody RestaurantPayment payment) {
        try {
            RestaurantPayment newPayment = restaurantPaymentService.makePayment(payment);

            return ResponseEntity.status(HttpStatus.CREATED).body(newPayment);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Server Error !!!");
        }
    }

    @GetMapping("/getAllPayments")
    public ResponseEntity<?> getPayment(@RequestBody RestaurantPayment payment) {
        try {
            return ResponseEntity.status(HttpStatus.CREATED).body(restaurantPaymentRepo.findAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Server Error !!!");
        }
    }

    @GetMapping("/getAllPaymentsRestaurant/{id}")
    public ResponseEntity<?> getPaymentForSpecificRestaurant(@PathVariable String id) {
        try {
            List<RestaurantPayment> restaurantPayments = restaurantPaymentRepo.findByRestaurantId(Long.valueOf(id));
            return ResponseEntity.status(HttpStatus.OK).body(restaurantPayments);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Server Error !!!");
        }
    }


}
