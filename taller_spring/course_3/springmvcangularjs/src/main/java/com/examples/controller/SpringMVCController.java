package com.examples.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by omaryahir on 6/25/16.
 */
@Controller
public class SpringMVCController {

    @RequestMapping(value="/default.web", method = RequestMethod.GET)
    public String printWelcome(ModelMap model){
        return "default";
    }

    @RequestMapping(value="/springAngularJS.web",
        method = RequestMethod.GET, produces = {"application/xml", "application/json"})
    public @ResponseBody Person getPerson() {
        Person person = new Person();
        person.setFirstName("omar");
        person.setLastName("yahir");
        return person;
    }

}
