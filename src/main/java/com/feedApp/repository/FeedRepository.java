package com.feedApp.repository;

import com.feedApp.jpa.Feed;
import com.feedApp.jpa.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable ;


public interface FeedRepository extends JpaRepository<Feed, Integer>, PagingAndSortingRepository<Feed,Integer> {
    Page<Feed> findByUser(User user, Pageable pageable);

    Page<Feed> findByUserNot(User user, Pageable pageable);

}
