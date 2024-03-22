package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepo extends JpaRepository<Order, Long> {
    // Add custom query methods if needed
}
