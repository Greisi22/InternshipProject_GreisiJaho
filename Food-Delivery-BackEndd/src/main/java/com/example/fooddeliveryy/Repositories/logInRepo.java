package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface logInRepo extends JpaRepository<User, Integer> {
}
