package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Configuration.JWT.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;

public class UserService {
    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public UserService(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
        User.setJwtTokenProvider(jwtTokenProvider);
    }
}
