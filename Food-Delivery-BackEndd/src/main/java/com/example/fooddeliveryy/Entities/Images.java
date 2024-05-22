package com.example.fooddeliveryy.Entities;

import jakarta.persistence.*;

import java.util.Arrays;

@Entity
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    @Lob
    private byte[] data;


    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Rastaurant rastaurant;


    public Images(){

    }

    public Images(Long id, String name, String type, byte[] data, Rastaurant rastaurant) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.data = data;
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

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
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
                ", data=" + Arrays.toString(data) + '\'' +
//                ", restaurant="+rastaurant+
                '}';
    }
}
