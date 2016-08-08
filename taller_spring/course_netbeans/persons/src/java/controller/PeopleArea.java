/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import entities.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import model.PersonDAO;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author omaryahir
 */
@Controller
@RequestMapping("/peoplearea.htm")
public class PeopleArea {
    
    @Autowired
    private PersonDAO dao;
    
    @RequestMapping(method=RequestMethod.GET)
    public String showPerson(){
        return "buscar";
    }
    
    @RequestMapping(method=RequestMethod.POST)
    public String addPerson(@RequestParam("id") String id, Model model){
          
        Person p = dao.readByIdJPQL(id);
        
        if (p == null) {
            return "error";
        }
        
        //model.addAttribute("listperson", p.getListCollection());
        
        return "list";
        
    }    
    
}
