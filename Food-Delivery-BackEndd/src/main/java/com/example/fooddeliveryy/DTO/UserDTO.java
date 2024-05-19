package com.example.fooddeliveryy.DTO;

import com.example.fooddeliveryy.Entities.Enums.UserRole;
import com.example.fooddeliveryy.Entities.Rastaurant;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserDTO {


    private String userEmail;
    private UserRole userRole;
    private Rastaurant restaurant;


    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    public Rastaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Rastaurant restaurant) {
        this.restaurant = restaurant;
    }
}
