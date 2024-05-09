package com.example.fooddeliveryy.Configuration.WebSocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/gs-guide-websocket/**").allowedOrigins("http://localhost:3000");
        registry.addMapping("/gs-guide-websocket/**").allowedOrigins("http://127.0.0.1:3001");
    }
}