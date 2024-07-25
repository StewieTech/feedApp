package com.feedApp.service;

import com.feedApp.jpa.User;
import com.feedApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service ;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    EmailService emailService ;

    public List<User> listUsers() {
        return this.userRepository.findAll();
    }

    public Optional<User> findByUsername(String username) {
        return this.userRepository.findByUsername(username);
    }

    public void createUser(User user) {
        this.userRepository.save(user);
    }

    public User signup(User user) {
        user.setUsername(user.getUsername().toLowerCase());
        user.setEmailId(user.getEmailId());

        user.setEmailVerified(false);
        user.setCreatedOn(Timestamp.from(Instant.now()));
        this.userRepository.save(user);
        this.emailService.sendVerificationEmail(user);
        return user ;
    }


}

