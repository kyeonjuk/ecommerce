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
    public String main() {
        return "main";
    }

}
