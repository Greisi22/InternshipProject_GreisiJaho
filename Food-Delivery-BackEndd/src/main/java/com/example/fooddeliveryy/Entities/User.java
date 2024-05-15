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

    @ManyToOne
    private Rastaurant managedRestaurant;

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

    public User() {

    }

    public User(long userId, String userEmail, String userPassword, UserRole userRole, Rastaurant managedRestaurant, List<Order> order, List<Message> sentMessages, List<Message> receivedMessages) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userRole = userRole;
        this.managedRestaurant = managedRestaurant;
        this.order = order;
        this.sentMessages = sentMessages;
        this.receivedMessages = receivedMessages;
    }

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

    public Rastaurant getManagedRestaurant() {
        return managedRestaurant;
    }

    public void setManagedRestaurant(Rastaurant managedRestaurant) {
        this.managedRestaurant = managedRestaurant;
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
                ", managedRestaurant=" + managedRestaurant +
                ", order=" + order +
                ", sentMessages=" + sentMessages +
                ", receivedMessages=" + receivedMessages +
                '}';
    }
}
