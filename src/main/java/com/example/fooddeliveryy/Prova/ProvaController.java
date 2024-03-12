package com.example.fooddeliveryy.Prova;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@Controller
public class ProvaController {
    @GetMapping("/getClients")
    public String getClients() {
       return  "Hello";

    }
}
