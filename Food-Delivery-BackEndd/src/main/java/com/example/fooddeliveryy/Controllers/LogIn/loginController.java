package com.example.fooddeliveryy.Controllers.LogIn;

import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Services.LogIn.logInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RequestMapping
@RestController
public class loginController {

    @Autowired
    public final logInService logInservice;

    public loginController(logInService logInservice) {
        this.logInservice = logInservice;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, Object> requestBody) {
        String email = (String) requestBody.get("email");
        String password = (String) requestBody.get("password");
        User userCredentials = null;
        Map<String, Object> map = new HashMap<>();
        try {
            userCredentials = logInservice.checkCredintials(email, password);
        } catch (Exception e) {
            System.out.println("Error: " + e);
            map.put("message", "An error has accured");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(map);
        }
        if (userCredentials != null) {
            map.put("message", userCredentials);
            return ResponseEntity.status(HttpStatus.OK).body(map);
        } else {
            map.put("message", "Invalid credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(map);
        }
    }


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Map<String, Object> requestBody) {
        String email = (String) requestBody.get("email");
        String password = (String) requestBody.get("password");
        String role = (String) requestBody.get("role");
        Map<String, String> map = new HashMap<>();

        if (role == null || email == null || password == null) {
            if(role == null){
                map.put("message", "The argument role is missing");
            } else if (email == null) {
                map.put("message", "The argument email is missing");
            }else {
                map.put("message", "The argument password is missing");
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map.toString());
        }
        String message = logInservice.registerUser(email, password, role);
        if(message == null){
            map.put("message", "Register was successful!");
            return ResponseEntity.status(HttpStatus.OK).body(map.toString());
        }else {
            map.put("message", message);
            return ResponseEntity.status(HttpStatus.IM_USED).body(map.toString());
        }

    }


}
