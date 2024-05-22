package com.example.fooddeliveryy.Mapping;

import com.example.fooddeliveryy.DTO.RestaurantDTO;
import com.example.fooddeliveryy.Entities.Rastaurant;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {

    @Mapping(source = "name", target = "name")
//    @Mapping(source = "images", target = "images")
    @Mapping(source = "discount", target = "discount")
    @Mapping(source = "category", target = "category")
    @Mapping(source = "products", target = "products")

    @Named("approvedRestaurant")
    RestaurantDTO mapToApprovedRestaurantDTO(Rastaurant restaurant);

    @Named("notApprovedRestaurant")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "discount", target = "discount")
    @Mapping(target = "category", ignore = true)
    @Mapping(source = "products", target = "products")
    RestaurantDTO mapToNotApprovedRestaurantDTO(Rastaurant restaurant);

    default List<RestaurantDTO> mapToApprovedRestaurantDTOs(List<Rastaurant> restaurants) {
        return restaurants.stream()
                .filter(Rastaurant::isAproved)
                .map(this::mapToApprovedRestaurantDTO)
                .collect(Collectors.toList());
    }

    default List<RestaurantDTO> mapToNotApprovedRestaurantDTOs(List<Rastaurant> restaurants) {
        return restaurants.stream()
                .filter(restaurant -> !restaurant.isAproved())
                .map(this::mapToNotApprovedRestaurantDTO)
                .collect(Collectors.toList());
    }
}
