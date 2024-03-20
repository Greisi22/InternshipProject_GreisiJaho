package com.example.fooddeliveryy.Controllers.LogIn;

import com.example.fooddeliveryy.DTO.UserDTO;
import com.example.fooddeliveryy.Entities.Product;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Mapping.UserMapper;
import com.example.fooddeliveryy.Services.LogIn.logInService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RequestMapping
@RestController
public class loginController {


    private final logInService logInservice;
    private final UserMapper userMapper;

    @Autowired
    public loginController(logInService logInservice, UserMapper userMapper) {
        this.logInservice = logInservice;
        this.userMapper = userMapper;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, Object> requestBody) {
        String email = (String) requestBody.get("email");
        String password = (String) requestBody.get("password");

        UserDTO userDTO = null;
        Map<String, Object> map = new HashMap<>();
        try {
            User userCredentials = logInservice.checkCredintials(email, password);
            if (userCredentials != null) {
                userDTO = userMapper.userToUserDTO(userCredentials);
            }
        } catch (Exception e) {
            System.out.println("Error: " + e);
            map.put("message", "An error has accured");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(map);
        }
        if (userDTO != null) {
            map.put("message", userDTO);
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
            if (role == null) {
                map.put("message", "The argument role is missing");
            } else if (email == null) {
                map.put("message", "The argument email is missing");
            } else {
                map.put("message", "The argument password is missing");
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(map.toString());
        }
        String message = logInservice.registerUser(email, password, role);
        if (message == null) {
            map.put("message", "Register was successful!");
            return ResponseEntity.status(HttpStatus.OK).body(map.toString());
        } else {
            map.put("message", message);
            return ResponseEntity.status(HttpStatus.IM_USED).body(map.toString());
        }

    }

    @PostMapping("/prova")
    public ResponseEntity<String> prova(@RequestBody Product user) {
        System.out.println("Userrrr: "+user);
        return null;
    }
}
