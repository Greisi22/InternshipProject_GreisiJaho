package com.example.fooddeliveryy.DTO;

import java.util.List;

public class RestaurantResponseDTO {

    private String name;
    private String address;
    private List<String> openingHours;
    private String phoneNumber;
    private String website;
    private double averageRating;
    private boolean isOpen;
    private int discount;

    public RestaurantResponseDTO(String name, String address, List<String> openingHours, String phoneNumber,
                         String website, double averageRating, boolean isOpen, int discount) {
        this.name = name;
        this.address = address;
        this.openingHours = openingHours;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.averageRating = averageRating;
        this.isOpen = isOpen;
        this.discount = discount;
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

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }
}
