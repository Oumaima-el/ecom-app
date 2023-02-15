package ma.enset.billingservice.model;

import lombok.Data;

@Data
public class Product {
    private Long id;
    private String designation;
    private double price;
    private int quantity;
}
