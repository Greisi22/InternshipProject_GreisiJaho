package com.example.fooddeliveryy.Controllers.LogIn;

import com.example.fooddeliveryy.Configuration.JWT.JwtTokenProvider;
import com.example.fooddeliveryy.DTO.UserDTO;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Mapping.UserMapper;
import com.example.fooddeliveryy.Repositories.UserRepository;
import com.example.fooddeliveryy.Services.LogIn.LogInService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
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
    public ResponseEntity<?> register(HttpServletRequest request,  @RequestBody User user) {
        String userEmail = user.getUserEmail();
        System.out.println("Managed restaurant "+ user);
//        Cookie [] cookies = request.getCookies();
//        System.out.println(cookies);
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
    public ResponseEntity<?> login(@RequestBody User user, HttpServletResponse response) {
        try {
            User userCredentials = logInService.checkCredintials(user);
            System.out.println("USER CREDINTIALS "+userCredentials);
            if (userCredentials != null) {
                UserDTO userDTO = userMapper.userToUserDTO(userCredentials);
                Map<String, Object> responseBody = new HashMap<>();
                responseBody.put("user", userDTO);

                String token = jwtTokenProvider.generateToken(userCredentials.getUserEmail(), userCredentials.getUserId());
                Cookie jwtTokenCookie = new Cookie("user-id", token);
                jwtTokenCookie.setMaxAge(86400);
                jwtTokenCookie.setSecure(true); // Set to true in production
                jwtTokenCookie.setHttpOnly(true);
                jwtTokenCookie.setPath("/");
                jwtTokenCookie.setDomain("localhost");

                response.addCookie(jwtTokenCookie);
                responseBody.put("token", token);

                return ResponseEntity.ok(responseBody);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } catch (Exception e) {
            System.out.println("EEEE "+e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");

        }
    }


    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        System.out.println(Arrays.toString(cookies));
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("user-id".equals(cookie.getName())) {
                    String token = cookie.getValue();
                    // Use the token to fetch user profile information
                    // Example: decode the token and retrieve user details
                    String userEmail = jwtTokenProvider.getEmailFromToken(token);
                    Optional<User> user = userRepository.findByUserEmail(userEmail);
                    if (user.isPresent()) {
                        UserDTO userDTO = userMapper.userToUserDTO(user.get());
                        return ResponseEntity.ok(userDTO);
                    }
                }
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not authenticated");
    }


}
