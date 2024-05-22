package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Images, Long> {

}
