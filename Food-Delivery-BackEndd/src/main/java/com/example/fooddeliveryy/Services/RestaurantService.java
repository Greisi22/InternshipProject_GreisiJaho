package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Repositories.logInRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;
@Service
public class RestaurantService {

    private final RestaurantRepo rastaurantRepo;

    @Autowired
    public RestaurantService(RestaurantRepo rastaurantRepo) {
        this.rastaurantRepo = rastaurantRepo;
    }


    public Rastaurant getRestaurantById(long id)
    {
        Optional<Rastaurant> optionalRastaurant =  rastaurantRepo.findById(id);

        if(!optionalRastaurant.isPresent())
        {
            return null;
        }
        Rastaurant rastaurant =  optionalRastaurant.get();

        return rastaurant;
    }

    public String createRestaurant (Rastaurant restaurant)
    {
        if(restaurant == null)
        {
            return null;
        }

        System.out.println("Restoarunt qtu: " + restaurant);
        rastaurantRepo.save(restaurant);

        return "T'lumt bytha!";
    }

}
