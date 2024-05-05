package com.example.fooddeliveryy.Entities;

import jakarta.persistence.*;

@Entity
@Table (name = "documentation")
public class Documentation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String restaurantName;

    private String restaurantEmail;

    private String yearsOfExperiance;

    private String whatTheyOffer;

    @OneToOne
    private Rastaurant rastaurant;

    public Documentation(long id, String restaurantName, String restaurantEmail, String yearsOfExperiance,
                         String whatTheyOffer, Rastaurant rastaurant) {
        this.id = id;
        this.restaurantName = restaurantName;
        this.restaurantEmail = restaurantEmail;
        this.yearsOfExperiance = yearsOfExperiance;
        this.whatTheyOffer = whatTheyOffer;
        this.rastaurant = rastaurant;
    }

    public Documentation() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public String getRestaurantEmail() {
        return restaurantEmail;
    }

    public void setRestaurantEmail(String restaurantEmail) {
        this.restaurantEmail = restaurantEmail;
    }

    public String getYearsOfExperiance() {
        return yearsOfExperiance;
    }

    public void setYearsOfExperiance(String yearsOfExperiance) {
        this.yearsOfExperiance = yearsOfExperiance;
    }

    public String getWhatTheyOffer() {
        return whatTheyOffer;
    }

    public void setWhatTheyOffer(String whatTheyOffer) {
        this.whatTheyOffer = whatTheyOffer;
    }

    public Rastaurant getRastaurant() {
        return rastaurant;
    }

    public void setRastaurant(Rastaurant rastaurant) {
        this.rastaurant = rastaurant;
    }


    @Override
    public String toString() {
        return "Documentation{" +
                "id=" + id +
                ", restaurantName='" + restaurantName + '\'' +
                ", restaurantEmail='" + restaurantEmail + '\'' +
                ", yearsOfExperiance='" + yearsOfExperiance + '\'' +
                ", whatTheyOffer='" + whatTheyOffer + '\'' +
                ", rastaurant=" + rastaurant.getId() +
                '}';
    }
}
