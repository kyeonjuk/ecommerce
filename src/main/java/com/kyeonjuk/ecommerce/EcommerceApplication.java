package com.kyeonjuk.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EcommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceApplication.class, args);
		System.out.println("http://localhost:8080/header");
		System.out.println("http://localhost:8080/");
		System.out.println("http://localhost:8080/cart");
		System.out.println("http://localhost:8080/like");
		System.out.println("http://localhost:8080/login");
		System.out.println("http://localhost:8080/checkout");
		System.out.println("http://localhost:8080/shop-detail");
		System.out.println("http://localhost:8080/shop-list");
	}

}
