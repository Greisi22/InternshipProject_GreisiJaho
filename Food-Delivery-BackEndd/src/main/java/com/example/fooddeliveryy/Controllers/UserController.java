package com.example.fooddeliveryy.Controllers;
import com.example.fooddeliveryy.Entities.Enums.UserRole;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/users")
@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<?> getAllUsers() {
        try{
            return  ResponseEntity.status(HttpStatus.OK).body(userService.getAllUsers());
        }catch (Exception e)
        {
            System.out.println("Exception "+ e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong!!!");

        }

    }

    @GetMapping("/role/{role}")
    public ResponseEntity<?> getUsersByRole(@PathVariable UserRole role) {
        try{
            return  ResponseEntity.status(HttpStatus.OK).body(userService.getUsersByRole(role));
        }catch(Exception e)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong!!!");
        }

    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable long userId) {
        try {
            userService.deleteUser(userId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong!!!");
        }
        return null;
    }
}
