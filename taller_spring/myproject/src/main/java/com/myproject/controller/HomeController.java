package com.myproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by omaryahir on 6/22/16.
 */
@Controller
public class HomeController {
    @RequestMapping(value="/")
    public String home(){
        return "test";
    }
}
