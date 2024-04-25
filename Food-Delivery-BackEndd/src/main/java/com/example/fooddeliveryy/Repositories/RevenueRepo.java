package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.Message;
import com.example.fooddeliveryy.Entities.Revenue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RevenueRepo extends JpaRepository<Revenue, Long> {
}
