package com.feedApp.controller;

import com.feedApp.jpa.Feed;
import com.feedApp.service.FeedService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/feeds")
public class FeedController {
    final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    FeedService feedService;

    @PostMapping
    public Feed createFeed(@RequestBody Feed feed) {
        logger.debug("Creating Feed");
        return this.feedService.createFeed(feed);

    }
}
