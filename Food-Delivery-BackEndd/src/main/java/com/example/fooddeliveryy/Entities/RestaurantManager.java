package com.example.fooddeliveryy.Entities;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class RestaurantManager extends User {

    @OneToMany(mappedBy = "restaurantManager")
    private List<Rastaurant> restaurants;

    public RestaurantManager(int userId, String userEmail, String userPassword, String userRole, List<Rastaurant> restaurants) {
        super(userId, userEmail, userPassword, userRole);
        this.restaurants = restaurants;
    }

    public RestaurantManager() {

    }

    public List<Rastaurant> getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(List<Rastaurant> restaurants) {
        this.restaurants = restaurants;
    }
}
