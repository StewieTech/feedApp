package com.feedApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.feedApp.jpa.User ;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmailId(String email) ;

}
