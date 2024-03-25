package com.example.fooddeliveryy.Repositories;


import com.example.fooddeliveryy.Entities.Rastaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepo extends JpaRepository<Rastaurant, Long> {
    Rastaurant findByName(String name);
//    List<Rastaurant> findByDiscountGreaterThan(int discount);

}