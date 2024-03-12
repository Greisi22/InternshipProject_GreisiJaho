package com.example.fooddeliveryy.Prova;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProvaRepository extends JpaRepository<Prova, Long> {

@Query("Select * from ")
    List<Prova> findByName();


}
