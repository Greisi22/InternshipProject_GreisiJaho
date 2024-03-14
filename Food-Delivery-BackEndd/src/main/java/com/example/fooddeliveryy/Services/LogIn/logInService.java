package com.example.fooddeliveryy.Services.LogIn;

import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Repositories.logInRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class logInService {

    private final logInRepo loginRepo;

    @Autowired
    public logInService(logInRepo loginRepo) {
        this.loginRepo = loginRepo;
    }

    public void saveInformation(String email, String password)
    {

      User user = new User(email, password);
      loginRepo.save(user);
    }
}
