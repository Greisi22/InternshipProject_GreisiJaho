package com.example.fooddeliveryy.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "revenue")
public class Revenue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "revenue_id")
    private Long id;

//    @OneToMany(mappedBy = "revenue")
//    @JsonBackReference("restaurantPaymentsReference")
//    private List<RestaurantPayment> restaurantPayments;

    @Column(name = "total_revenue")
    private double totalRevenue;

    @OneToOne
    private Rastaurant restaurant;

    public Rastaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Rastaurant restaurant) {
        this.restaurant = restaurant;
    }

    public Revenue() {
    }

    public Revenue(Long id, double totalRevenue, Rastaurant restaurant) {
        this.id = id;
        this.totalRevenue = totalRevenue;
        this.restaurant = restaurant;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
                ", restaurant=" + restaurant +
                ", totalRevenue=" + totalRevenue +
                '}';
    }
}
