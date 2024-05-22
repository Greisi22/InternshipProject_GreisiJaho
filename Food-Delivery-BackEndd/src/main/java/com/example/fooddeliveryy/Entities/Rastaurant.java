package com.example.fooddeliveryy.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;
import java.util.stream.Collectors;

@Entity
@Table(name = "restaurant")
public class Rastaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "restaurant_id")
    private long id;
    private String name;

    private String email;


    private String address;



    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "restaurant_product",
            joinColumns = @JoinColumn(name = "restaurant_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    private List<Product> products;

    private List<String> openingHours;
    private String phoneNumber;
    private String website;
    private double averageRating;
    private boolean isOpen;
    @OneToMany(mappedBy = "restaurant")
    @JsonBackReference("reviewsBackReference")
    private List<Review> reviews;

    @OneToMany(mappedBy = "rastaurant")
    @JsonManagedReference
    private List<Images> images;



    @OneToMany
    @JsonBackReference("restaurantManagersBackReference")
    private List<User> restaurantManagers;

    private int discount;
    @OneToMany(mappedBy = "restaurant")
    @JsonBackReference(value = "restaurant-order")
    private List<Order> order;
    private List<String> category;

    @OneToMany(mappedBy = "restaurant")
    @JsonBackReference("paymentReference")
    private List<RestaurantPayment> restaurantPayments;

    private boolean isAproved;
    private boolean isActive;

    @OneToOne
    private Revenue revenue;

    @OneToOne
    private Documentation documentation;

    public Rastaurant() {
    }

    public Rastaurant(long id, String name, String email, String address, List<Product> products,
                      List<String> openingHours, String phoneNumber, String website,
                      double averageRating, boolean isOpen, List<Review> reviews, List<Images> images, List<User> restaurantManagers, int discount, List<Order> order, List<String> category, List<RestaurantPayment> restaurantPayments, boolean isAproved, boolean isActive, Revenue revenue, Documentation documentation) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
        this.products = products;
        this.openingHours = openingHours;
        this.phoneNumber = phoneNumber;
        this.website = website;
        this.averageRating = averageRating;
        this.isOpen = isOpen;
        this.reviews = reviews;
        this.images = images;
        this.restaurantManagers = restaurantManagers;
        this.discount = discount;
        this.order = order;
        this.category = category;
        this.restaurantPayments = restaurantPayments;
        this.isAproved = isAproved;
        this.isActive = isActive;
        this.revenue = revenue;
        this.documentation = documentation;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public List<String> getOpeningHours() {
        return openingHours;
    }

    public void setOpeningHours(List<String> openingHours) {
        this.openingHours = openingHours;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public double getAverageRating() {
        return averageRating;
    }

    public void setAverageRating(double averageRating) {
        this.averageRating = averageRating;
    }

    public boolean isOpen() {
        return isOpen;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public List<Images> getImages() {
        return images;
    }

    public void setImages(List<Images> images) {
        this.images = images;
    }

    public List<User> getRestaurantManagers() {
        return restaurantManagers;
    }

    public void setRestaurantManagers(List<User> restaurantManagers) {
        this.restaurantManagers = restaurantManagers;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public List<Order> getOrder() {
        return order;
    }

    public void setOrder(List<Order> order) {
        this.order = order;
    }

    public List<String> getCategory() {
        return category;
    }

    public void setCategory(List<String> category) {
        this.category = category;
    }

    public List<RestaurantPayment> getRestaurantPayments() {
        return restaurantPayments;
    }

    public void setRestaurantPayments(List<RestaurantPayment> restaurantPayments) {
        this.restaurantPayments = restaurantPayments;
    }

    public boolean isAproved() {
        return isAproved;
    }

    public void setAproved(boolean aproved) {
        isAproved = aproved;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public Revenue getRevenue() {
        return revenue;
    }

    public void setRevenue(Revenue revenue) {
        this.revenue = revenue;
    }

    public Documentation getDocumentation() {
        return documentation;
    }

    public void setDocumentation(Documentation documentation) {
        this.documentation = documentation;
    }

    @Override
    public String toString() {
        return "Rastaurant{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", products=" + (products != null ? products.stream().map(Product::getId).collect(Collectors.toList()) : null) +
                ", openingHours=" + openingHours +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", website='" + website + '\'' +
                ", averageRating=" + averageRating +
                ", isOpen=" + isOpen +
                ", reviews=" + reviews +
                ", images=" + images +
                ", restaurantManagers=" + restaurantManagers +
                ", discount=" + discount +
                ", order=" +(order != null ? order.stream().map(Order::getId).collect(Collectors.toList()) : null) +
                ", category=" + category +
                ", restaurantPayments=" + restaurantPayments +
                ", isAproved=" + isAproved +
                ", isActive=" + isActive +
                ", revenue=" + revenue +
                ", documentation=" + documentation +
                '}';
    }
}
