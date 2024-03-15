package com.example.fooddeliveryy.Services.LogIn;

import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Repositories.logInRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class logInService {

    private final logInRepo loginRepo;

    @Autowired
    public logInService(logInRepo loginRepo) {
        this.loginRepo = loginRepo;
    }


    public User checkCredintials(String email, String password) {
        Optional<User> optionalUser = loginRepo.findByUserEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if(user.getUserPassword().equals(password)) {
                return user;
            } else {
                return null;
            }

        }
    return null;
    }



    public void registerUser(String email, String password, String role)
    {
        User user = new User(email, password, role);

        System.out.println("User id is: " + user.getUserId());
        loginRepo.save(user);

    }
}
