package com.example.fooddeliveryy.Controllers.LogIn;

import com.example.fooddeliveryy.DTO.UserDTO;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Configuration.JWT.JwtTokenProvider;
import com.example.fooddeliveryy.Mapping.UserMapper;
import com.example.fooddeliveryy.Repositories.UserRepository;
import com.example.fooddeliveryy.Services.LogIn.LogInService;
import jakarta.servlet.http.Cookie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class LoginController {


    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final JwtTokenProvider jwtTokenProvider;
    private final LogInService logInService;

    @Autowired
    public LoginController(UserRepository userRepository, UserMapper userMapper, JwtTokenProvider jwtTokenProvider, LogInService logInService) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.jwtTokenProvider = jwtTokenProvider;
        this.logInService = logInService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        String userEmail = user.getUserEmail();
        Optional<User> existingUser = userRepository.findByUserEmail(userEmail);
        if (existingUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with email " + userEmail + " already exists");
        }
        try {
            userRepository.save(user);
            return ResponseEntity.status(HttpStatus.OK).body("Register successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Register failed");
        }
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        System.out.println("User: " + user);
        try {
            User userCredentials = logInService.checkCredintials(user);
            if (userCredentials != null) {

                UserDTO userDTO = userMapper.userToUserDTO(userCredentials);
                Map<String, Object> response = new HashMap<>();
                response.put("user", userDTO);


                String token = jwtTokenProvider.generateToken(userCredentials.getUserEmail(), userCredentials.getUserRole().name());
                Cookie jwtTokenCookie = new Cookie("user-id", token);
                jwtTokenCookie.setMaxAge(86400);
                jwtTokenCookie.setSecure(true); //upon deployment switch to secure == true
                jwtTokenCookie.setHttpOnly(true);
                jwtTokenCookie.setPath("/");
                jwtTokenCookie.setDomain("localhost");

                ResponseEntity.BodyBuilder builder = ResponseEntity.ok();
                builder.header("Set-Cookie", jwtTokenCookie.getName() + "=" + jwtTokenCookie.getValue());

                return builder.body(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } catch (Exception e) {
            System.out.println("Error: "+e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }

}
