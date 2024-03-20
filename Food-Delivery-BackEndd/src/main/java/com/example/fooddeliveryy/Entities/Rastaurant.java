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

    @Column(nullable = true)
    private String address;

    @OneToMany(mappedBy = "restaurant")
    @JsonBackReference
    private List<Menu> menu;

    @Column(nullable = true)
    private List<String> openingHours;

    @Column(nullable = true)
    private String phoneNumber;

    @Column(nullable = true)
    private String website;

    @Column(nullable = true)
    private double averageRating;

    private boolean isOpen;

    @ManyToOne
    @JoinColumn(name = "restaurant_manager_id")
    private User restaurantManager;

    public Rastaurant() {}

    public Rastaurant(String address, List<Menu> menu, List<String> openingHours, String phoneNumber, String website, double averageRating, boolean isOpen) {
        this.address = address;
        this.menu = menu;
        this.openingHours = openingHours;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.averageRating = averageRating;
        this.isOpen = isOpen;
    }

    public Rastaurant(long id, String address, List<Menu> menu, List<String> openingHours, String phoneNumber, String website, double averageRating, boolean isOpen) {
        this.id = id;
        this.address = address;
        this.menu = menu;
        this.openingHours = openingHours;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.averageRating = averageRating;
        this.isOpen = isOpen;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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


    @Override
    public String toString() {
        return "Rastaurant{" +
                "id=" + id +
                ", address='" + address + '\'' +
                ", menu=" + menu +
                ", openingHours=" + openingHours +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", website='" + website + '\'' +
                ", averageRating=" + averageRating +
                ", isOpen=" + isOpen +
                ", restaurantManager=" + restaurantManager +
                '}';
    }
}