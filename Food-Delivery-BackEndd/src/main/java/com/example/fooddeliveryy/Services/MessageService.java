package com.example.fooddeliveryy.Services;
import com.example.fooddeliveryy.Entities.Message;
import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.Repositories.MessageRepo;
import com.example.fooddeliveryy.Repositories.logInRepo;

import java.time.LocalDateTime;
import java.util.List;

public class MessageService{
    private final MessageRepo messageRepository;
    private final logInRepo loginrepo;

    public MessageService(MessageRepo messageRepository, logInRepo loginrepo) {
        this.messageRepository = messageRepository;
        this.loginrepo = loginrepo;
    }

    public Message createMessage(Message message) {
        User sender = loginrepo.findById(message.getSender().getUserId()).orElse(null);
        User receiver = loginrepo.findById(message.getReceiver().getUserId()).orElse(null);

        if (sender == null || receiver == null) {
            throw new IllegalArgumentException("Invalid sender or receiver");
        }

        message.setSender(sender);
        message.setReceiver(receiver);
        message.setContent(message.getContent());
        message.setTimestamp(LocalDateTime.now());

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