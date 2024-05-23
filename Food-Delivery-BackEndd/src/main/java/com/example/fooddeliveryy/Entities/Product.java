package com.example.fooddeliveryy.Entities;

import com.example.fooddeliveryy.Entities.Enums.ProductType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @Column(nullable = true)
    private String description;
    @Column(nullable = true)
    private double price;
    @Column(nullable = true)
    private List<String> ingredients;
    @Column(nullable = true)
    private ProductType category;
    @Column(nullable = true)
    private int amount;
    @ManyToMany(mappedBy = "products")
    @JsonBackReference(value = "restaurant-products")
    private List<Rastaurant> restaurants;
    @ManyToMany(mappedBy = "products")
    @JsonBackReference(value = "order-products")
    private List<Order> ordered;


    @OneToOne
    @JsonManagedReference
    private Images image;


    public Product() {}


    public Product(long id, String name, String description, double price, List<String> ingredients, ProductType category, int amount, List<Rastaurant> restaurants, List<Order> ordered, Images image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.ingredients = ingredients;
        this.category = category;
        this.amount = amount;
        this.restaurants = restaurants;
        this.ordered = ordered;
        this.image = image;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public ProductType getCategory() {
        return category;
    }

    public void setCategory(ProductType category) {
        this.category = category;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public List<Rastaurant> getRestaurants() {
        return restaurants;
    }

    public void setRestaurants(List<Rastaurant> restaurants) {
        this.restaurants = restaurants;
    }

    public List<Order> getOrdered() {
        return ordered;
    }

    public void setOrdered(List<Order> ordered) {
        this.ordered = ordered;
    }

    public Images getImage() {
        return image;
    }

    public void setImage(Images image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", ingredients=" + ingredients +
                ", category=" + category +
                ", amount=" + amount +
                ", restaurants=" + restaurants +
                ", ordered=" + ordered +
                ", image='" + image + '\'' +

                '}';
    }
}
