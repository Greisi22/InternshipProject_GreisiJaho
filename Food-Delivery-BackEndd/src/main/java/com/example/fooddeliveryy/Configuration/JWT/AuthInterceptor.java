package com.example.fooddeliveryy.Configuration.JWT;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class AuthInterceptor implements HandlerInterceptor {

    private final JwtTokenProvider jwtTokenProvider;

    @Autowired
    public AuthInterceptor(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // Get the token from the request
        String token = getTokenFromRequest(request);

        // Check if token is valid
        if (token != null && jwtTokenProvider.validateToken(token)) {
            return true; // Allow the request to proceed
        } else {
            // Token is invalid or missing, return unauthorized response
            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized access");
            return false;
        }
    }

    private String getTokenFromRequest(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7); // Extract the token part after "Bearer "
        }
        return null;
    }

}
