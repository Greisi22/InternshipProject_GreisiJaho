package com.example.fooddeliveryy.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.List;

@Entity
public class Rastaurant {
    @Id
    private long id;
    private String address;
    private Menu menu;
    private List<String> openingHours;
    private String phoneNumber;
    private String website;
    private double averageRating;
    private boolean isOpen;
}
