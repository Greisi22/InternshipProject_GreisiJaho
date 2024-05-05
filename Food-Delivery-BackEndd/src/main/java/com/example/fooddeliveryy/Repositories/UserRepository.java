package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.Enums.UserRole;
import com.example.fooddeliveryy.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserEmail(String email);
    Optional<User> findByUserId(long id);
    boolean existsByUserEmail(String email);
    List<User> findByUserRole(UserRole userRole);
}
