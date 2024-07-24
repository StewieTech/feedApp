package com.feedApp.jpa;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name="\"FeedMetaData\"")
public class FeedMetaData implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="\"feedMetaDataId\"")
    private Integer feedMetaDataId ;

    private String comment ;

    @Column(name="\"createdOn\"")
    private Timestamp createdOn;

    @Column(name="\"IsLike\"")
    private Boolean isLike ;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name="\"feedId\"")
    private Feed feed ;

    @ManyToOne
    @JoinColumn(name="\"actionUserId\"")
    private User user ;

    public FeedMetaData() {

    }

    public Integer getFeedMetaDataId() {
        return feedMetaDataId;
    }

    public void setFeedMetaDataId(Integer feedMetaDataId) {
        this.feedMetaDataId = feedMetaDataId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Timestamp getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Timestamp createdOn) {
        this.createdOn = createdOn;
    }

    public Boolean getLike() {
        return isLike;
    }

    public void setLike(Boolean like) {
        isLike = like;
    }

    public Feed getFeed() {
        return feed;
    }

    public void setFeed(Feed feed) {
        this.feed = feed;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


}
