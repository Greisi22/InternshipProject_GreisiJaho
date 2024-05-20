package com.example.fooddeliveryy.Controllers;


import com.example.fooddeliveryy.Entities.Product;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Repositories.ProductRepository;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Services.ProductService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;
    private final ProductRepository productRepository;

    private final RestaurantRepo restaurantRepo;

    public ProductController(ProductService productService, ProductRepository productRepository, RestaurantRepo restaurantRepo) {
        this.productService = productService;
        this.productRepository = productRepository;
        this.restaurantRepo = restaurantRepo;
    }


    @PostMapping("/create")
    public ResponseEntity<?> createProduct(@RequestBody Product productReceived, HttpServletRequest request, HttpServletResponse response) {
        System.out.println("Produkti eshte ky: " + productReceived);

        Rastaurant restaurant = null;
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("restaurant-info".equals(cookie.getName())) {
                    try {
                        String restaurantJson = URLDecoder.decode(cookie.getValue(), StandardCharsets.UTF_8.toString());
                        restaurant = new ObjectMapper().readValue(restaurantJson, Rastaurant.class);
                    } catch (Exception e) {
                        e.printStackTrace();
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to parse restaurant information from cookie");
                    }
                    break;
                }
            }
        }

        if (restaurant == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No restaurant information found in cookies");
        }

        productReceived = productService.saveProduct(productReceived);
        if (productReceived == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create product");
        }
        restaurant.getProducts().add(productReceived);
        restaurantRepo.save(restaurant);

        //Update cookies
        try {
            Cookie updatedCookie = new Cookie("restaurant-info", URLEncoder.encode(new ObjectMapper().writeValueAsString(restaurant), StandardCharsets.UTF_8.toString()));
            updatedCookie.setPath("/");
            updatedCookie.setHttpOnly(true);
            updatedCookie.setMaxAge(60 * 60 * 24); // 1 day, adjust as necessary
            response.addCookie(updatedCookie);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update restaurant information in cookie");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }


        return ResponseEntity.ok(restaurant);
    }


    @PostMapping("/createprodcut")
    public ResponseEntity<?> createProduct1(@RequestBody Product productReceived) {
        return ResponseEntity.ok(productRepository.save(productReceived));
    }

    @GetMapping("/getProductById/{productId}")
    public ResponseEntity<?> getProduct(@PathVariable long productId) {
        Product product = productService.getProductById(productId);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/get/amount")
    public ResponseEntity<?> getAmount() {
        List<Product> products = productRepository.findAll();
        if (products == null) {
            return ResponseEntity.notFound().build();
        }
        int amont = 0;
        for (Product prodoct : products) {
            amont += prodoct.getAmount();
        }

        return ResponseEntity.ok(amont);
    }


    @GetMapping("/get/all")
    public ResponseEntity<?> getAllProduct(HttpServletRequest request) {

        Rastaurant restaurant = null;
        Cookie[] cookies = request.getCookies();

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                System.out.println("Cookie: " + cookie);
                if ("restaurant-info".equals(cookie.getName())) {
                    try {
                        String restaurantJson = URLDecoder.decode(cookie.getValue(), StandardCharsets.UTF_8.toString());
                        restaurant = new ObjectMapper().readValue(restaurantJson, Rastaurant.class);
                        System.out.println("Restaurant from cookie: " + restaurant);
                    } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to parse restaurant information from cookie");
                    }
                    break;
                }
            }
        }


        if (restaurant.getProducts() != null) {
            return ResponseEntity.ok(restaurant.getProducts());
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/update")
    public ResponseEntity<?> updateProduct1(@RequestBody Product productReceived) {
//        Product product = productService.updateProduct(productReceived);
        Product product = productRepository.save(productReceived);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/update/{productId}")
    public ResponseEntity<?> updateProduct(@PathVariable long productId, @RequestBody Product productReceived) {
        Product product = productService.updateProduct(productId, productReceived);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable long productId) {
        boolean deleted = productService.deleteProduct(productId);
        if (deleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
