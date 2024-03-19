//package com.example.fooddeliveryy.Controllers;
//
//import com.example.fooddeliveryy.Entities.Menu;
//import com.example.fooddeliveryy.Entities.Product;
//import com.example.fooddeliveryy.Entities.Rastaurant;
//import com.example.fooddeliveryy.Services.MenuService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/menus")
//public class MenuController {
//
//
//    private final MenuService menuService;
//
//
//    private final RestaurantService restaurantService;
//
//    @Autowired
//    public MenuController(RestaurantService restaurantService) {this.restaurantService = restaurantService;}
//
//    @Autowired
//    public MenuController(MenuService menuService) {
//        this.menuService = menuService;
//    }
//
//    @PostMapping("/create")
//    public ResponseEntity<Menu> createMenu(@RequestBody Map<String, Object> requestBody) {
//        String name = (String) requestBody.get("name");
//        List<Product> products = null;
//        String description = (String) requestBody.get("description");
//        Rastaurant restaurant =  restaurantService.getRestaurantById((Long) requestBody.get("restuarantId"));
//        Menu menu = new Menu(restaurant, name, products, description);
//        Menu createdMenu = menuService.createMenu(menu);
//        return ResponseEntity.status(HttpStatus.CREATED).body(createdMenu);
//    }
//
//    @GetMapping("/get/{id}")
//    public ResponseEntity<Menu> getMenuById(@PathVariable Long id) {
//        Menu menu = menuService.getMenuById(id);
//        return ResponseEntity.ok().body(menu);
//    }
//
//    @GetMapping("/get/all")
//    public ResponseEntity<List<Menu>> getAllMenus() {
//        List<Menu> menus = menuService.getAllMenus();
//        return ResponseEntity.ok().body(menus);
//    }
//
//    @PutMapping("/update/{id}")
//    public ResponseEntity<Menu> updateMenu(@PathVariable Long id, @RequestBody Menu menu) {
//        Menu updatedMenu = menuService.updateMenu(id, menu);
//        return ResponseEntity.ok().body(updatedMenu);
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<?> deleteMenu(@PathVariable Long id) {
//        menuService.deleteMenu(id);
//        return ResponseEntity.noContent().build();
//    }
//}
