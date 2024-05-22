package com.example.fooddeliveryy.DTO;

import com.example.fooddeliveryy.Entities.Documentation;
import com.example.fooddeliveryy.Entities.Images;
import com.example.fooddeliveryy.Entities.Product;

import java.util.List;

public class RestaurantDTO {
    private String name;
    private int discount;
    private String email;
//    private List<Images> images;
    private List<String> category;
    private Documentation documentation;
    private List<Product> products;


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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

//    public List<Images> getImages() {
//        return images;
//    }
//
//    public void setImages(List<Images> images) {
//        this.images = images;
//    }

    public List<String> getCategory() {
        return category;
    }

    public void setCategory(List<String> category) {
        this.category = category;
    }

    public Documentation getDocumentation() {
        return documentation;
    }

    public void setDocumentation(Documentation documentation) {
        this.documentation = documentation;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
