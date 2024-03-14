package com.example.fooddeliveryy.Controllers.LogIn;

import com.example.fooddeliveryy.Services.LogIn.logInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
public ResponseEntity<String> login(@RequestBody Map<String, Object> requestBody) {
    String email = (String) requestBody.get("email");
    String password = (String) requestBody.get("password");

        logInservice.saveInformation(email, password);

    return ResponseEntity.status(HttpStatus.OK).body("Logged in! " + email + " " + password);
}
}
