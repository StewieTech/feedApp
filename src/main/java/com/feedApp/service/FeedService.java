package com.feedApp.service;

import com.feedApp.domain.PageResponse;
import com.feedApp.exception.domain.FeedNotFoundException;
import com.feedApp.exception.domain.UserNotFoundException;
import com.feedApp.jpa.Feed;
import com.feedApp.jpa.User;
import com.feedApp.repository.FeedRepository;
import com.feedApp.repository.UserRepository;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.Instant;

@Service
public class FeedService {

    @Autowired
    FeedRepository feedRepository ;

    @Autowired
    UserRepository userRepository ;

//    public Feed getFeedById(int id) {
//        final Logger logger = LoggerFactory.getLogger(this.getClass());
//
//        return feedRepository.findById(id).orElse(null) ;
//    }

    public Feed getFeedById(int feedId) {

        return this.feedRepository.findById(feedId)
                .orElseThrow(() -> new FeedNotFoundException(String.format("Feed doesn't exist, %d", feedId)));
    }

    public Feed createFeed(Feed feed) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        User user = this.userRepository.findByUsername(username)
                .orElseThrow(()-> new UserNotFoundException(String.format("Username doesn't exist, %s", username)));
        feed.setUser(user);
        feed.setCreatedOn(Timestamp.from(Instant.now()));

        return this.feedRepository.save(feed);
    }

    public PageResponse<Feed> getUserFeeds(int pageNum, int pageSize) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();

        User user = this.userRepository.findByUsername(username)
                .orElseThrow(() -> new UserNotFoundException(String.format("Username doesn't exist, %s", username)));

        Page<Feed> paged = this.feedRepository.findByUser(user, PageRequest.of(pageNum, pageSize, Sort.by("feedId").descending()));

        return new PageResponse<Feed>(paged) ;
    }

    public PageResponse<Feed> getOtherUsersFeeds(int pageNum, int pageSize) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = this.userRepository.findByUsername(username)
                .orElseThrow(()->new UserNotFoundException(String.format("Username doesn't exist, %s", username)));

        Page<Feed> paged = this.feedRepository.findByUserNot(user, PageRequest.of(pageNum, pageSize, Sort.by("feedId").descending()));

        return new PageResponse<Feed>(paged);
    }

}
