//package com.example.fooddeliveryy.Entities;
//
//import jakarta.persistence.*;
//
//@Entity
//public class User {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int UserId;
//
//    private String userEmail;
//    private String userPassword;
//    private String userRole;
//
//    public User(){
//
//    }
//
//    public User(String userEmail, String userPassword) {
//        userEmail = userEmail;
//        this.userPassword = userPassword;
//    }
//
//
//    public User(String userEmail, String userPassword, String userRole) {
//        this.userEmail = userEmail;
//        this.userPassword = userPassword;
//        this.userRole = userRole;
//    }
//
//    public User(int userId, String userEmail, String userPassword, String userRole) {
//        UserId = userId;
//        userEmail = userEmail;
//        this.userPassword = userPassword;
//        this.userRole = userRole;
//    }
//
//    public int getUserId() {
//        return UserId;
//    }
//
//    public void setUserId(int userId) {
//        UserId = userId;
//    }
//
//    public String getUserEmail() {
//        return userEmail;
//    }
//
//    public void setUserEmail(String userEmail) {
//        userEmail = userEmail;
//    }
//
//    public String getUserPassword() {
//        return userPassword;
//    }
//
//    public void setUserPassword(String userPassword) {
//        this.userPassword = userPassword;
//    }
//
//    public String getUserRole() {
//        return userRole;
//    }
//
//    public void setUserRole(String userRole) {
//        this.userRole = userRole;
//    }
//
//    @Override
//    public String toString() {
//        return "User{" +
//                "UserId=" + UserId +
//                ", UserEmail='" + userEmail + '\'' +
//                ", userPassword='" + userPassword + '\'' +
//                ", userRole='" + userRole + '\'' +
//                '}';
//    }
//}
