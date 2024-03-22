package com.example.fooddeliveryy.Entities;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Rastaurant restaurant;

    @ManyToMany
    @JoinTable(
            name = "order_product",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    private List<Product> products;

    @Column(nullable = false)
    private LocalDateTime orderTime;

    @Column(nullable = false)
    private double totalPrice;

    public Order() {
        this.orderTime = LocalDateTime.now();
    }

    public Order(Rastaurant restaurant, List<Product> products,  double totalPrice) {
        this.restaurant = restaurant;
        this.products = products;
        this.orderTime = LocalDateTime.now();
        this.totalPrice = totalPrice;

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", restaurant=" + restaurant +
                ", products=" + products +
                ", orderTime=" + orderTime +
                ", totalPrice=" + totalPrice +
                '}';
    }
}
