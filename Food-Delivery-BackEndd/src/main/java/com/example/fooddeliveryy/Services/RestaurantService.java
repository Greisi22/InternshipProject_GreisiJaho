package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Repositories.logInRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantService {

    private final RestaurantRepo restaurantRepo;
    private final logInRepo loginRepo;

    @Autowired
    public RestaurantService(RestaurantRepo restaurantRepo, logInRepo loginRepo) {
        this.restaurantRepo = restaurantRepo;
        this.loginRepo = loginRepo;
    }

    public Rastaurant save(Rastaurant restaurant) {
        return restaurantRepo.save(restaurant);
    }

    public String createRestaurant(String name, String address, List<String> openingHours, String phoneNumber,
                                   String website, double averageRating, boolean isOpen, Long restaurantManagerId) {

        // Check if the user making the request has the role of a restaurant manager
        User manager = loginRepo.findByUserId(restaurantManagerId).orElse(null);


        if (manager == null || !manager.getUserRole().equals("RestaurantManager")) {
            return "You are not authorized to create a restaurant.";
        }

        // Check if the restaurant name already exists
        if (restaurantRepo.findByName(name)) {
            return "This restaurant name is already in use.";
        }

        // Create and save the restaurant
        Rastaurant restaurant = new Rastaurant(name, address, openingHours, phoneNumber, website,
                averageRating, isOpen, manager);
        restaurantRepo.save(restaurant);

        return "Restaurant created successfully!";
    }

}

//    public Rastaurant getRestaurantById(long id)
//    {
//        Optional<Rastaurant> optionalRastaurant =  rastaurantRepo.findById(id);
//
//        if(!optionalRastaurant.isPresent())
//        {
//            return null;
//        }
//        Rastaurant rastaurant =  optionalRastaurant.get();
//
//        return rastaurant;
//    }