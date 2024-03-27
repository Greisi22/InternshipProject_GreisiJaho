package com.example.fooddeliveryy.Mapping;

import com.example.fooddeliveryy.DTO.RestaurantDTO;
import com.example.fooddeliveryy.Entities.Rastaurant;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {

    @Mapping(source = "name", target = "name")
    @Mapping(source = "images", target = "images")
    @Mapping(source = "discount", target = "discount")
    @Mapping(source = "category", target = "category")
    RestaurantDTO restaurantToRestaurantDTO(Rastaurant restaurant);
    List<RestaurantDTO> restaurantsToRestaurantDTOs(List<Rastaurant> restaurants);
}
