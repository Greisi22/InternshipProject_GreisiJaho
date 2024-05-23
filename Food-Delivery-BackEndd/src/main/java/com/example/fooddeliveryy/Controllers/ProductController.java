package com.example.fooddeliveryy.Controllers;


import com.example.fooddeliveryy.Entities.Images;
import com.example.fooddeliveryy.Entities.Product;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Repositories.ImageRepository;
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
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;
    private final ProductRepository productRepository;

    private final RestaurantRepo restaurantRepo;
    private final ImageRepository imageRepository;
    private final ObjectMapper objectMapper;

    public ProductController(ProductService productService, ProductRepository productRepository, RestaurantRepo restaurantRepo, ImageRepository imageRepository, ObjectMapper objectMapper) {
        this.productService = productService;
        this.productRepository = productRepository;
        this.restaurantRepo = restaurantRepo;
        this.imageRepository = imageRepository;
        this.objectMapper = objectMapper;
    }


    @PostMapping("/create")
    public ResponseEntity<?> createProduct(@RequestParam("files") MultipartFile file, @RequestPart("product") String productJson, HttpServletRequest request,
                                           HttpServletResponse response) throws JsonProcessingException {
        System.out.println("dbbcdbcjbadjcdajcjadcbjadbojdbc");
        Product productReceived = objectMapper.readValue(productJson, Product.class);

        Rastaurant restaurant = null;

        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("restaurant-id".equals(cookie.getName())) {
                    try {
                        long id = Long.parseLong(cookie.getValue());

                        Optional<Rastaurant> optionalRastaurant = restaurantRepo.findById(id);
                        if (optionalRastaurant.isPresent()) {
                            restaurant = optionalRastaurant.get();
                        }

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
        Product finalProductReceived = productReceived;

        Images image = new Images();
        try {
            String base64Image = Base64.getEncoder().encodeToString(file.getBytes());
            image.setName(file.getOriginalFilename());
            image.setType(file.getContentType());
            image.setImageData(base64Image);
//            image.setProduct(finalProductReceived);

            Images savedImage = imageRepository.save(image);
            finalProductReceived.setImage(savedImage);

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to process image file");
        }

        Product savedProduct = productRepository.save(finalProductReceived);
        if (savedProduct == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create product");
        }

        restaurant.getProducts().add(savedProduct);
        restaurantRepo.save(restaurant);

        // Update cookies
        Cookie updatedCookie = new Cookie("restaurant-id", String.valueOf(restaurant.getId()));
        updatedCookie.setPath("/");
        updatedCookie.setHttpOnly(true);
        updatedCookie.setMaxAge(60 * 60 * 24); // 1 day, adjust as necessary
        response.addCookie(updatedCookie);

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

                if ("restaurant-id".equals(cookie.getName())) {
                    try {
                        long id = Long.parseLong(cookie.getValue());

                        Optional<Rastaurant> optionalRastaurant = restaurantRepo.findById(id);
                        if (optionalRastaurant.isPresent()) {
                            restaurant = optionalRastaurant.get();
                        }
                    } catch (Exception e) {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to parse restaurant information from cookie");
                    }
                    break;
                }
            }
        }
        assert restaurant != null;
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
