package com.example.fooddeliveryy.Entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String reviewText;
    private int rating;
    private LocalDate  date;
    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    @JsonBackReference
    private Rastaurant restaurant;

    public Review(long id, String reviewText, int rating, LocalDate date, Rastaurant restaurant) {
        Id = id;
        this.reviewText = reviewText;
        this.rating = rating;
        this.date = date;
        this.restaurant = restaurant;
    }

    public Review() {

    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
         if (rating >= 0 && rating <= 5) {
            this.rating = rating;
        } else {
            this.rating = 5;
           }
    }
    public LocalDate  getDate() {
        return date;
    }

    public void setDate(LocalDate  date) {
        this.date = date;
    }

    public Rastaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Rastaurant restaurant) {
        this.restaurant = restaurant;
    }

    @Override
    public String toString() {
        return "Review{" +
                "Id=" + Id +
                ", reviewText='" + reviewText + '\'' +
                ", rating=" + rating +
                ", date='" + date + '\'' +
                '}';
    }
}
