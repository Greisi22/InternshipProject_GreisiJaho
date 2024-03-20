package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Entities.Menu;
import com.example.fooddeliveryy.Services.MenuService;
import com.example.fooddeliveryy.Services.RestaurantService;
import jakarta.transaction.Transactional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menus")
public class MenuController {


    private final MenuService menuService;
    private final RestaurantService restaurantService;

    public MenuController(MenuService menuService, RestaurantService restaurantService) {
        this.menuService = menuService;
        this.restaurantService = restaurantService;
    }


    @PostMapping("/create")
    @Transactional
    public ResponseEntity<Menu> createMenu(@RequestBody Menu menuReciver) {
        Menu menu = menuService.createMenu(menuReciver);
        return ResponseEntity.status(HttpStatus.CREATED).body(menu);
    }



    @GetMapping("/get/{id}")
    public ResponseEntity<Menu> getMenuById(@PathVariable Long id) {
        Menu menu = menuService.getMenuById(id);
        return ResponseEntity.ok().body(menu);
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Menu>> getAllMenus() {
        List<Menu> menus = menuService.getAllMenus();
        return ResponseEntity.ok().body(menus);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Menu> updateMenu(@PathVariable Long id, @RequestBody Menu menu) {
        Menu updatedMenu = menuService.updateMenu(id, menu);
        return ResponseEntity.ok().body(updatedMenu);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteMenu(@PathVariable Long id) {
        menuService.deleteMenu(id);
        return ResponseEntity.noContent().build();
    }
}
