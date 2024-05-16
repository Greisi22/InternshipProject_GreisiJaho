package com.example.fooddeliveryy.DTO;
import com.example.fooddeliveryy.Entities.Enums.StatusOfOrder;
import com.example.fooddeliveryy.Entities.Product;

import java.time.LocalDateTime;
import java.util.List;

public class OrderDTO {

    private long id;
    private long restaurantId;
    private long userId;
    private List<Product> products;
    private LocalDateTime orderTime;
    private double totalPrice;
    private StatusOfOrder orderStatus;
    private String userEmail;

    public OrderDTO(long id, long restaurantId, long userId, List<Product> products, LocalDateTime orderTime,
                    double totalPrice, StatusOfOrder orderStatus, String userEmail) {
        this.id = id;
        this.restaurantId = restaurantId;
        this.userId = userId;
        this.products = products;
        this.orderTime = orderTime;
        this.totalPrice = totalPrice;
        this.orderStatus = orderStatus;
        this.userEmail = userEmail;
    }

    public OrderDTO() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(long restaurantId) {
        this.restaurantId = restaurantId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
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

    public StatusOfOrder getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(StatusOfOrder orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    @Override
    public String toString() {
        return "OrderDTO{" +
                "id=" + id +
                ", restaurantId=" + restaurantId +
                ", userId=" + userId +
                ", products=" + products +
                ", orderTime=" + orderTime +
                ", totalPrice=" + totalPrice +
                ", orderStatus=" + orderStatus +
                ", userEmail='" + userEmail + '\'' +
                '}';
    }
}
