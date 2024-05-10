package com.example.fooddeliveryy.DTO;

import com.example.fooddeliveryy.Entities.Documentation;

import java.util.List;

public class RestaurantDTO {
    private String name;
    private int discount;
    private String email;
    private List<String> images;
    private List<String> category;
    private Documentation documentation;

    public Documentation getDocumentation() {
        return documentation;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setDocumentation(Documentation documentation) {
        this.documentation = documentation;
    }

    public List<String> getCategory() {
        return category;
    }

    public void setCategory(List<String> category) {
        this.category = category;
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
