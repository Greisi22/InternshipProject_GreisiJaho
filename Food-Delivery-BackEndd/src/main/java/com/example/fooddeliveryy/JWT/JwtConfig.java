package com.example.fooddeliveryy.JWT;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.crypto.SecretKey;

@Configuration
public class JwtConfig {

    @Value("${jwt.expiration}")
    private int expiration; // Token expiration time in milliseconds

    @Bean
    public SecretKey secretKey() {
        // Generate a secure key with sufficient length
        return Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }

    public int getExpiration() {
        return expiration;
    }
}
