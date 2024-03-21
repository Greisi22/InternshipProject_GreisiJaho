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


    @PostMapping("/create")
    public ResponseEntity<String> createRestaurant(@RequestBody Map<String, Object> requestBody) {
        String name = (String) requestBody.get("name");
        String address = (String) requestBody.get("address");
        String openingHours = (String) requestBody.get("openingHours");
        String phoneNumber = (String) requestBody.get("phoneNumber");
        String website = (String) requestBody.get("website");
        String averageRating = (String) requestBody.get("averageRating");
        String isOpen = (String) requestBody.get("isOpen");
        String restaurantManager = (String) requestBody.get("restaurantManager");

        if (name == null || address == null || phoneNumber == null || website == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Required fields are missing.");
        }

        // Call the service method to create the restaurant
        return restaurantService.createRestaurant(name, address, openingHours, phoneNumber,
                website, averageRating, isOpen, restaurantManager);
    }

    @GetMapping("/getRestaurant")
    public ResponseEntity<?> getRestaurant(@RequestBody Map<String, Object> requestBody) {

        return null;
    }

//    @PutMapping("/updateRestaurant")
//    public ResponseEntity<?> updateRestaurant(@RequestBody Map<String, Object> requestBody) {
//        return null;
//    }
//
//    @DeleteMapping("/deleteRestaurant")
//    public ResponseEntity<?> deleteRestaurant(@RequestBody Map<String, Object> requestBody) {
//        return null;
//    }
}
