package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Menu;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Entities.Review;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Repositories.logInRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
@Service
public class RestaurantService {

    private final RestaurantRepo rastaurantRepo;
    private final logInRepo loginRepo;

    @Autowired
    public RestaurantService(RestaurantRepo rastaurantRepo, logInRepo loginRepo) {
        this.rastaurantRepo = rastaurantRepo;
        this.loginRepo = loginRepo;
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


    public Rastaurant save(Rastaurant restaurant) {
        return rastaurantRepo.save(restaurant);
    }

    public String createRestaurant(String name, String address, List<String> openingHours, String phoneNumber,
                                   String website, double averageRating, boolean isOpen, User restaurantManager)
    {
        if(loginRepo.findByUserRole("RestaurantManager"))
        {
            if(rastaurantRepo.findByName(name))
            {
                return "This restaurant is already in use!";
            }
            else{
                Rastaurant rastaurant = new Rastaurant(name, address, openingHours, phoneNumber, website ,
                        averageRating, isOpen, restaurantManager);
                rastaurantRepo.save(rastaurant);
            }
        }
        return "You are not capable of managing a restaurant!";
    }
}
