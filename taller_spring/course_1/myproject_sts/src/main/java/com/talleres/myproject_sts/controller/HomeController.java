package com.talleres.myproject_sts.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String welcome(Model model){
		model.addAttribute("msg1", "Hola Mundo!");
		model.addAttribute("msg2", "Hello World!");
		
		return "welcome";
	}
	
	

}
