package com.example.fooddeliveryy.Entities;

import com.example.fooddeliveryy.Entities.Enums.StatusOfOrder;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private long id;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Rastaurant restaurant;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "order_product",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    private List<Product> products;
    private LocalDateTime orderTime;
    private double totalPrice;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private StatusOfOrder orderStatus;
    public Order(long id, Rastaurant restaurant, List<Product> products, LocalDateTime orderTime,
                 double totalPrice, User user, StatusOfOrder orderStatus) {
        this.id = id;
        this.restaurant = restaurant;
        this.products = products;
        this.orderTime = orderTime;
        this.totalPrice = totalPrice;
        this.user = user;
        this.orderStatus = orderStatus;
    }

    public Order() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Rastaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Rastaurant restaurant) {
        this.restaurant = restaurant;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public LocalDateTime getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(LocalDateTime orderTime) {
        this.orderTime = orderTime;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public StatusOfOrder getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(StatusOfOrder orderStatus) {
        this.orderStatus = orderStatus;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", restaurant=" + restaurant +
                ", products=" + products +
                ", orderTime=" + orderTime +
                ", totalPrice=" + totalPrice +
                ", user=" + user +
                ", orderStatus=" + orderStatus +
                '}';
    }
}
