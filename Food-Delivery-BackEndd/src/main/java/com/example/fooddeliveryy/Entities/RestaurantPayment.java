package com.example.fooddeliveryy.Entities;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "restaurant_payment")
public class RestaurantPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Rastaurant restaurant;

    @Column(name = "payment_date")
    private LocalDate paymentDate;

    @Column(name = "payment_amount")
    private double paymentAmount;

    @Column(name = "payment_fee")
    private double paymentFee;


    public RestaurantPayment() {

    }

    public RestaurantPayment(Long id, Rastaurant restaurant, LocalDate paymentDate, double paymentAmount, double paymentFee) {
        this.id = id;
        this.restaurant = restaurant;
        this.paymentDate = paymentDate;
        this.paymentAmount = paymentAmount;
        this.paymentFee = paymentFee;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Rastaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Rastaurant restaurant) {
        this.restaurant = restaurant;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
    }

    public double getPaymentAmount() {
        return paymentAmount;
    }

    public void setPaymentAmount(double paymentAmount) {
        this.paymentAmount = paymentAmount;
    }


    public double getPaymentFee() {
        return paymentFee;
    }

    public void setPaymentFee(double paymentFee) {
        this.paymentFee = paymentFee;
    }



    @Override
    public String toString() {
        return "RestaurantPayment{" +
                "id=" + id +
                ", restaurant=" + restaurant +
                ", paymentDate=" + paymentDate +
                ", paymentAmount=" + paymentAmount +
                ", paymentFee=" + paymentFee +
                '}';
    }
}
