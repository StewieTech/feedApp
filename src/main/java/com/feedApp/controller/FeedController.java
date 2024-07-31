package com.feedApp.controller;

import com.feedApp.domain.PageResponse;
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

    @GetMapping("/{feedId}")
    public Feed getFeed(@PathVariable int feedId) {
        logger.debug("Getting Feed, feedId: {}", feedId);
        return this.feedService.getFeedById(feedId);
    }
    @PostMapping
    public Feed createFeed(@RequestBody Feed feed) {
        logger.debug("Creating Feed");
        return this.feedService.createFeed(feed);

    }

    @GetMapping("/user/{pageNum}/{pageSize}")
    public PageResponse<Feed> getUserFeeds(@PathVariable int pageNum, @PathVariable int pageSize) {
        logger.debug("Getting User Feeds List, pageNum: {}, pageSize: {}", pageNum, pageSize);

        return this.feedService.getUserFeeds(pageNum, pageSize);
    }

    @GetMapping("/other/{pageNum}/{pageSize}")
    public PageResponse<Feed> getOtherUsersFeeds(@PathVariable int pageNum, @PathVariable int pageSize) {
        logger.debug("Getting Other Users Feeds List, pageNum: {}, pageSize: {}", pageNum, pageSize);

        return this.feedService.getOtherUsersFeeds(pageNum,pageSize);
    }

}
