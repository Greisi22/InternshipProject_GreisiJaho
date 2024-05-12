package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Menu;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.tree.ExpandVetoException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {

    private final RestaurantRepo restaurantRepo;

    private final MenuService menuService;

    @Autowired
    public RestaurantService(RestaurantRepo restaurantRepo, MenuService menuService) {
        this.restaurantRepo = restaurantRepo;
        this.menuService = menuService;
    }


    public Rastaurant createRestaurant(Rastaurant restaurant) {

        Rastaurant existingRestaurant = restaurantRepo.findByName(restaurant.getName());
        if (existingRestaurant != null) {
            throw new IllegalArgumentException("Restaurant with name '" + restaurant.getName() + "' already exists");
        }

        if (restaurant.getMenu() != null) {
            List<Menu> restaurantMenus = new ArrayList<>();
            for (Menu menu : restaurant.getMenu()) {
                Menu restaurantMenu = menuService.getMenuById(menu.getId());
                if (restaurantMenu == null) {
                    throw new IllegalArgumentException("Menu not found with ID: " + menu.getId());
                } else {
                    restaurantMenus.add(restaurantMenu);
                }
            }
            restaurant.setMenu(restaurantMenus);
        }

        return restaurantRepo.save(restaurant);
    }

    public List<Rastaurant> getRestaurantsWithDiscount() {

        List<Rastaurant> restaurants = restaurantRepo.findAll();

        List<Rastaurant> restaurantWithDiscount = new ArrayList<>();

        for(Rastaurant res : restaurants){
            if(res.getDiscount() != 0)
            {
               restaurantWithDiscount.add(res);
            }
        }
        return restaurantWithDiscount;
    }


    public Rastaurant getRestaurantById(long id) {
        Optional<Rastaurant> restaurantOptional = restaurantRepo.findById(id);
        return restaurantOptional.orElse(null);
    }

    public List<Rastaurant> getAllRestaurants() {

        return restaurantRepo.findAll();
    }

    public Rastaurant updateRestaurant(long id, Rastaurant restaurant) {
        if (restaurantRepo.existsById(id)) {
            restaurant.setId(id);
            return restaurantRepo.save(restaurant);
        } else {
            return null;
        }
    }

    @Transactional
    public void deleteRestaurantByName(String name) {
        Rastaurant restaurant = restaurantRepo.findByName(name);
        if (restaurant != null) {
            restaurantRepo.deleteByName(name);
        } else {
            throw new IllegalArgumentException("Restaurant with name '" + name + "' not found");
        }
    }

    public List<Rastaurant> getIsAprovedRestaurants()
    {
        List<Rastaurant> allRestaurant = restaurantRepo.findAll();
        List<Rastaurant> approvedRestaurant = new ArrayList<>();
        for(Rastaurant rastaurant: allRestaurant)
        {
            if(rastaurant.isAproved())
            {
                approvedRestaurant.add(rastaurant);
            }
        }
        return approvedRestaurant;
    }


    public List<Rastaurant> getNotAprovedRestaurants()
    {
        List<Rastaurant> allRestaurant = restaurantRepo.findAll();
        List<Rastaurant> approvedRestaurant = new ArrayList<>();
        for(Rastaurant rastaurant: allRestaurant)
        {
            if(!rastaurant.isAproved())
            {
                approvedRestaurant.add(rastaurant);
            }
        }
        return approvedRestaurant;
    }


    public Rastaurant updateRestaurantAttribute(String restaurantName) {
        Rastaurant restaurant = restaurantRepo.findByName(restaurantName);
        if (restaurant != null) {
            restaurant.setAproved(true);
            return restaurantRepo.save(restaurant);
        } else {
            throw new IllegalArgumentException("Restaurant with name " + restaurantName + " not found.");
        }
    }


}

