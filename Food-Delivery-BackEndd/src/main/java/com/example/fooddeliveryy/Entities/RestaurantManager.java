package com.example.fooddeliveryy.Entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "restaurant_manager")
@Inheritance(strategy = InheritanceType.JOINED)
public class RestaurantManager extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int managerId;

    @OneToMany(mappedBy = "restaurantManager")
    private List<Rastaurant> restaurants;

    public RestaurantManager() {
        // Default constructor
    }

    public int getManagerId() {
        return managerId;
    }

    public void setManagerId(int managerId) {
        this.managerId = managerId;
    }

    public List<Rastaurant> getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(List<Rastaurant> restaurants) {
        this.restaurants = restaurants;
    }
}
