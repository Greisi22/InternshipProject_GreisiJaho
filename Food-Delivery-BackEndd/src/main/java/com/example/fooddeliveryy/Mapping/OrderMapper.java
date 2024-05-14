package com.example.fooddeliveryy.Mapping;

import com.example.fooddeliveryy.DTO.OrderDTO;
import com.example.fooddeliveryy.Entities.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    @Mapping(source = "restaurant.id", target = "restaurantId")
    @Mapping(source = "user.userId", target = "userId")
    @Mapping(source= "user.userEmail", target = "userEmail")
    @Mapping(source = "products", target = "productIds")
    OrderDTO orderToOrderDTO(Order order);

    List<OrderDTO> ordersToOrderDTOs(List<Order> orders);


}
