package com.example.fooddeliveryy.Controllers.LogIn;

import com.example.fooddeliveryy.DTO.UserDTO;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.JWT.JwtTokenProvider;
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
        System.out.println("User: "+ user);
        String message = "Register successfully";
        boolean isRegister = false;
        try{
            userRepository.save(user);
        }catch (Exception e){
            message = "Register failed";
            isRegister = true;
        }
        HttpStatus status = isRegister == true ? HttpStatus.OK : HttpStatus.IM_USED;
        return ResponseEntity.status(status).body(message);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {

        try {
            User userCredentials = logInService.checkCredintials(user);
            if (userCredentials != null) {
                String token = jwtTokenProvider.generateToken(userCredentials.getUserEmail(), userCredentials.getUserRole().name());
                UserDTO userDTO = userMapper.userToUserDTO(userCredentials);
                Map<String, Object> response = new HashMap<>();
                response.put("user", userDTO);
                response.put("token", token);
                Cookie jwtTokenCookie = new Cookie("user-id", "c2FtLnNtaXRoQGV4YW1wbGUuY29t");
                jwtTokenCookie.setMaxAge(86400);
                jwtTokenCookie.setSecure(false); //upon deployment switch to secure == true
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
