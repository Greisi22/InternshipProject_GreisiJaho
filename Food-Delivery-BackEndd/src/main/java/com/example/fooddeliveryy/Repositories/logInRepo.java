package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface logInRepo extends JpaRepository<User, Long> {
    Optional<User> findByUserEmail(String userEmail);
    Optional<User> findByUserId(long id);
    boolean existsByUserEmail(String email);

}
