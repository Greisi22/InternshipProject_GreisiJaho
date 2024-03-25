package com.example.fooddeliveryy.Mapping;

import com.example.fooddeliveryy.DTO.ReviewDTO;
import com.example.fooddeliveryy.Entities.Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    @Mapping(source = "reviewText", target = "reviewText")
    @Mapping(source = "rating", target = "rating")
    ReviewDTO userToUserDTO(Review review);
    List<ReviewDTO> reviewsToReviewDTOs(List<Review> reviews);
}
