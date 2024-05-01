package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.DTO.RestaurantDTO;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Configuration.JWT.JwtTokenProvider;
import com.example.fooddeliveryy.Mapping.RestaurantMapper;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Services.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("restaurant")
@RestController
public class RestaurantController {

    private final RestaurantService restaurantService;
    private final RestaurantRepo restaurantRepo;
    private final RestaurantMapper restaurantMapper;

    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public RestaurantController(RestaurantService restaurantService, RestaurantMapper restaurantMapper, RestaurantRepo restaurantRepo, JwtTokenProvider jwtTokenProvider) {
        this.restaurantService = restaurantService;
        this.restaurantMapper = restaurantMapper;
        this.restaurantRepo = restaurantRepo;
        this.jwtTokenProvider = jwtTokenProvider;
    }


    @PostMapping("/create")
    public ResponseEntity<Rastaurant> createRestaurant(@RequestBody Rastaurant restaurant) {

        Rastaurant createdRestaurant = restaurantService.createRestaurant(restaurant);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRestaurant);
    }


    @GetMapping("/get/{id}")
    public ResponseEntity<Rastaurant> getRestaurantById(@PathVariable long id) {
        Rastaurant restaurant = restaurantService.getRestaurantById(id);
        return ResponseEntity.ok().body(restaurant);
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Rastaurant>> getAllRestaurants() {
        List<Rastaurant> restaurants = restaurantService.getAllRestaurants();
        return ResponseEntity.ok().body(restaurants);
    }

    @GetMapping("/get/amount")
    public ResponseEntity<?> getHowManyRestaurants() {
        List<Rastaurant> restaurants = restaurantService.getAllRestaurants();
        return ResponseEntity.ok().body(restaurants.size());
    }



    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteRestaurant(@PathVariable long id) {
        restaurantService.deleteRestaurant(id);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("/{name}")
    public ResponseEntity<?> getRestaurantByName(@PathVariable String name) {
        Optional<Rastaurant> restaurantOptional = Optional.ofNullable(restaurantRepo.findByName(name));

        if (restaurantOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(restaurantOptional);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Restaurant not found with name: " + name);
        }
    }

    @GetMapping("/discount")
    public ResponseEntity<?> getRestaurantWithDiscount() {
        List<Rastaurant> restaurantsWithDiscount = restaurantService.getRestaurantsWithDiscount();

        List<RestaurantDTO> restaurantDTOS = restaurantMapper.restaurantsToRestaurantDTOs(restaurantsWithDiscount);
        return ResponseEntity.ok().body(restaurantDTOS);
    }

    @GetMapping("/approvedRestaurants")
    public ResponseEntity<?> getApprovedRestaurant() {
        try {
            List<Rastaurant> approvedRestaurants = restaurantService.getIsAprovedRestaurants();
            List<RestaurantDTO> restaurantDTOS = restaurantMapper.restaurantsToRestaurantDTOs(approvedRestaurants);
            return ResponseEntity.ok().body(restaurantDTOS);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Server Error!!");
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateRestaurantAttribute(@PathVariable("id") long id) {
        try {
            System.out.println("id "+id + "isApproveddd ");
            Rastaurant updatedRestaurant = restaurantService.updateRestaurantAttribute(id);
            if (updatedRestaurant != null) {
                return ResponseEntity.ok(updatedRestaurant);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Server Error!");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateRestaurant(@RequestBody Rastaurant restaurant) {
        try {
            System.out.println(restaurant);
            Rastaurant updatedRestaurant = restaurantRepo.save(restaurant);
            return ResponseEntity.ok().body(updatedRestaurant);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Server Error!");
        }
    }

    @GetMapping("/tostring")
    public ResponseEntity<?> getRestauantToString() {
          Optional<Rastaurant> restaurant = restaurantRepo.findById(Long.valueOf(1));
        System.out.println(restaurant.toString());
        return ResponseEntity.ok().body(null);
    }

}