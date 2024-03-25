package com.example.fooddeliveryy.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "restaurant")
public class Rastaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurant_id")
    private long id;



    private String name;


    private String address;

    @OneToMany(mappedBy = "restaurant")
    @JsonBackReference("menuBackReference")
    private List<Menu> menu;


    private List<String> openingHours;


    private String phoneNumber;


    private String website;


    private double averageRating;


    private boolean isOpen;

    @OneToMany(mappedBy = "restaurant")
    @JsonBackReference
    private List<Review> reviews;

    @ManyToOne
    @JoinColumn(name = "restaurant_manager_id")
    private User restaurantManager;

    private int discount;

    @OneToMany(mappedBy = "restaurant")
    @JsonBackReference("orderBackReference")
    private List<Order> order;


    private List<String> category;

    public Rastaurant() {

    }

    public Rastaurant(String name, String address, List<Menu> menu, List<String> openingHours, String phoneNumber, String website, double averageRating, boolean isOpen, List<Review> reviews, int discount, List<String> category) {
        this.name = name;
        this.address = address;
        this.menu = menu;
        this.openingHours = openingHours;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.averageRating = averageRating;
        this.isOpen = isOpen;
        this.reviews = reviews;
        this.discount = discount;
        this.category = category;
    }

    public Rastaurant(long id, String name, String address, List<Menu> menu, List<String> openingHours, String phoneNumber, String website, double averageRating, boolean isOpen, List<Review> reviews, int discount, List<String> category) {
        this.name = name;
        this.id = id;
        this.address = address;
        this.menu = menu;
        this.openingHours = openingHours;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.averageRating = averageRating;
        this.isOpen = isOpen;
        this.reviews = reviews;
        this.discount = discount;
        this.category = category;
    }

    public Rastaurant(String name, String address, List<String> openingHours, String phoneNumber,
                      String website, double averageRating, boolean isOpen, User restaurantManager, int discount, List<String> category) {
        this.name = name;
        this.address = address;
        this.openingHours = openingHours;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.averageRating = averageRating;
        this.isOpen = isOpen;
        this.restaurantManager = restaurantManager;
        this.discount = discount;
        this.category = category;
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


    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Menu> getMenu() {
        return menu;
    }

    public void setMenu(List<Menu> menu) {
        this.menu = menu;
    }

    public List<String> getOpeningHours() {
        return openingHours;
    }

    public void setOpeningHours(List<String> openingHours) {
        this.openingHours = openingHours;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }

    public boolean isOpen() {
        return isOpen;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }

    public User getRestaurantManager() {
        return restaurantManager;
    }

    public void setRestaurantManager(User restaurantManager) {
        this.restaurantManager = restaurantManager;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public List<String> getCategory() {
        return category;
    }

    public void setCategory(List<String> category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Rastaurant{" +
                "id=" + id +
                ", address='" + address + '\'' +
                ", menu=" + menu +
                ", openingHours=" + openingHours +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", website='" + website + '\'' +
                ", averageRating=" + averageRating + '\'' +
                ", isOpen=" + isOpen + '\'' +
                ", restaurantManager=" + restaurantManager + '\'' +
                ", category=" + category +
                '}';
    }


}