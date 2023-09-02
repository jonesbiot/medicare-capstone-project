package com.capstone.project.capstone.excption;

/* Created by Jones Biot Banabale */

//http://localhost:8080/user/2  try find user using postman
public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not found the user with id "+ id);
    }
}