package com.hongtao.daisy.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({ "/Home", "/home", "/", "" })
public class HomeController {

    @RequestMapping({ "/Index", "/index", "", "/" })
    public String Index() {
        return "Hello Spring boot!";
    }
}