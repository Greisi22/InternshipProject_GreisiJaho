package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Configuration.JWT.CookiesUtil;
import com.example.fooddeliveryy.Configuration.JWT.JwtTokenProvider;
import com.example.fooddeliveryy.DTO.RestaurantDTO;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Mapping.RestaurantMapper;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Repositories.UserRepository;
import com.example.fooddeliveryy.Services.RestaurantService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;

@RequestMapping("/restaurant")
@RestController
public class RestaurantController {

    private final RestaurantService restaurantService;
    private final RestaurantRepo restaurantRepo;
    private final RestaurantMapper restaurantMapper;
    private final UserRepository userRepository;

    private final JwtTokenProvider jwtTokenProvider;

    private final ObjectMapper objectMapper;


    @Autowired
    public RestaurantController(RestaurantService restaurantService, RestaurantMapper restaurantMapper, RestaurantRepo restaurantRepo, UserRepository userRepository, JwtTokenProvider jwtTokenProvider, ObjectMapper objectMapper) {
        this.restaurantService = restaurantService;
        this.restaurantMapper = restaurantMapper;
        this.restaurantRepo = restaurantRepo;
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.objectMapper = objectMapper;
    }


    @PostMapping("/create")
    public ResponseEntity<?> createRestaurant(@RequestParam("files") MultipartFile[] files,
                                              @RequestPart("restaurant") String restaurantJson, HttpServletRequest request, HttpServletResponse response) throws JsonProcessingException {
        try {
            Rastaurant restaurant = objectMapper.readValue(restaurantJson, Rastaurant.class);


            Rastaurant createdRestaurant = restaurantService.createRestaurant(restaurant);
            System.out.println("Created restaurant " + createdRestaurant);

            String token = CookiesUtil.getTokenFromCookies(request);
            long userId = jwtTokenProvider.getIdFromToken(token);

            Optional<User> optionalUser = userRepository.findByUserId(userId);
            if (optionalUser.isPresent()) {
                User user = optionalUser.get();
                user.setManagedRestaurant(restaurant);
                System.out.println("O user nishi " + user);
                try {
                    userRepository.save(user);
                } catch (DataIntegrityViolationException e) {
                    userRepository.update(user);
                }
            }

            String restaurantInfo;

                restaurantInfo = URLEncoder.encode(new ObjectMapper().writeValueAsString(createdRestaurant), StandardCharsets.UTF_8.toString());



            Cookie restaurantCookie = new Cookie("restaurant-info", restaurantInfo);
            restaurantCookie.setMaxAge(86400); // 1 day
            restaurantCookie.setSecure(true); // Set to true in production
            restaurantCookie.setHttpOnly(true);
            restaurantCookie.setPath("/");
            restaurantCookie.setDomain("localhost");

            response.addCookie(restaurantCookie);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdRestaurant);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Server Error!!");
        }

    }

            @GetMapping("/all")
    public ResponseEntity<List<Rastaurant>> getAllRestaurants(HttpServletRequest request) {
        System.out.println("Greisiiuuu ");
        String token = CookiesUtil.getTokenFromCookies(request);
        System.out.println("Greisiiuuu "+token);
        if (token == null) {
            return ResponseEntity.status(401).body(null); // Unauthorized
        }

        String userEmail = jwtTokenProvider.getEmailFromToken(token);
        // You now have the userEmail, and you can use it as needed.
        System.out.println("Logged in user: " + userEmail);

        List<Rastaurant> restaurants = restaurantService.getAllRestaurants();
        return ResponseEntity.ok().body(restaurants);
    }

    @GetMapping("/get/amount")
    public ResponseEntity<?> getHowManyRestaurants() {
        List<Rastaurant> restaurants = restaurantService.getAllRestaurants();
        return ResponseEntity.ok().body(restaurants.size());
    }


    @DeleteMapping("/delete/{name}")
    public ResponseEntity<?> deleteRestaurant(@PathVariable String name) {
        restaurantService.deleteRestaurantByName(name);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("/{name}")
    public ResponseEntity<?> getRestaurantByName(@PathVariable String name) {
        Optional<Rastaurant> restaurantOptional = Optional.ofNullable(restaurantRepo.findByName(name));

        if (restaurantOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.OK).body(restaurantOptional);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Restaurant not found with name: " + name);
        }
    }

    @GetMapping("/discount")
    public ResponseEntity<?> getRestaurantWithDiscount() {
        List<Rastaurant> restaurantsWithDiscount = restaurantService.getRestaurantsWithDiscount();
        List<RestaurantDTO> restaurantDTOS = restaurantMapper.mapToApprovedRestaurantDTOs(restaurantsWithDiscount);
        System.out.println("OOKKOKOK "+ restaurantDTOS.size()
        );
        System.out.println("yeyeyeyyeyey "+ restaurantsWithDiscount.size()
        );
        return ResponseEntity.ok().body(restaurantDTOS);
    }

    @GetMapping("/approvedRestaurants")
    public ResponseEntity<?> getApprovedRestaurant(HttpServletRequest request) {
        try {

            Cookie[] cookies = request.getCookies();
            System.out.println("Cookies: " + cookies[0].getValue());
            List<Rastaurant> approvedRestaurants = restaurantService.getIsAprovedRestaurants();
            List<RestaurantDTO> restaurantDTOS = restaurantMapper.mapToApprovedRestaurantDTOs(approvedRestaurants);
            System.out.println("Approved restaurants " + approvedRestaurants);
            return ResponseEntity.ok().body(restaurantDTOS);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Server Error!!");
        }
    }

    @GetMapping("/notApprovedRestaurants")
    public ResponseEntity<?> getNotApprovedRestaurant() {
        try {
            List<Rastaurant> notApprovedRestaurants = restaurantService.getNotAprovedRestaurants();
            List<RestaurantDTO> restaurantDTOS = restaurantMapper.mapToNotApprovedRestaurantDTOs(notApprovedRestaurants);
            return ResponseEntity.ok().body(restaurantDTOS);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Server Error!!");
        }
    }

    @PutMapping("/update/{name}")
    public ResponseEntity<?> updateRestaurantAttribute(@PathVariable("name") String name) {
        try {
            System.out.println("id " + name + "isApproveddd ");
            Rastaurant updatedRestaurant = restaurantService.updateRestaurantAttribute(name);
            if (updatedRestaurant != null) {
                return ResponseEntity.ok(updatedRestaurant);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Server Error!");
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateRestaurant(@RequestBody Rastaurant restaurant) {
        try {
            Rastaurant updatedRestaurant = restaurantRepo.save(restaurant);
            return ResponseEntity.ok().body(updatedRestaurant);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Server Error!");
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Rastaurant> getRestaurantByUserId(@PathVariable String userId) {
        System.out.println("UserID "+userId);
        Optional<User> userOptional = userRepository.findByUserEmail(userId);
        User user = null;
        if (userOptional.isPresent()) {
            user = userOptional.get();
        }
        System.out.println("User nishiiii  " + user);
        if (user == null || user.getManagedRestaurant() == null) {
            return ResponseEntity.ok().body(null);
        }
        Rastaurant restaurant = user.getManagedRestaurant() ;

        System.out.println("Restaurant  "+restaurant);
        return ResponseEntity.ok().body(restaurant);
    }


    //REVENUE AND REVIEW RESTAURANTS

}