package com.example.fooddeliveryy.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "revenue")
public class Revenue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "revenue_id")
    private Long id;

    @OneToMany(mappedBy = "revenue")
    @JsonBackReference("restaurantPaymentsReference")
    private List<RestaurantPayment> restaurantPayments;

    @Column(name = "total_revenue")
    private double totalRevenue;



    public Revenue() {
    }

    public Revenue(Long id, List<RestaurantPayment> restaurantPayments, double totalRevenue) {
        this.id = id;
        this.restaurantPayments = restaurantPayments;
        this.totalRevenue = totalRevenue;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<RestaurantPayment> getRestaurantPayments() {
        return restaurantPayments;
    }

    public void setRestaurantPayments(List<RestaurantPayment> restaurantPayments) {
        this.restaurantPayments = restaurantPayments;
    }

    public double getTotalRevenue() {
        return totalRevenue;
    }

    public void setTotalRevenue(double totalRevenue) {
        this.totalRevenue = totalRevenue;
    }

    @Override
    public String toString() {
        return "Revenue{" +
                "id=" + id +
                ", restaurantPayments=" + restaurantPayments +
                ", totalRevenue=" + totalRevenue +
                '}';
    }
}
