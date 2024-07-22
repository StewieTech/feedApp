package com.feedApp.jdbc;

import java.sql.Timestamp ;

// Holds data of an object, no userLogic
public class UserBean {
    private Integer userId;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String phone;
    private String emailId;
    private Boolean emailVerified;
    private Timestamp createdOn;

    public String getFirstName() {
        return firstName;
    }

    public Integer getUserId() {
        return userId;
    }

    public String getLastName() {
        return lastName;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmailId() {
        return emailId;
    }

    public Boolean getEmailVerified() {
        return emailVerified;
    }

    public Timestamp getCreatedOn() {
        return createdOn;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public void setEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
    }

    public void setCreatedOn(Timestamp createdOn) {
        this.createdOn = createdOn;
    }

    @Override
    public String toString() {
        return "UserBean{" +
                "userId=" + userId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", emailId='" + emailId + '\'' +
                ", emailVerified=" + emailVerified +
                ", createdOn=" + createdOn +
                '}';
    }
}
