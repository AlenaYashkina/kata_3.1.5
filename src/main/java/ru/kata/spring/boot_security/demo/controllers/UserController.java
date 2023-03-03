package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.kata.spring.boot_security.demo.services.UserService;

import java.security.Principal;

@Controller
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/user")
    public String getAuthUser(Model model, Principal principal) {
        model.addAttribute("authUser", userService.findUserByUsername(principal.getName()));
        return "user";
    }

    @GetMapping("/admin")
    public String getAuthAdmin(Model model, Principal principal) {
        model.addAttribute("authUser", userService.findUserByUsername(principal.getName()));
        return "users";
    }
}
