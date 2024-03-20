package com.example.fooddeliveryy.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Rastaurant restaurant;
    private String name;
    @JsonBackReference
    @OneToMany
    private List<Product> products;
    private String description;
    private List<String> chefs;

    public Menu() {
    }

    public Menu(Long id, Rastaurant restaurant, String name, List<Product> products, String description, List<String> chefs) {
        this.id = id;
        this.restaurant = restaurant;
        this.name = name;
        this.products = products;
        this.description = description;
        this.chefs = chefs;
    }

    public Menu(Rastaurant restaurant, String name, List<Product> products, String description) {
        this.restaurant = restaurant;
        this.name = name;
        this.products = products;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Rastaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Rastaurant restaurant) {
        this.restaurant = restaurant;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getChefs() {
        return chefs;
    }

    public void setChefs(List<String> chefs) {
        this.chefs = chefs;
    }

    @Override
    public String toString() {
        return "Menu{" +
                "id=" + id +
                ", restaurant=" + restaurant.getId() +
                ", name='" + name + '\'' +
                ", products=" + products +
                ", description='" + description + '\'' +
                ", chefs=" + chefs +
                '}';
    }
}
