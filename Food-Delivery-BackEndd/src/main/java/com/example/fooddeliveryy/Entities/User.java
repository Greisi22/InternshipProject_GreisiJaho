package com.example.fooddeliveryy.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long  userId;

    @Column(name = "user_email")
    private String userEmail;

    @Column(name = "user_password")
    private String userPassword;

    @Column(name = "user_role")
    private String userRole;

    @OneToMany(mappedBy = "restaurantManager")
    private List<Rastaurant> managedRestaurants;


    @OneToMany(mappedBy = "user")
    @JsonBackReference("orderBackReference")
    private List<Order> order;

    public User() {}

    public User(String userEmail, String userPassword) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }

    public User(String userEmail, String userPassword, String userRole) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userRole = userRole;
    }

    public User(long  userId, String userEmail, String userPassword, String userRole) {
        this.userId = userId;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userRole = userRole;
    }

    public long  getUserId() {
        return userId;
    }

    public void setUserId(long  userId) {
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

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public List<Rastaurant> getManagedRestaurants() {
        return managedRestaurants;
    }

    public void setManagedRestaurants(List<Rastaurant> managedRestaurants) {
        this.managedRestaurants = managedRestaurants;
    }


    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", userEmail='" + userEmail + '\'' +
                ", userPassword='" + userPassword + '\'' +
                ", userRole='" + userRole + '\'' +
                ", managedRestaurants=" + managedRestaurants +
                '}';
    }
}
