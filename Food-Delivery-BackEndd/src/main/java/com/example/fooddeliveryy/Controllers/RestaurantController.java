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

@RequestMapping
@RestController
public class RestaurantController {


private final RestaurantService restaurantService;
@Autowired
    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @PostMapping("/createRestaurant")
    public ResponseEntity<?> createRestaurant(@RequestBody Map<String, Object> requestBody) {

//        long id = (long) requestBody.get("id");
//        String address = (String) requestBody.get("address");
//        List<Menu> menu = (List<Menu>) requestBody.get("menu");
//        List<String> openingHours = (List<String>) requestBody.get("openingHours");
//        String phoneNumber = (String) requestBody.get("phoneNumber");
//        String webisite = (String) requestBody.get("website");
//        double averageRating = (double) requestBody.get("averageRating");
//        boolean isOpen = (boolean) requestBody.get("isOpen");
//        Map<String , String> map = new HashMap<>();

//        if(id == 0 || address==null || menu == null || openingHours == null || phoneNumber == null
//                || webisite == null || averageRating == 0 || isOpen == false){
//
//            if(id == 0){
//                map.put("id", "The argument id is missing");
//            } else if (address == null) {
//                map.put("address", "The argument address is missing");
//            } else if (menu == null) {
//                map.put("menu", "The argument menu is missing");
//            } else if (openingHours == null) {
//                map.put("openingHours", "The argument openingHours is missing");
//            } else if (phoneNumber == null) {
//                map.put("phoneNumber", "The argument phoneNumber is missing");
//            } else if (webisite == null) {
//                map.put("webisite", "The argument webisite is missing");
//            } else if (averageRating == 0) {
//                map.put("averageRating", "The argument averageRating is missing");
//            }  else if (isOpen == false) {
//                map.put("isOpen", "The argument isOpen is missing");
//            }
//
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map.toString());
//        }
        System.out.println("Greisi mos ha shume mut se tjerat jan haram!");
        Rastaurant rastaurant = new Rastaurant();
        System.out.println("Restoranti eshte ky: " + rastaurant);
        String prova = restaurantService.createRestaurant(rastaurant);

        return ResponseEntity.status(HttpStatus.IM_USED).body(prova);
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
