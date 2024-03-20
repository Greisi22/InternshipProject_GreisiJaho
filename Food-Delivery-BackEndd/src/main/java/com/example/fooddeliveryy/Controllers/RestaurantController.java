package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Entities.Menu;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Services.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("restaurant")
@RestController
public class RestaurantController {

private final RestaurantService restaurantService;
@Autowired
    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createRestaurant(@RequestBody Rastaurant restaurant) {


        Rastaurant res = restaurantService.save(restaurant);

        return ResponseEntity.status(HttpStatus.IM_USED).body(res);
    }

    @GetMapping("/getRestaurant")
    public ResponseEntity<?> getRestaurant(@RequestBody Map<String, Object> requestBody) {

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
