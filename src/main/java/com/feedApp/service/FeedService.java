package com.feedApp.service;

import com.feedApp.jpa.Feed;
import com.feedApp.repository.FeedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FeedService {

    @Autowired
    private FeedRepository feedRepository ;

    public Feed getFeedById(int id) {
        return feedRepository.findById(id).orElse(null) ;
    }
}
