package com.example.fooddeliveryy.Services;

import com.example.fooddeliveryy.Entities.Enums.UserRole;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Configuration.JWT.JwtTokenProvider;
import com.example.fooddeliveryy.Repositories.RestaurantRepo;
import com.example.fooddeliveryy.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService( UserRepository userRepository) {
        this.userRepository = userRepository;

    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getUsersByRole(UserRole userRole) {
        return userRepository.findByUserRole(userRole);
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(long userId) {
            userRepository.deleteById(userId);
    }
}
