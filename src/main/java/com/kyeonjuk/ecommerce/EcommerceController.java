package com.kyeonjuk.ecommerce;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class EcommerceController {

    @GetMapping("/header")
    public String header() {
        return "header";
    }

    @GetMapping("/")
    public String root() {
        return "main";
    }

    @GetMapping("/cart")
    public String cart() {
        return "cart";
    }

    @GetMapping("/like")
    public String like() {
        return "like";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/checkout")
    public String checkout() {
        return "checkout";
    }

    @GetMapping("/shop-detail")
    public String shopDetail() {
        return "shop-detail";
    }

    @GetMapping("/shop-list")
    public String shopList() {
        return "shop-list";
    }

}
