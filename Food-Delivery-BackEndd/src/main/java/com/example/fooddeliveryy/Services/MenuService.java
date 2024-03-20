package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Menu;
import com.example.fooddeliveryy.Entities.Product;
import com.example.fooddeliveryy.Repositories.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MenuService {
    private final MenuRepository menuRepository;
    private final ProductService productService; // Assuming you have a ProductService

    @Autowired
    public MenuService(MenuRepository menuRepository, ProductService productService) {
        this.menuRepository = menuRepository;
        this.productService = productService;
    }

    public Menu createMenu(Menu menu) {
        List<Product> managedProducts = new ArrayList<>();
        for (Product product : menu.getProducts()) {
            Product managedProduct = productService.getProductById(product.getId());
            if (managedProduct == null) {
                 throw new IllegalArgumentException("Product not found with ID: " + product.getId());
            } else {
                managedProducts.add(managedProduct);
            }
        }
        menu.setProducts(managedProducts);

        return menuRepository.save(menu);
    }

    public Menu getMenuById(Long id) {
        Optional<Menu> menuOptional = menuRepository.findById(id);
        return menuOptional.orElse(null);
    }

    public List<Menu> getAllMenus() {
        return menuRepository.findAll();
    }

    public Menu updateMenu(Long id, Menu menu) {
        if (menuRepository.existsById(id)) {
            menu.setId(id);
            return menuRepository.save(menu);
        } else {
            return null;
        }
    }

    public void deleteMenu(Long id) {
        menuRepository.deleteById(id);
    }
}
