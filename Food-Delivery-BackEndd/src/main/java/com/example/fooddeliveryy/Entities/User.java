package com.example.fooddeliveryy.Entities;


import com.example.fooddeliveryy.Entities.Enums.UserRole;
import com.example.fooddeliveryy.Configuration.JWT.JwtTokenProvider;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "user")
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long userId;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "user_password")
    private String userPassword;

    @Enumerated(EnumType.STRING) // Enumerated type for user role
    @Column(name = "user_role")
    private UserRole userRole;

    @OneToMany(mappedBy = "restaurantManager")
    @JsonBackReference("userBackReference")
    private List<Rastaurant> managedRestaurants;

    @OneToMany(mappedBy = "user")
    @JsonBackReference("orderBackReference")
    private List<Order> order;

    @OneToMany(mappedBy = "sender")
    @JsonBackReference("SenderMessages")
    private List<Message> sentMessages;

    @OneToMany(mappedBy = "receiver")
    @JsonBackReference("ReceiverMessages")
    private List<Message> receivedMessages;

    // Getters and setters
    // Constructor

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    public List<Rastaurant> getManagedRestaurants() {
        return managedRestaurants;
    }

    public void setManagedRestaurants(List<Rastaurant> managedRestaurants) {
        this.managedRestaurants = managedRestaurants;
    }

    public List<Order> getOrder() {
        return order;
    }

    public void setOrder(List<Order> order) {
        this.order = order;
    }

    public List<Message> getSentMessages() {
        return sentMessages;
    }

    public void setSentMessages(List<Message> sentMessages) {
        this.sentMessages = sentMessages;
    }

    public List<Message> getReceivedMessages() {
        return receivedMessages;
    }

    public void setReceivedMessages(List<Message> receivedMessages) {
        this.receivedMessages = receivedMessages;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userEmail='" + userEmail + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userRole=" + userRole +
                ", managedRestaurants=" + managedRestaurants +
                '}';
    }

    // JwtTokenProvider field and methods

    private static JwtTokenProvider jwtTokenProvider;

    // Setter for JwtTokenProvider
    public static void setJwtTokenProvider(JwtTokenProvider provider) {
        jwtTokenProvider = provider;
    }

    // Method to generate JWT token
    public String generateJwtToken() {
        return jwtTokenProvider.generateToken(userEmail, userRole.name()); // Passing userRole as a string
    }

    // Method to validate JWT token
    public static boolean validateJwtToken(String token) {
        return jwtTokenProvider.validateToken(token);
    }

    // Method to get user email from JWT token
    public String getUserEmailFromJwtToken(String token) {
        return jwtTokenProvider.getEmailFromToken(token);
    }
}
