package com.example.fooddeliveryy.Entities;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Rastaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = true)
    private String address;
    @Column(nullable = true)
    @OneToMany(mappedBy = "restaurant")
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
    private RestaurantManager restaurantManager ;
    private int restaurantManagerId;


    public Rastaurant( String address, List<Menu> menu, List<String> openingHours, String phoneNumber,
                       String website, double averageRating, boolean isOpen, int restaurantManagerId) {

        this.address = address;
        this.menu = menu;
        this.openingHours = openingHours;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.averageRating = averageRating;
        this.isOpen = isOpen;
        menu = new ArrayList<>();
        restaurantManagerId = restaurantManager.getUserId();
    }

    public Rastaurant() {

    }

    public Rastaurant(long id, String address, List<Menu> menu, List<String> openingHours,
                      String phoneNumber, String website, double averageRating, boolean isOpen,int restaurantManagerId) {
        this.id = id;
        this.address = address;
        this.menu = menu;
        this.openingHours = openingHours;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.averageRating = averageRating;
        this.isOpen = isOpen;
        restaurantManagerId = restaurantManager.getUserId();
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

    public void setMenu(Menu menu) {
        if(this.menu == null){
            this.menu = new ArrayList<>();
            this.menu.add(menu);
        }
    }

    public List<Menu> getAllMenu() {
        return menu;
    }

    public void setAllMenu(List<Menu> menu) {
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



    public int getRestaurantManagerId() {
        return restaurantManagerId;
    }

    public void setRestaurantManagerId(int restaurantManagerId) {
        this.restaurantManagerId = restaurantManagerId;
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
                ", restaurantManagerId=" + restaurantManagerId +
                '}';
    }
}
