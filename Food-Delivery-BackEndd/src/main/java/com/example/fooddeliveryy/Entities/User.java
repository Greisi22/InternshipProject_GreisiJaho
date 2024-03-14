package com.example.fooddeliveryy.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "User")
public class User {
    @Id
    private int UserId;

    private String UserEmail;
    private String userPassword;
    private String userRole;


    public User(String userEmail, String userPassword) {
        UserEmail = userEmail;
        this.userPassword = userPassword;
    }

    public User() {

    }
}
