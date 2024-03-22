package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.DTO.RestaurantResponseDTO;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Mapping.RestaurantMapper;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Services.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RequestMapping("restaurant")
@RestController
public class RestaurantController {

    private final RestaurantService restaurantService;
    private final RestaurantRepo restaurantRepo;
    private final RestaurantMapper restaurantMapper;

    @Autowired
    public RestaurantController(RestaurantService restaurantService, RestaurantMapper restaurantMapper, RestaurantRepo restaurantRepo) {
        this.restaurantService = restaurantService;
        this.restaurantMapper = restaurantMapper;
        this.restaurantRepo = restaurantRepo;
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
        int discount = (Integer) requestBody.get("discount");

        Map<String, Object> map = new HashMap<>();

        if (name == null || address == null || phoneNumber == null || website == null
                || restaurantManagerId == null || openingHours == null || averageRating == 0 || isOpen == null || discount == 0 ) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Required fields are missing.");
        }

        String message = restaurantService.createRestaurant(name, address, openingHours, phoneNumber,
                website, averageRating, isOpen, restaurantManagerId, discount);

        if (message == null) {
            map.put("message", "Register was successful!");
            return ResponseEntity.status(HttpStatus.OK).body(map.toString());
        } else {
            map.put("message", message);
            return ResponseEntity.status(HttpStatus.IM_USED).body(map.toString());
        }
    }



    @GetMapping("/{name}")
    public ResponseEntity<?> getRestaurantByName(@PathVariable String name) {
        Optional<Rastaurant> restaurantOptional = Optional.ofNullable(restaurantRepo.findByName(name));

        if (restaurantOptional.isPresent()) {
//            RestaurantResponseDTO restaurantDTO = restaurantMapper.restaurantToRestaurantResponseDTO(restaurantOptional.get());
            return ResponseEntity.status(HttpStatus.OK).body(restaurantOptional);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Restaurant not found with name: " + name);
        }
    }

    @GetMapping("/discount")
    public ResponseEntity<?> getRestaurantWithDiscount() {
        List<Rastaurant> restaurantsWithDiscount = restaurantService.getRestaurantsWithDiscount();

        return ResponseEntity.ok(restaurantsWithDiscount);
    }




}