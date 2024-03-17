package com.example.fooddeliveryy.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Menu {
    @Id
    private Long id;

    private String Prova;
    @ManyToOne
    private Rastaurant restaurant;
}
