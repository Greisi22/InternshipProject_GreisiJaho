package com.example.fooddeliveryy.Mapping;
import com.example.fooddeliveryy.DTO.OrderDTO;
import com.example.fooddeliveryy.Entities.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    @Mapping(source = "restaurant.id", target = "restaurantId")
    @Mapping(source = "user.userId", target = "userId")
    @Mapping(source = "user.userEmail", target = "userEmail")
    @Mapping(source = "products", target = "products")
    OrderDTO orderToOrderDTO(Order order);

    default List<OrderDTO> ordersToOrderDTOs(List<Order> orders) {
        return orders.stream().map(this::orderToOrderDTO).collect(Collectors.toList());
    }
}
