package com.example.fooddeliveryy.Repositories;

import com.example.fooddeliveryy.Entities.Menu;
import com.example.fooddeliveryy.Entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepo extends JpaRepository<Message, Long> {
    List<Message> findBySenderUserId(long userId);
    List<Message> findByReceiverUserId(long userId);

}
