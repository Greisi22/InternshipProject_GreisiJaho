package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Menu;
import com.example.fooddeliveryy.Entities.Product;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Repositories.MenuRepository;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Repositories.logInRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return restaurantRepo.findByDiscountGreaterThan(0);
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

    public void deleteRestaurant(long id) {
        restaurantRepo.deleteById(id);
    }


}

