package com.example.fooddeliveryy.Controllers;


import com.example.fooddeliveryy.Entities.Product;
import com.example.fooddeliveryy.Repositories.ProductRepository;
import com.example.fooddeliveryy.Services.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductService productService;
    private final ProductRepository productRepository;

    public ProductController(ProductService productService, ProductRepository productRepository) {
        this.productService = productService;
        this.productRepository = productRepository;
    }


    @PostMapping("/create")
    public ResponseEntity<?> createProduct(@RequestBody Product productReceived) {
        Product product = productService.saveProduct(productReceived);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create product");
        }
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
        for(Product prodoct: products){
            amont += prodoct.getAmount();
        }

        return ResponseEntity.ok(amont);
    }

    @GetMapping("/get/all")
    public ResponseEntity<?> getAllProduct(@PathVariable long productId) {
        List<Product> product = productService.getAllProducts();
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
