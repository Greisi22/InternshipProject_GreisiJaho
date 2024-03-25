package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.DTO.RestaurantDTO;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Mapping.RestaurantMapper;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Services.RestaurantService;
import jakarta.transaction.Transactional;
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

    @Autowired
    public RestaurantController(RestaurantService restaurantService, RestaurantMapper restaurantMapper, RestaurantRepo restaurantRepo) {
        this.restaurantService = restaurantService;
        this.restaurantMapper = restaurantMapper;
        this.restaurantRepo = restaurantRepo;
    }


    @PostMapping("/create")
    @Transactional
    public ResponseEntity<Rastaurant> createResaurant(@RequestBody Rastaurant rest) {

        Rastaurant restaurant = restaurantService.createRestaurant(rest);
        return ResponseEntity.status(HttpStatus.CREATED).body(restaurant);
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


    @PutMapping("/update/{id}")
    public ResponseEntity<Rastaurant> updateRestaurant(@PathVariable long id, @RequestBody Rastaurant rest) {
        Rastaurant updatedRestaurant = restaurantService.updateRestaurant(id, rest);
        return ResponseEntity.ok().body(updatedRestaurant);
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


}