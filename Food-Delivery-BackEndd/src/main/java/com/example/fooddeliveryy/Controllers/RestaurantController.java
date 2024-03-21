package com.example.fooddeliveryy.Controllers;

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
    public ResponseEntity<String> createRestaurant(@RequestBody Map<String, Object> requestBody) {
        String name = (String) requestBody.get("name");
        String address = (String) requestBody.get("address");
        List<String> openingHours = (List<String>) requestBody.get("openingHours");
        String phoneNumber = (String) requestBody.get("phoneNumber");
        String website = (String) requestBody.get("website");
        double averageRating = (double) requestBody.get("averageRating");
        Boolean isOpen = (Boolean) requestBody.get("isOpen");
        Map<String, Object> restaurantManagerData = (Map<String, Object>) requestBody.get("restaurantManager");
        Long restaurantManagerId = ((Number) restaurantManagerData.get("userId")).longValue();


        Map<String, Object> map = new HashMap<>();

        if (name == null || address == null || phoneNumber == null || website == null
                || restaurantManagerId == null || openingHours == null || averageRating == 0 || isOpen == null ) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Required fields are missing.");
        }

        String message = restaurantService.createRestaurant(name, address, openingHours, phoneNumber,
                website, averageRating, isOpen, restaurantManagerId);

        if (message == null) {
            map.put("message", "Register was successful!");
            return ResponseEntity.status(HttpStatus.OK).body(map.toString());
        } else {
            map.put("message", message);
            return ResponseEntity.status(HttpStatus.IM_USED).body(map.toString());
        }
    }



}
//    @PostMapping("/create")
//    public ResponseEntity<?> createRestaurant(@RequestBody Rastaurant restaurant) {
//
//
//        Rastaurant res = restaurantService.save(restaurant);
//
//        return ResponseEntity.status(HttpStatus.IM_USED).body(res);
//    }
