package com.example.fooddeliveryy.Mapping;

import com.example.fooddeliveryy.DTO.OrderDTO;
import com.example.fooddeliveryy.Entities.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    @Mapping(source = "restaurant.id", target = "restaurantId")
    @Mapping(source = "user.userId", target = "userId") // Note the change here to access userId from the User entity
    @Mapping(source = "products", target = "productIds") // This mapping is not needed as the names are the same
    OrderDTO orderToOrderDTO(Order order);

    List<OrderDTO> ordersToOrderDTOs(List<Order> orders);


}
