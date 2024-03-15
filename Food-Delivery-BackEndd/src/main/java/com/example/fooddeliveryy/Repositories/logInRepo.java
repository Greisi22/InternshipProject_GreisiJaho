package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface logInRepo extends JpaRepository<User, Integer> {
    @Query("SELECT u FROM User u WHERE u.UserEmail = :email")
    Optional<User> findByUserEmail(@Param("email") String email);
}
