package com.example.fooddeliveryy.Services.LogIn;

import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LogInService {

    private final UserRepository userRepository;

    @Autowired
    public LogInService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User checkCredintials(User useri) {
        String email = useri .getUserEmail();
        String password = useri.getUserPassword();
        System.out.println("Email: "+ email);
        Optional<User> optionalUser = userRepository.findByUserEmail(email);
        System.out.println("User: " + optionalUser);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (user.getUserPassword().equals(password)) {
                return user;
            } else {
                return null;
            }
        }
        return null;
    }




}