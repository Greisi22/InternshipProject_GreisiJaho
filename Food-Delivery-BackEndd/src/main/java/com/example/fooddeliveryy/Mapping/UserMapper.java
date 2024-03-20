package com.example.fooddeliveryy.Mapping;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.fooddeliveryy.Entities.User;
import com.example.fooddeliveryy.DTO.UserDTO;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(source = "userEmail", target = "userEmail")
    @Mapping(source = "userRole", target = "userRole")
    UserDTO userToUserDTO(User user);
}
