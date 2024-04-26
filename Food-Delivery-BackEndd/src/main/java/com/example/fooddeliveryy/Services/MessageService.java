package com.example.fooddeliveryy.Services;
import com.example.fooddeliveryy.Entities.Message;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Repositories.MessageRepo;
import com.example.fooddeliveryy.Repositories.logInRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class MessageService{
    private final MessageRepo messageRepository;
    private final logInRepo loginrepo;

    @Autowired
    public MessageService(MessageRepo messageRepository, logInRepo loginrepo) {
        this.messageRepository = messageRepository;
        this.loginrepo = loginrepo;
    }


    public Message createMessage(Message message) {
        // Set the timestamp
        message.setTimestamp(LocalDateTime.now());

        // Find the receiver by receiver id specified in the message
        User receiver = loginrepo.findById(message.getReceiver().getUserId()).orElse(null);

        // Ensure that the receiver is not null
        if (receiver == null) {
            throw new IllegalArgumentException("Invalid receiver");
        }

        // Set the receiver and content
        message.setReceiver(receiver);
        message.setContent(message.getContent());

        // Save the message
        return messageRepository.save(message);
    }

    public List<Message> getReceivedMessages(long receiverId) {
        return messageRepository.findByReceiverUserId(receiverId);
    }

    public List<Message> getSentMessages(long senderId) {
        return messageRepository.findBySenderUserId(senderId);
    }

    public void deleteMessage(long messageId) {
        messageRepository.deleteById(messageId);
    }
}