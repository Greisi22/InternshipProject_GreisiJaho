package com.example.fooddeliveryy.DTO;

import java.util.List;

public class RestaurantDTO {
    private String name;
    private int discount;
    private List<String> images;

    public RestaurantDTO(String name, int discount, List<String> images) {
        this.name = name;
        this.discount = discount;
        this.images = images;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }
}
