package com.example.fooddeliveryy.Controllers.SuperAdmin;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RequestMapping
@RestController
public class ControlRestaurantController {

    @GetMapping("/getRestaurant")
    public ResponseEntity<?> getRestaurant(@RequestBody Map<String, Object> requestBody) {
        return null;
    }


    @PostMapping("/createRestaurant")
    public ResponseEntity<?> createRestaurant(@RequestBody Map<String, Object> requestBody) {
        return null;
    }

    @PutMapping("/updateRestaurant")
    public ResponseEntity<?> updateRestaurant(@RequestBody Map<String, Object> requestBody) {
        return null;
    }

    @DeleteMapping("/deleteRestaurant")
    public ResponseEntity<?> deleteRestaurant(@RequestBody Map<String, Object> requestBody) {
        return null;
    }
}
