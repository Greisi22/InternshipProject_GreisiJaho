package com.example.fooddeliveryy.Entities;

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
    private String category;   //Desset ....
    @Column(nullable = true)
    private int amount;

    @ManyToOne
    private Menu menu;

    public Product() {
    }

    public Product(long id, String name, String description, double price, List<String> ingredients, String category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.ingredients = ingredients;
        this.category = category;
    }

    public Menu getMenu() {
        return menu;
    }

    public void setMenu(Menu menu) {
        this.menu = menu;
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", ingredients=" + ingredients +
                ", category='" + category + '\'' +
                '}';
    }


}
