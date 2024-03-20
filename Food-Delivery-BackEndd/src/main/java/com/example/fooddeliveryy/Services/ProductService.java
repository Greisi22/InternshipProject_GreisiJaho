package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Product;
import com.example.fooddeliveryy.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public Product getProductById(long productId) {
        return productRepository.findById(productId).orElse(null);
    }

    public Product updateProduct(long productId, Product updatedProduct) {
        Product existingProduct = getProductById(productId);
        if (existingProduct != null) {
            existingProduct.setName(updatedProduct.getName());
            existingProduct.setDescription(updatedProduct.getDescription());
            existingProduct.setPrice(updatedProduct.getPrice());
            existingProduct.setIngredients(updatedProduct.getIngredients());
            existingProduct.setCategory(updatedProduct.getCategory());
            return productRepository.save(existingProduct);
        }
        return null;
    }

    public boolean deleteProduct(long productId) {
        Product existingProduct = getProductById(productId);
        if (existingProduct != null) {
            productRepository.delete(existingProduct);
            return true;
        }
        return false;
    }
}
