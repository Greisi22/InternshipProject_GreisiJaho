package com.example.fooddeliveryy.Repositories;


import com.example.fooddeliveryy.Entities.Rastaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepo extends JpaRepository<Rastaurant, Long> {

    @Modifying
    @Query("DELETE FROM Rastaurant r WHERE r.name = :name")
    void deleteByName(String name);

    Rastaurant findByName(String name);



}