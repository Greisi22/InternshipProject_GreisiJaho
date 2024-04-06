package com.example.fooddeliveryy.Controllers;

import com.example.fooddeliveryy.Entities.Message;
import com.example.fooddeliveryy.Services.MessageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/messages")
public class MessageController {
    private MessageService messageservice;

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(@RequestParam Message message) {
        messageservice.createMessage(message);
        return ResponseEntity.ok("Message sent successfully");
    }

    @GetMapping("/received")
    public ResponseEntity<List<Message>> getReceivedMessages(@RequestParam Long receiverId) {
        List<Message> receivedMessages = messageservice.getReceivedMessages(receiverId);
        return ResponseEntity.ok(receivedMessages);
    }

    @GetMapping("/sent")
    public ResponseEntity<List<Message>> getSentMessages(@RequestParam Long senderId) {
        List<Message> sentMessages = messageservice.getSentMessages(senderId);
        return ResponseEntity.ok(sentMessages);
    }

    @DeleteMapping("/{messageId}")
    public ResponseEntity<?> deleteMessage(@PathVariable Long messageId) {
        messageservice.deleteMessage(messageId);
        return ResponseEntity.ok("Message deleted successfully");
    }
}
