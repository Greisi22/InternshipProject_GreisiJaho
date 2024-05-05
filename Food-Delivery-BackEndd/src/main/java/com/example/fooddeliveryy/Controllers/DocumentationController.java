package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Entities.Documentation;
import com.example.fooddeliveryy.Entities.Rastaurant;
import com.example.fooddeliveryy.Services.DocumentationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/documentation")
public class DocumentationController {

    @Autowired
    private DocumentationService documentationService;

    @PostMapping("/create")
    public ResponseEntity<?> createDocumentation(@RequestBody Documentation documentation) {
        try{
            Documentation createdDocumentation = documentationService.createDocumentation(documentation);
            return new ResponseEntity<>(createdDocumentation, HttpStatus.CREATED);
        }catch (Exception e) {
            return ResponseEntity.badRequest().body("Server Error!");
        }

    }

    @GetMapping("/getDocumentation")
    public ResponseEntity<?> getDocumentatioById(@PathVariable long id) {
        try{
            Optional<Documentation> documentation = documentationService.getDocumentationById(id);
            return ResponseEntity.ok().body(documentation);
        }catch(Exception e)
        {
            return ResponseEntity.badRequest().body("Server Error!");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteDocumentation(@PathVariable long id) {
        try{
        documentationService.deleteDocumentation(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }catch (Exception e) {
        return ResponseEntity.badRequest().body("Server Error!");
    }
    }
}