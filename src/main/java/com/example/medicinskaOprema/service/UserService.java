package com.example.medicinskaOprema.service;

import com.example.medicinskaOprema.model.User;
import com.example.medicinskaOprema.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public  User registerUser(User user) {
        user.setPassword((passwordEncoder.encode(user.getPassword())));
        user.setEnabled(false);
        return userRepository.save(user);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void activateUser(String email) {
        Optional<User> user = userRepository.findByEmail((email));
        user.ifPresent(u -> {
            u.setEnabled(true);
            userRepository.save(u);
        });
    }
}
