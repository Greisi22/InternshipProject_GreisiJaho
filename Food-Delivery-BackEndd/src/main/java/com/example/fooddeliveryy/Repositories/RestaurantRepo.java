package com.example.fooddeliveryy.Repositories;


import com.example.fooddeliveryy.Entities.Rastaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RestaurantRepo extends JpaRepository<Rastaurant, Long> {
    Optional<Rastaurant> findById(long id);
    boolean findByName(String name);

}