package com.example.fooddeliveryy.Controllers.LogIn;

import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Services.LogIn.logInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

        User userCredentials = logInservice.checkCredintials(email, password);
        if (userCredentials != null) {
            return ResponseEntity.status(HttpStatus.OK).body(userCredentials);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }


    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Map<String, Object> requestBody) {
        String email = (String) requestBody.get("email");
        String password = (String) requestBody.get("password");
        String role = (String) requestBody.get("role");

        if (role == null || email == null || password == null) {
            return ResponseEntity.status(HttpStatus.OK).body("One of the arguments is missing!");
        }


        logInservice.registerUser(email, password, role);

        return ResponseEntity.status(HttpStatus.OK).body("You are registered!");
    }


}
