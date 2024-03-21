package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface logInRepo extends JpaRepository<User, Integer> {
    Optional<User> findByUserEmail(String email);
    boolean existsByUserEmail(String email);

    boolean findByUserRole(String role);
}
