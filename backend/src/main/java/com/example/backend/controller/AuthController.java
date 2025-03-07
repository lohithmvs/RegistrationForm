package com.example.backend.controller;

import com.example.backend.model.Student;
import com.example.backend.repository.StudentRepository;
import com.example.backend.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/authentication")
public class AuthController {

    @Autowired
    private StudentRepository userRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody Student login) {
        Optional<Student> userOptional = userRepo.findById(login.getEmail());

        if (userOptional.isPresent() && passwordEncoder.matches(login.getPassword(), userOptional.get().getPassword())) {
            Student user= userOptional.get();
            emailService.sendEmail(user.getEmail(), "Login Alert",
                    "Hello " +user.getName() + "," + "\n\nYou have been successfully logged into your account on " + LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss")));

            return ResponseEntity.ok("Login successful");
        }
        return ResponseEntity.status(401).body("Invalid email or password");
    }
}