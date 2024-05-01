package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Configuration.JWT.JwtTokenProvider;
import com.example.fooddeliveryy.Repositories.RevenueRepo;
import com.example.fooddeliveryy.Services.RevenueService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/revenue")
@RestController
public class RevenueController {

    private final RevenueService revenueService;
    private final RevenueRepo revenueRepo;

    private final JwtTokenProvider jwtTokenProvider;

    public RevenueController(RevenueService revenueService, RevenueRepo revenueRepo, JwtTokenProvider jwtTokenProvider) {
        this.revenueService = revenueService;
        this.revenueRepo = revenueRepo;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @GetMapping("/getAllRevenues")
    public ResponseEntity<?> getAllRevies(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(revenueRepo.findAll());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Server Error !!!");
        }
    }

    @GetMapping("/getRevenuByID/{id}")
    public ResponseEntity<?> getRevenuByID(@PathVariable("id") long id){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(revenueRepo.findById(id));
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Server Error !!!");
        }
    }

}
