package com.example.fooddeliveryy.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    @Lob
    private String imageData;


    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    @JsonBackReference
    private Rastaurant rastaurant;


    public Images(){

    }

    public Images(Long id, String name, String type, String imageData, Rastaurant rastaurant) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.imageData = imageData;
        this.rastaurant = rastaurant;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImageData() {
        return imageData;
    }

    public void setImageData(String imageData) {
        this.imageData = imageData;
    }

    public Rastaurant getRastaurant() {
        return rastaurant;
    }

    public void setRastaurant(Rastaurant rastaurant) {
        this.rastaurant = rastaurant;
    }


    @Override
    public String toString() {
        return "Images{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
//                ", imageData='" + imageData + '\'' +
                '}';
    }
}
