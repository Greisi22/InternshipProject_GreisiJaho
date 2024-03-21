package com.example.fooddeliveryy.Entities;


import jakarta.persistence.*;

@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String reviewText;
    private int rating;
    private String date;

    @ManyToOne
    private Rastaurant restaurant;

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
        this.rating = rating;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
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
