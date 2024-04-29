package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Entities.Message;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Configuration.JWT.JwtTokenProvider;
import com.example.fooddeliveryy.Repositories.logInRepo;
import com.example.fooddeliveryy.Services.MessageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/messages")
public class MessageController {
    private final MessageService messageService;
    private final JwtTokenProvider jwtTokenProvider;

    private final logInRepo loginRepo;

    public MessageController(MessageService messageService, JwtTokenProvider jwtTokenProvider, logInRepo loginRepo) {
        this.messageService = messageService;
        this.jwtTokenProvider = jwtTokenProvider;
        this.loginRepo = loginRepo;
    }

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(@RequestParam Message message) {
        messageService.createMessage(message);
        return ResponseEntity.ok("Message sent successfully");
    }


    @PostMapping("/create")
        public ResponseEntity<Message> createMessage(@RequestBody Message message, @RequestHeader("Authorization") String token) {
        // Trim the token to remove leading/trailing whitespace
        String trimmedToken = token.trim();

        // Validate the JWT token
        if (!jwtTokenProvider.validateToken(trimmedToken)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        if (trimmedToken.startsWith("Bearer ")) {
            // Remove the "Bearer " prefix
            trimmedToken = trimmedToken.substring(7);
        }
        // Extract the email of the logged-in user from the token
        String loggedInUserEmail = jwtTokenProvider.getEmailFromToken(trimmedToken);

        // Find the sender (logged-in user) by email
        User sender = loginRepo.findByUserEmail(loggedInUserEmail).orElse(null);

        // Ensure that the sender is not null
        if (sender == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        // Set the sender
        message.setSender(sender);

        // Delegate the creation logic to the service
        Message createdMessage = messageService.createMessage(message);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdMessage);
    }



    @GetMapping("/received")
    public ResponseEntity<List<Message>> getReceivedMessages(@RequestParam Long receiverId) {
        List<Message> receivedMessages = messageService.getReceivedMessages(receiverId);
        return ResponseEntity.ok(receivedMessages);
    }

    @GetMapping("/sent")
    public ResponseEntity<List<Message>> getSentMessages(@RequestParam Long senderId) {
        List<Message> sentMessages = messageService.getSentMessages(senderId);
        return ResponseEntity.ok(sentMessages);
    }

    @DeleteMapping("/{messageId}")
    public ResponseEntity<?> deleteMessage(@PathVariable Long messageId) {
        messageService.deleteMessage(messageId);
        return ResponseEntity.ok("Message deleted successfully");
    }
}
